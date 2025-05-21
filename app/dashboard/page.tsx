import { createClient } from "@/app/_utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    const articles = async () => {
        const { count } = await supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'published');
        return count;
    }

    const drafts = async () => {
        const { count } = await supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'draft');
        return count;
    }

    const categories = async () => {
        const { count } = await supabase.from('categories').select('*', { count: 'exact', head: true });
        return count;
    }

    if (error || !data?.user) {
        redirect('/login');
    }

    return (
        <section className="flex flex-col">
            <h1 className="font-bold mb-10 mt-4 text-3xl">Tableau de bord</h1>
            <ul>
                <li>Nombre d&apos;articles publiés&nbsp;: {articles()}</li>
                <li>Nombre de brouillons&nbsp;: {drafts()}</li>
                <li>Nombre de catégories&nbsp;: {categories()}</li>
            </ul>
        </section>
    );
}
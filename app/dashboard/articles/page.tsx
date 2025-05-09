import ArticlesList from "@/app/_ui/ArticlesList";
import { createClient } from "@/app/_utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ArticlesPage() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/login');
    }

    return (
        <div className="w-75/100">
            <h1 className="font-bold mb-10 mt-4 text-3xl">Articles</h1>

            <section className="mb-10">
                <h2 className="font-bold mb-5 text-xl">Liste des articles</h2>
                <ArticlesList published={true} />
            </section>

            <section>
                <h2 className="font-bold mb-5 text-xl">Brouillons</h2>
                <ArticlesList published={false} />
            </section>
        </div>
    )
}
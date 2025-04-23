import { redirect } from "next/navigation";
import { createClient } from "@/app/_utils/supabase/server";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/login');
    }

    return (
        <section className="flex flex-col">
            <h1 className="my-4 text-3xl">Tableau de bord</h1>
        </section>
    );
}
import { redirect } from "next/navigation";
import CategoriesList from "@/app/_ui/CategoriesList";
import { createClient } from "@/app/_utils/supabase/server";
import { createCategory } from "./actions";

export default async function Categories() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/login');
    }

    return (
        <div className="w-75/100">
            <h1 className="font-bold mb-10 mt-4 text-3xl">Catégories</h1>

            <div className="flex flex-row justify-between w-80/100">
                <section>
                    <h2 className="font-bold mb-5 text-xl">Liste des catégories</h2>
                    <CategoriesList />
                </section>

                <section className="w-40/100">
                    <h2 className="font-bold mb-5 text-xl">Ajouter une catégorie</h2>
                    <form action={createCategory} className="border border-gray border-solid flex flex-col px-10 py-5">
                        <label className="font-bold" htmlFor="categoryName">Nom</label>
                        <input
                            type="text"
                            name="categoryName"
                            placeholder="Nom de la catégorie"
                            className="mb-8 mt-3 outline outline-[#e3dddc] p-2"
                            required
                        />

                        <button type="submit" className="bg-blue-500 hover:bg-sky-700 cursor-pointer m-auto p-3 rounded-3xl text-white">Ajouter une catégorie</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
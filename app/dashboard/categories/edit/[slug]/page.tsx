import { notFound } from "next/navigation";
import createClient from "@/app/_utils/supabase/client";
import DeleteCategoryButton from "@/app/_ui/DeleteCategoryButton";
import { editCategory } from "../../actions";

export default async function EditCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const supabase = await createClient();
    const { slug } = await params;
    const { data: category } = await supabase.from('categories').select("name").match({ slug }).single();
    const updateCategory = editCategory.bind(null, slug);

    if (!category) {
        notFound();
    }

    return (
        <div className="w-75/100">
            <h1 className="font-bold mb-10 mt-4 text-3xl">Modifier une catégorie</h1>
            <form className="flex flex-col items-start" action={updateCategory}>
                <label className="font-bold" htmlFor="categoryName">Nouveau nom</label>
                <input
                    type="text"
                    name="categoryName"
                    placeholder={category.name}
                    className="mb-8 mt-3 outline outline-[#e3dddc] p-2 w-30/100"
                    required
                />

                <button type="submit" className="bg-blue-500 hover:bg-sky-700 cursor-pointer mb-4 p-3 rounded-3xl text-white">Modifier la catégorie</button>
            </form>

            <DeleteCategoryButton categorySlug={slug} />
        </div>
    )
}
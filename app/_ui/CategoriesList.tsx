import createClient from "@/app/_utils/supabase/client";

export default async function CategoriesList() {
    const supabase = await createClient();
    const { data: categories } = await supabase.from('categories').select('slug, name').order('name', { ascending: true });

    if (!categories) {
        return <p>Aucune catégorie créée.</p>
    }

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.slug} className="mb-2">
                    {/* TO DO : Ajout du bouton Modifier */}
                    {category.name} <button type="button" className=" cursor-pointer mr-5 text-gray-400 text-sm">Modifier</button>
                </li>
            ))}
        </ul>
    )
}
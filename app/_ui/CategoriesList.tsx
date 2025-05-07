import Link from "next/link";
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
                    {category.name} <Link href={`/dashboard/categories/edit/${category.slug}`} className="cursor-pointer mr-5 text-gray-400 text-sm">Modifier</Link>
                </li>
            ))}
        </ul>
    )
}
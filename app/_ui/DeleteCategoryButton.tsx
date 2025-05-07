'use client';

import { deleteCategory } from "../dashboard/categories/actions";

export default function DeleteCategoryButton({ categorySlug }: { categorySlug: string }) {
    const handleDelete = async () => {
        try {
            const result = await deleteCategory(categorySlug);
            console.log("Résultat suppression :", result);
        } catch (e) {
            console.error("Erreur lors de la suppression", e);
        }
    };

    return (
        <button className="cursor-pointer text-red-500" onClick={handleDelete}>Supprimer une catégorie</button>
    )
}
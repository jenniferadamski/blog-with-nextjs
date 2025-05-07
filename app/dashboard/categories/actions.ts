'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/_utils/supabase/server";
import { v4 as uuidv4 } from 'uuid';

function createSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9 -]/g, '')
             .replace(/\s+/g, '-')
             .replace(/-+/g, '-');

    return str;
}
 
export async function createCategory(formData: FormData) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    const categoryName = formData.get('categoryName') as string;
    const uuid = uuidv4();

    const { error } = await supabase
        .from('categories')
        .insert([
            {
                id: uuid,
                name: categoryName,
                slug: createSlug(categoryName),
                created_at: new Date(),
            },
        ]);

    if (!data?.user) {
        redirect('/login');
    } else if (error){
        throw new Error(error.message);
    }
 
    revalidatePath("/");
}

export async function editCategory(slug: string, formData: FormData) {
    const supabase = await createClient();
    const categoryName = formData.get('categoryName') as string;
    const { error } = await supabase
        .from('categories')
        .update([
            {
                name: categoryName,
                slug: createSlug(categoryName),
            },
        ])
        .eq('slug', slug);
    
    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/dashboard/categories');
    redirect('/dashboard/categories');
}

export async function deleteCategory(slug: string){
    const supabase = await createClient();
    const { error } = await supabase.from('categories').delete().eq('slug', slug);

    if (error) {
        console.error('Supabase DELETE error :', error);
        throw new Error(error.message);
    }

    revalidatePath('/dashboard/categories');
    redirect('/dashboard/categories');
}
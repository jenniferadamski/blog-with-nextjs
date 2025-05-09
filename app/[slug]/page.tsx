import NavBar from "@/app/_ui/NavBar";
import createClient from "@/app/_utils/supabase/client";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const supabase = createClient();
    const { data: posts } = await supabase.from('posts').select('slug');

    return posts?.map(({ slug }) => ({
        slug,
    })) as [];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const supabase = createClient();
    const { slug } = await params;
    const { data: post } = await supabase.from('posts').select("*, users(username), categories(name)").match({ slug }).single();

    if (!post) {
        notFound();
    }

    return (
        <>
            <NavBar />
            <div className="px-8 py-6">
                <div className="mb-8">
                    <h1 className="mb-2 text-4xl">{post.title}</h1>
                    <span className="text-gray-400">Publié le {format(post.created_at, 'dd/MM/yyyy')} par {post.users.username} dans {post.categories.name}</span>
                </div>
                <p>{post.content}</p>
            </div>
        </>
    )
}
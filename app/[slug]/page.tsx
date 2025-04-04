import { notFound } from "next/navigation";
import supabase from "../_utils/supabase";
import { format } from "date-fns";

export async function generateStaticParams() {
    const { data: posts } = await supabase.from('posts').select('slug');

    return posts?.map(({ slug }) => ({
        slug,
    })) as [];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: post } = await supabase.from('posts').select("*, users(username)").match({ slug }).single();

    if (!post) {
        notFound();
    }

    return (
        <div className="px-8 py-6">
            <div className="mb-8">
                <h1 className="mb-2 text-4xl">{post.title}</h1>
                <span>Publié le {format(post.created_at, 'dd/MM/yyyy')} par {post.users.username}</span>
            </div>
            <p>{post.content}</p>
        </div>
    )
}
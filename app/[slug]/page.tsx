import { notFound } from 'next/navigation';
import supabase from '../_utils/supabase';

export async function generateStaticParams() {
    const { data: posts } = await supabase.from('posts').select('slug');

    return posts?.map(({ slug }) => ({
        slug,
    }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: post } = await supabase.from('posts').select().match({ slug }).single();

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <span>{post.created_at}</span>
            <p>{post.content}</p>
        </div>
    )
}
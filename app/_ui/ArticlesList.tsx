import createClient from "@/app/_utils/supabase/client";

export default async function ArticlesList({ published }: { published: boolean }) {
    const supabase = createClient();
    const { data: publishedPosts } = await supabase.from('posts').select('slug, title, status, created_at').eq('status', 'published').order('created_at', { ascending: true });
    const { data: draftPosts } = await supabase.from('posts').select('slug, title, status, created_at').eq('status', 'draft').order('created_at', { ascending: true });

    if (!publishedPosts) {
        return <p>Aucun article n&apos;a été publié.</p>
    }

    if (!draftPosts) {
        return <p>Aucun brouillon d&apos;article n&apos;a été écrit.</p>
    }

    return (
        <ul>
            {published == true ? publishedPosts.map((post) => (
                <li key={post.slug} className="mb-2">{post.title}</li>
            )) : draftPosts.map((post) => (
                <li key={post.slug} className="mb-2">{post.title}</li>
            ))}
        </ul>
    )
}
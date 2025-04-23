import Link from "next/link";
import createClient from "@/app/_utils/supabase/client";
import { format } from "date-fns";

export default async function LatestPosts() {
    const supabase = await createClient();
    const { data: posts } = await supabase.from('posts').select('slug, title, created_at').order('created_at', { ascending: false }).limit(10);

    if (!posts) {
        return <p>Aucun article n&apos;a été publié pour le moment.</p>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug} className="mb-5">
                    <Link href={post.slug}>
                        {post.title}
                        <span className="ml-10 text-gray-400">{format(post.created_at, 'dd/MM/yyyy')}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
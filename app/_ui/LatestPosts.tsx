import Link from "next/link";
import supabase from "../_utils/supabase";
import { format } from "date-fns";

export default async function LatestPosts() {
    const { data: posts } = await supabase.from('posts').select('slug, title, created_at').order('created_at', { ascending: false }).limit(10);

    if (!posts) {
        return <p>Aucun article trouvé.</p>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug} className="mb-5">
                    <Link href={post.slug}>
                        {post.title}
                        <span className="ml-10">{format(post.created_at, 'dd/MM/yyyy')}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
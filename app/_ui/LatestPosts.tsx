import Link from "next/link";
import supabase from "../_utils/supabase";

export default async function LatestPosts() {
    const { data: posts } = await supabase.from('posts').select('slug, title');

    if (!posts) {
        return <p>No posts found.</p>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={post.slug}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}
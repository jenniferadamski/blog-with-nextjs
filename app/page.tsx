import LatestPosts from "./_ui/LatestPosts";

export default function Home() {
    return (
        <div className="px-8 py-6">
            <h1 className="mb-15 text-4xl">Hello world.</h1>
            <div className="flex mx-auto my-0 w-3/4">
                <LatestPosts />
            </div>
        </div>
    )
}

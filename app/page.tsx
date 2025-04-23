import LatestPosts from "@/app/_ui/LatestPosts";
import NavBar from "@/app/_ui/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="px-8 py-6">
                <h1 className="mb-15 text-4xl">Hello, blog.</h1>
                <div className="flex mx-auto my-0 w-3/4">
                    <LatestPosts />
                </div>
            </div>
        </>
    )
}

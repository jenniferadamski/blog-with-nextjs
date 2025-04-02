import Link from "next/link";

export default function Home() {
    return (
        <div className="px-8 py-6">
            <h1 className="mb-15 text-4xl">Mon super blog</h1>

            <div className="flex mx-auto my-0 w-3/4">
                <ul>
                    <li className="mb-8"><Link href={'article-2'}>Article 2</Link></li>
                    <li className="mb-8"><Link href={'article-1'}>Article 1</Link></li>
                </ul>
            </div>
        </div>
    )
}

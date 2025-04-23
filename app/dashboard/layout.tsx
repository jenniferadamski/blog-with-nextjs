import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row h-screen">
            <nav className="bg-[#e3dddc] mr-10 w-20/100">
                <ul className="flex flex-col">
                    <li className="h-10 flex items-center px-10">
                        <Link href="/dashboard/articles" className="w-full">Articles</Link>
                    </li>
                    <li className="h-10 flex items-center px-10">
                        <Link href="/dashboard/categories" className="w-full">Catégories</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
import Link from "next/link";
import { signOut } from "../login/actions";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row h-screen">
            <nav className="bg-[#e3dddc] mr-10 w-20/100">
                <ul className="flex flex-col">
                    <li className="h-10 flex items-center px-10">
                        <Link href="/" className="text-gray-400 underline w-full">Voir le blog</Link>
                    </li>
                    <li className="h-10 flex items-center px-10">
                        <Link href="/dashboard/articles" className="w-full">Articles</Link>
                    </li>
                    <li className="h-10 flex items-center px-10">
                        <Link href="/dashboard/categories" className="w-full">Catégories</Link>
                    </li>
                </ul>

                <button className="cursor-pointer h-10 flex items-center px-10 text-red-500" onClick={signOut}>Se déconnecter</button>
            </nav>
            {children}
        </div>
    )
}
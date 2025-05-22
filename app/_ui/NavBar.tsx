import Link from "next/link";
import Logo from "./Logo";
import { createClient } from "@/app/_utils/supabase/server";
import { signOut } from "../login/actions";

export default async function NavBar() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <nav className="flex flex-row items-center justify-between px-8 pt-6 pb-12 w-100/100">
            <div className="w-30 md:w-38">
                <Logo />
            </div>

            {user
                ? <div className="flex flex-col sm:flex-row items-end sm:items-center">
                    <Link href="/dashboard">Tableau de bord</Link>
                    <button className="cursor-pointer h-10 ml-8 text-red-500" onClick={signOut}>Se déconnecter</button>
                </div>

                : <Link href="/login" className="cursor-pointer h-10">Se connecter</Link>
            }
        </nav>
    )
}
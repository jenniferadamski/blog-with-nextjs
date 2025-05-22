'use client';

import Link from "next/link";
import Logo from "../_ui/Logo";

export default function ErrorPage() {
    return (
        <>
            <div className="px-8 pt-6 pb-12 w-40">
                <Logo />
            </div>
            <section className="flex flex-col items-center m-auto w-100/100 md:w-80/100 lg:w-70/100 xl:w-60/100">
                <h1 className="mb-5 text-4xl">Erreur</h1>
                <p className="mb-5">Une erreur s&apos;est produite.</p>

                <Link href="/" className="bg-blue-500 hover:bg-sky-700 cursor-pointer m-auto p-3 rounded-3xl text-center text-white w-60/100 md:w-50/100 lg:w-40/100 xl:w-30/100 min-w-[250px] max-w-[250px]">
                    Retourner sur la page d&apos;accueil
                </Link>
            </section>
        </>
    )
}
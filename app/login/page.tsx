import Logo from "@/app/_ui/Logo";
import { login } from "./actions";

export default function LoginPage() {
    return (
        <>
            <div className="px-8 pt-6 pb-12 w-40">
                <Logo />
            </div>

            <section className="flex flex-col items-center">
                <h1 className="mb-15 text-4xl">Se connecter</h1>
                <form className="flex flex-col w-60/100 md:w-50/100 lg:w-40/100 xl:w-30/100">
                    <label className="font-bold" htmlFor="email">Adresse e-mail</label>
                    <input className="mb-8 mt-3 outline outline-[#e3dddc] p-2" id="email" name="email" type="email" required />

                    <label className="font-bold" htmlFor="password">Mot de passe</label>
                    <input className="mb-8 mt-3 outline outline-[#e3dddc] p-2" id="password" name="password" type="password" required />

                    <button className="bg-blue-500 hover:bg-sky-700 cursor-pointer m-auto p-3 rounded-3xl text-white w-50/100" formAction={login}>
                        Se connecter
                    </button>
                </form>
            </section>
        </>
    )
}
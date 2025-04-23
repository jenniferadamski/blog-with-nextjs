import Image from "next/image";
import Link from "next/link";
import blogLogo from "/public/blog-logo.webp";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src={blogLogo}
                alt="Les mains d'une femme écrivant à l'aide d'un ordinateur portable"
                height={180}
                width={180}
            />
        </Link>
    )
}
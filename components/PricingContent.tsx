import Link from "next/link"

export const PricingContent = () => {

    return(
        <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold text-2xl"> Para todos </h3>
                <Link href="/#Mision" className="block text-lg font-normal hover:underline">
                    Mision, vision, objetivos y valores
                </Link>
                <Link href="/compania" className="block text-lg font-normal hover:underline">
                    Nuestra compañia
                </Link>
                <Link href="/empleados" className="block text-lg font-normal hover:underline">
                    Nuestros empleados
                </Link>
                <Link href="/porter" className="block text-lg font-normal hover:underline">
                    5 fuerzas de Michael Porter
                </Link>
                <Link href="/blog" className="block text-lg font-normal hover:underline">
                    Nuestro blog
                </Link>
            </div>
        </div>
    )
}
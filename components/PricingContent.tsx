import Link from "next/link"
import { useState } from "react"

export const PricingContent = () => {

    return(
        <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold text-xl"> Para todos </h3>
                <Link href="#Mision" className="block text-base font-normal hover:underline">
                    Mision, vision
                </Link>
                <Link href="#" className="block text-base font-normal hover:underline">
                    Nuestra compañia
                </Link>
                <Link href="#" className="block text-base font-normal hover:underline">
                    Nuestros empleados
                </Link>
            </div>
        </div>
    )
}
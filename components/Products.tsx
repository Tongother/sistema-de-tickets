import Link from "next/link";
import Image from "next/image";

interface ProductProps{
    product: string,
    iconSrc: string,
}
export default function Products({product, iconSrc}:ProductProps){
    const ref = `/cliente/crearTicket/${product}`;
    return(
        <Link href={`${ref}`} className="w-full h-full rounded-md shadow-lg p-8 hover:bg-slate-300 text-center flex flex-col justify-center items-center">
            <article>
                <h4 className='mb-5 text-xl' >{product}</h4>
                <div className="h-[200px]">
                    <Image src={`${iconSrc}`} width={200} height={200} alt=""/>
                </div>
            </article>
        </Link>
    )
}
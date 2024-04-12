import Link from "next/link";
import Image from "next/image";

interface DashboardProps {
    dashboardInfo: {name:string, src: string, redirect: string}[];
    title: string;
}

export default function Dashboard({dashboardInfo, title}:DashboardProps) {
    return (
        <>
            <article className="w-full h-[6em] flex items-center justify-center">
                <h1 className="text-xl">{title}</h1>
            </article>

            <section className="">

                {dashboardInfo.map((info) => (
                    <Link href={info.redirect}>
                    <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                        <Image src={`${info.src}`} alt="Personas" width={40} height={40}/>
                        <h1 className="ml-2">{info.name}</h1>
                    </article>
                    </Link>
                ))}

            </section>
        </>
    )
}
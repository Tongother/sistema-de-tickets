import Tickets from "@/components/Tickets"
export default function attention_status() {
    return (
        <div className="h-full w-full">
            <div className="h-[70px] flex items-center justify-center border border-b-2">
                <h1 className="text-center font-pop text-2xl">Estatus de atención</h1>
            </div>
            <Tickets />
        </div>//
    )
}
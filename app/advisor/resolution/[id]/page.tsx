import Resolution from "@/components/Resolution";
// Función para cargar un ticket específico
async function loadTicket(id:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}


// Componente para la página de resolución de tickets
export default async function TicketResolution(params: any) {
    const obj = params; 
    const tickets = await loadTicket(obj.params.id);
    const ticket = tickets[0];
    return (
        <section>
            {ticket && (
                <article>
                    <h1 className="text-2xl font-serif">Categoría: {ticket.categoria_problematica} </h1>
                    <p>Descripción del usuario: {ticket.descripcion}</p>
                </article>
            )}
            <article className="">
                <Resolution id_ticket={ticket.id_ticket}/>
            </article>
        </section>
    );
}

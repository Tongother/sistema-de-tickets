async function loadTicket(id:number){
    const res = await fetch(`https://windcodeinc.me/api/tickets/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

async function TicketResolution(params:any){
    console.log(params);
    const obj = params; 
    const tickets = await loadTicket(obj.params.id);
    const ticket = tickets[0];
    return (
        <div>
            <h1 className="text-2xl font-serif">Categoría: {ticket.categoria_problematica} </h1>
        </div>
    );
}
export default TicketResolution;

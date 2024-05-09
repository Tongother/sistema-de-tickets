import { fetchHistoryTable } from "@/app/lib/data";

const HistoryTable = async() => {
    const dataHistory = await fetchHistoryTable();
    console.log(fetchHistoryTable);
    return (
        <>
            <section className="">
                <h1>Historial de tickets resueltos</h1>
            </section>
            {dataHistory && (
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="min-w-[2em] text-center">ID_Ticket</th>
                        <th className="min-w-[5em] max-w-[6em] text-center">Cliente</th>
                        <th className="min-w-[5em] max-w-[6em] text-center">Problemática</th>
                        <th className="min-w-[15em] max-w-[11em] text-center">Estatus</th>
                        <th className="min-w-[15em] max-w-[11em] text-center">Fecha de apertura</th>
                        <th className="min-w-[15em] max-w-[11em] text-center">Fecha de cierre</th>
                        <th className="min-w-[5em] max-w-[6em] text-center">Solucionado por:</th>
                    </tr>
                </thead>

                <tbody>
                    {dataHistory.map((ticket:any) => (
                    <tr key = {ticket.id_ticket}>
                        <td className="border px-4 py-2">{ticket.id_ticket}</td>
                        <td className="border px-4 py-2">{ticket.nombre_cliente}</td>
                        <td className="border px-4 py-2">{ticket.categoria_problematica}</td>
                        <td className="border px-4 py-2">{ticket.estatus}</td>
                        <td className="border px-4 py-2">{ticket.fecha_reporte}</td>
                        <td className="border px-4 py-2">{ticket.fecha_solucion}</td>
                        <td className="border px-4 py-2">{ticket.nombre_asesor}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )}
        </>
    );
}
export default HistoryTable;
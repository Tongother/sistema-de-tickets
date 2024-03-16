export default function HistoryTable()
{
    return (
        <>
   
            <table className="table-auto">
            <thead>
                <tr>
                <th className="px-4 py-2">ID_Ticket</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Problemática</th>
                <th className="px-4 py-2">Estatus</th>
                <th className="px-4 py-2">Fecha de apertura</th>
                <th className="px-4 py-2">Fecha de cierre</th>
                <th className="px-4 py-2">Solucionado por</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">01</td>
                <td className="border px-4 py-2">Cristina Alfonson</td>
                <td className="border px-4 py-2">Problema de red</td>
                <td className="border px-4 py-2">Pendiente</td>
                <td className="border px-4 py-2">12/03/2024</td>
                <td className="border px-4 py-2">14/03/2024</td>
                <td className="border px-4 py-2">Julian Castro</td>

                </tr>
            </tbody>
            </table>
        </>
    );
}
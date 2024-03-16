export default function Tickets(){
    return (
        <div className="flex flex-wrap justify-center">
            
            <div className="bg-gray-200 p-4 m-2 rounded-lg w-64">
                <h3 className="text-lg font-semibold">Categoría: Problema de red</h3>
                <p className="text-sm">Estatus: Pendiente</p>
                <p className="text-sm">Reportado hace: 2 días</p>
    
            </div>


            <div className="bg-gray-200 p-4 m-2 rounded-lg w-64">
                <h3 className="text-lg font-semibold">Categoría: Problema de software</h3>
                <p className="text-sm">Estatus: En progreso</p>
                <p className="text-sm">Reportado hace: 1 semana</p>
    
            </div>
        </div>
    );
}
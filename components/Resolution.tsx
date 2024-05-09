'use client'
import axios from 'axios';
import { useState, useEffect} from 'react';

export default function Resolution(id_ticket: any) {
    const [userData, setUserData] = useState({
        id: 0,
        nombre: '',
        apellido: '',
        email: '',
        tipoUsuario: ''
      });
    const [response, setResponse] = useState(''); // Estado para almacenar el texto del textarea
    const [estatus, setEstatus] = useState('Pendiente')
    const [dropdown, setDropdown] = useState(false);
    const [resInfo, setResInfo] = useState({comentario: '', estatus: '' , id_asesor_asignado: 0, id_ticket: 0})
    // Función para manejar el envío del formulario

    useEffect(() => {
        const getProfile = async () => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
              withCredentials: true, 
            });
            setUserData(response.data);
          } catch (error) {
            console.error('Error al obtener el perfil:', error);
          }
        };
    
        getProfile();
      }, []); 

    const handleSubmit = async () => {
        setResInfo({comentario: response, estatus: estatus, id_asesor_asignado: userData.id, id_ticket:  id_ticket});
        try {
            const response = await axios.post('/api/auth/register', resInfo);
            window.location.href = '/advisor';
        }catch(error){
            console.error({error: 'No sirvió el POST'})
        }
    };
    // Función para manejar el cambio en el área de texto
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setResponse(event.target.value);
    };

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }
    // Función para manejar el cambio en el estado del ticket
    const handleStatusChange = (newStatus: string) => {
        setEstatus(newStatus);
    };

    return (
        <section>
            <textarea
                className="w-full h-40 border border-gray-300 rounded-md p-2 mt-4"
                placeholder="Escribe tu respuesta aquí..."
                value={response}
                onChange={handleChange}
            ></textarea>
            <div className="mt-4">
                <button className="border border-gray-200 shadow-md w-[200px] h-[40px] py-2 mt-6 hover:bg-violet-50 rounded-[10px]" onClick={handleSubmit}>
                    Enviar respuesta
                </button>
                <div className="inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={handleDropdown}>
                        <span>Seleccionar estado</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fillRule="evenodd"
                                d="M10 20a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fillRule="evenodd"
                                d="M10 4a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    {dropdown && 
                    <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleStatusChange('Solucionado')}>
                            Solucionado
                        </li>
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleStatusChange('En progreso')}>
                            En progreso
                        </li>
                    </ul>}
                </div>
            </div>
        </section>

    );
}
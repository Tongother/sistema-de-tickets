"use client"
import { useEffect, useState } from 'react';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState<{id_cliente: number; nombre: string; apellido: string; correo: string; contraseña:string;}[]>([]);
    const [filterEmployees, setFilterEmployees] = useState<{id_cliente: number; nombre: string; apellido: string; correo: string; contraseña:string;}[]>([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, { method: "GET" });
            if (!res.ok) {
              console.log("Error fetch");
            } else {
              const data = await res.json();
              setData(data);
            }
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };
    
        getData();
      }, []);

    useEffect(() => {
        setFilterEmployees(data);
        setFilterEmployees(data.filter((employee) => employee.nombre.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    return (
        <div className="w-full flex justify-center">
            <input type="text" placeholder="Search" 
            className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] 
            focus:outline-none border-gray-300 text-center"
            value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
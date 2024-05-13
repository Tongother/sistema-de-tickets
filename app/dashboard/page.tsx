"use client";
import SearchBar from "@/components/SearchBar";
import UsersTable from "@/components/Userstable";
import { fetchClientTable } from "@/app/lib/data";
import React, { useEffect, useState } from 'react';



export default function dashboard() {
  
  const [dataUsers, setDataUsers] = useState<any>([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const data = await fetchClientTable();
        setDataUsers(data);
      }catch(error){
        console.error('Error al obtener los datos de la tabla de Clientes:', error);
      }
    }

    fetchData();
  }, []);

    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
            <div className="mt-10">
              <SearchBar/>
            </div>
            <div className="h-full mt-10 max-h-[515px] overflow-auto">
              <UsersTable usuario="Cliente" data={{dataUsers:dataUsers, setDataUsers: setDataUsers}}/>
            </div>
        </div>
      </div>
    );
}
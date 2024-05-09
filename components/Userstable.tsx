"use client";
import { fetchUsersTable } from "@/app/lib/data";
import { useEffect, useState } from "react";

const UsersTable = () => {

  const [dataUsers, setDataUsers] = useState<any>([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const data = await fetchUsersTable();
        setDataUsers(data.pets);
        console.log(data.pets)
      }catch(error){
        console.error('Error al obtener los datos de la tabla de usuarios:', error);
      }
    }

    fetchData();
  }, []);


  return (
   <>
    {dataUsers && dataUsers.length > 0 && (
      <table className="w-full flex flex-col table-auto">
        <thead>
          <tr className="flex justify-around mb-[15px]">
            <th className="min-w-[2em] text-center">ID</th>
            <th className="min-w-[5em] max-w-[6em] text-center">Name</th>
            <th className="min-w-[5em] max-w-[6em] text-center">Email</th>
            <th className="min-w-[15em] max-w-[11em] text-center">Password</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user:any, index:number) => (
            <tr className="flex justify-around mb-[15px]" key={index}>
              <td className="min-w-[2em] text-center">{user.name}</td>
              <td className="min-w-[5em] max-w-[6em] text-center">{user.nombre}</td>
              <td className="min-w-[5em] max-w-[6em] text-center">{user.apellido}</td>
              <td className="min-w-[15em] max-w-[11em] text-center">{user.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    {dataUsers && dataUsers.length == 0 && (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-center text-gray-400 pb-[8em]">Maybe you need to do more marketing</p>
      </div>
    )}
   </>
  )
}

export default UsersTable;
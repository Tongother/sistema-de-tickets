"use client"
import { useEffect, useState } from "react";
import UsersTable from "@/components/UsersTable";
import SearchBar from "@/components/SearchBar";
import avatar from "./../../public/avatar.png";
import objetivo from "./../../public/objetivo.png";
import operador from "./../../public/operador.png";
import lista from "./../../public/lista-de-verificacion.png";
import aplicacion from "./../../public/aplicacion.png";

export default function dashboard() {

    const User:any= {
        id: 4,
        name: "Gunther",
        username: "Tongo",
        email: "nettelgunther@outlook.es",
    }

    const [search, setSearch] = useState('');
    const [employees, setEmployees] = useState<{ id: number; name: string; email: string; password: string; }[]>([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123",
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            password: "password456",
          },
          {
            id: 3,
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            password: "password789",
          },
          {
            id: 4,
            name: "Alice Williams",
            email: "alice.williams@example.com",
            password: "passwordabc",
          },
          {
            id: 5,
            name: "Eva Davis",
            email: "eva.davis@example.com",
            password: "passwordxyz",
          },
          {
            id: 6,
            name: "Michael Brown",
            email: "michael.brown@example.com",
            password: "password123",
          },
          {
            id: 7,
            name: "Olivia Wilson",
            email: "olivia.wilson@example.com",
            password: "password456",
          },
          {
            id: 8,
            name: "James Johnson",
            email: "james.johnson@example.com",
            password: "password789",
          },
          {
            id: 9,
            name: "Sophia Davis",
            email: "sophia.davis@example.com",
            password: "passwordabc",
          },
          {
            id: 10,
            name: "William Smith",
            email: "william.smith@example.com",
            password: "passwordxyz",
          },
          {
            id: 11,
            name: "Emma Wilson",
            email: "emma.wilson@example.com",
            password: "password123",
          },
    ]);
    const [filterEmployees, setFilterEmployees] = useState<{ id: number; name: string; email: string; password: string; }[]>([]);

    useEffect(() => {
        setFilterEmployees(employees);
        setFilterEmployees(employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    return (
      <main className="flex h-screen w-screen">
        <section className="w-[30%] bg-gray-900 text-white shadow-2xl">
            <article className="w-full h-[6em] flex items-center justify-center">
                <h1 className="text-xl">ADMIN</h1>
            </article>

            <section className="">
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${objetivo.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Clientes</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${operador.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Asesór tecnico</h1>
                </article>
                <article className=" flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${lista.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Estatus de atención</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${aplicacion.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Categoría de problematica</h1>
                </article>
                <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg  p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
                    <img src={`${lista.src}`} alt="Personas" className="w-[2em] h-[2em]"/>
                    <h1 className="ml-2">Reportes</h1>
                </article>
            </section>
        </section>

        <section className="w-full flex flex-col">
            <article className="bg-slate-50 w-full h-[5em] flex justify-end shadow-md">
                <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200">
                    <img src={`${avatar.src}`} alt="" className="w-[4em] h-[4em]" />
                    <div className="ml-[10px]">
                        <h1>Gunther Nettel</h1>
                        <p>Administrador</p>
                    </div>
                </div>
            </article>

            <article className="w-full h-full flex justify-center items-center">
                <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
                    <div className="mt-10">
                        <SearchBar search={search} setSearch={setSearch}/>
                    </div>
                    <div className="h-full mt-10 overflow-auto">
                        <UsersTable employees={filterEmployees}/>
                    </div>
                </div>
            </article>
        </section>
      </main>
    );
  }
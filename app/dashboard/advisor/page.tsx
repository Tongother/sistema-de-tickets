"use client"
import { useEffect, useState } from "react";
import UsersTable from "@/components/Userstable";
import SearchBar from "@/components/SearchBar";
import Connection from "@/database/Connection";

export default function advisor() {

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
            name: "Gunther Nettel",
            email: "john.doe@example.com",
            password: "password123",
          },
          {
            id: 2,
            name: "Cristian Alfonsín",
            email: "jane.smith@example.com",
            password: "password456",
          },
          {
            id: 3,
            name: "Julian Castro",
            email: "bob.johnson@example.com",
            password: "password789",
          },
    ]);
    const [filterEmployees, setFilterEmployees] = useState<{ id: number; name: string; email: string; password: string; }[]>([]);

    useEffect(() => {
        setFilterEmployees(employees);
        setFilterEmployees(employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    return (
      <>
        <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
            <div className="mt-10">
                <SearchBar search={search} setSearch={setSearch}/>
            </div>
            <div className="h-full mt-10 overflow-auto">
                <UsersTable employees={filterEmployees}/>
            </div>
        </div>
      </>
    );
  }
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Userstable() {
  const [employees, setEmployees] = useState([
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
  ]);

  return (
   <>
   
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Password</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => 
        <tr key={employee.id}>
          <td className="border px-4 py-2">{employee.id}</td>
          <td className="border px-4 py-2">{employee.name}</td>
          <td className="border px-4 py-2">{employee.email}</td>
          <td className="border px-4 py-2">{employee.password}</td>
        </tr>
        )}
      </tbody>
    </table>
   </>
  )
}

import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React, {FC, useEffect, useState } from "react";

interface UserTableProps{
  employees:{ id: number; name: string; email: string; password: string; }[];
}

const UsersTable:FC<UserTableProps> = ({employees}) => {
  
  return (
   <>
   
    <table className="w-full table-auto">
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

export default UsersTable;
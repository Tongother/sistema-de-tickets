interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Userstable() {
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
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Leanne Graham</td>
          <td className="border px-4 py-2">Bret</td>
          <td className="border px-4 py-2">1234</td>
        </tr>
      </tbody>
    </table>
   </>
  )
}

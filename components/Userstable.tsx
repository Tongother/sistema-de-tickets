import { fetchUsersTable } from "@/app/lib/data";

const UsersTable = async() => {

  const dataUsers = await fetchUsersTable();

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
          {dataUsers.map((user:any) => (
            <tr className="flex justify-around mb-[15px]" key={user.id_cliente}>
              <td className="min-w-[2em] text-center">{user.id_cliente}</td>
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
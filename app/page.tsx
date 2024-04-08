"use client";
import axios from "axios";

export default function Home() {
    const handleClick = async() => {
    const res = await axios.post("/api/client", {
      nombre: "Gunther",
      apellido: "Nettel",
      correo: "nettelgunther",
      contraseña: "1234"
    });
    console.log(res);
    }
    
  return (
    <main className="text-[#C73CE6]">
      <h1 className="m-[70px] text-[#4EE63C]" onClick={handleClick}>Hola main</h1>
    </main>
  );
}

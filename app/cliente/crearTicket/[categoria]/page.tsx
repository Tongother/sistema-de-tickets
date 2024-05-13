"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import solution from "@/public/solution.png";

const FormCategoria = (params: any) => {
  const obj = params;
  const categoria_mal = obj.params.categoria;
  const categoria = categoria_mal.replace(/%20/g, " ");

  const [postData, setPostData] = useState({
    id_cliente: 0,
    categoria_problematica: '',
    descripcion: ''
  });
  
  const [contenidoTextArea, setContenidoTextArea] = useState('');

  const [userData, setUserData] = useState({
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tipoUsuario: ''
  });

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`, { withCredentials: true });
        setUserData(res.data);
      } catch (error) {
        console.log('Petición no completada: ', error);
      }
    };
    getProfile();
  }, []);

  const descripcionHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContenidoTextArea(event.target.value);
  };

  const formHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newData = { ...postData, id_cliente_reportado: userData.id, categoria_problematica: categoria, descripcion: contenidoTextArea };
    const response = await axios.post('/api/crearTicket', newData);
    window.location.href = '/cliente'
  };

  return (
    <div className='flex h-full w-full bg-white justify-center items-center'>
      <form onSubmit={formHandleSubmit} className='shadow-lg h-[375px] w-[950px] flex flex-col border rounded-[30px]'>
        <div className="bg-[#212b5e] w-full h-[35px] rounded-t-[30px] mb-4"></div>
        <div className="w-full h-full items-center flex flex-row px-5 pb-5">
          <div className="mx-10">
            <Image src={solution} width={200} height={1} alt='' />
          </div>
          <div className="h-full w-[70%] flex flex-col px-7">
            <h1 className='text-3xl text-center text-gray-900 font-semibold font-pop'>{categoria}</h1>
            <label htmlFor="descripcionInput" className='font-pop text-xl mt-2 text-zinc-700'>Descripción del problema</label>
            <textarea
              onChange={descripcionHandleChange}
              value={contenidoTextArea}
              name="descripcion"
              id="descripcionInput"
              className='focus:outline-none focus:shadow-lg h-[150px] min-h-[100px] max-h-[150px] border border-gray-300 rounded-xl shadow-sm overflow-auto hover:shadow-md p-5 mt-2'
            ></textarea>
            <div className='flex justify-center'>
              <input type="submit" value="Enviar" className='shadow-md w-[200px] h-[45px] mt-6 hover:bg-violet-50 rounded-[10px]' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCategoria;

"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import solution from "@/public/solution.png";

const FormCategoria = (params: any) => {
  const obj = params;
  const categoria = obj.params.categoria;
  console.log(categoria);

  const [postData,setPostData] = useState({idCliente: 0,categoriaProblematica: '',descripcionProblematica: ''});
  const [contenidoTextArea, setContenidoTextArea] = useState({descripcion: ''})
  const [userData,setUserData] = useState({id: 0, nombre: '',apellido: '', email: '',tipoUsuario: '',});
  //useEffect es un método de react que sirve para ejecutar al inicializar la página este pdo de abajo, recibe dos parámetros(función a ejectuar, veces que se va a ejecutar)
  useEffect(()=>{
      const getProfile = async()=> {
          try{
              //res recibe un array de objetos con toda la información de la petición de axios, incluyendo la propiedad data que contiene la información de la cookie
              const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`,{withCredentials: true});
              setUserData(res.data);
          }
          catch(error){
              console.log('Petición no completada: ',error);
          }
      };
      getProfile();
  },[]);

  const descripcionHandleChange = (event: any) => {
    
  };

  const formHandleSubmit = () => {
    setPostData({...postData, idCliente: userData.id, categoriaProblematica: categoria, descripcionProblematica: '' })
  };

  const loginHandleSubmit = async (event:any) => {
    event.preventDefault();
    const response = await axios.post('/api/auth/login', postData);
    console.log(response);
  };
  return(
    <div className='flex h-full w-full bg-white justify-center items-center'> 
      <form onSubmit={(event) => {loginHandleSubmit(event);}} className='shadow-lg h-[375px] w-[950px] flex flex-col border rounded-[30px]'>
        <div className="bg-[#212b5e] w-full h-[35px] rounded-t-[30px] mb-4"></div>
        <div className="w-full h-full items-center flex flex-row px-5 pb-5">
          <div className=" mx-10">
            <Image src={solution.src} width={200} height={1} alt=''></Image>
          </div>
          <div className="h-full w-[70%] flex flex-col px-7">
            <h1 className=' text-3xl text-center text-gray-900 font-semibold font-pop'>Problemática categoría{}</h1>
            <label htmlFor="descripcionInput" className='font-pop text-xl mt-2 text-zinc-700'>Descripción del problema</label>
            <textarea onChange={(event) => {descripcionHandleChange(event);}} name="des" id="144" className='focus:outline-none focus:shadow-lg h-[150px] min-h-[100px] max-h-[150px] border border-gray-300 rounded-xl shadow-sm overflow-auto hover:shadow-md p-5 mt-2'></textarea>
            <div className='flex justify-center'>
                <input type="button" value="Enviar" className='shadow-md w-[200px] h-[45px] mt-6 hover:bg-violet-50 rounded-[10px]'/>
            </div>
          </div>
        </div>
      </form>
    </div>
)
};
export default FormCategoria;
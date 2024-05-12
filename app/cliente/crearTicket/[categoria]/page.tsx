"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FormCategoria = (params: any) => {
  async function getCategoria(params:any) {
    console.log('Hola Params: ',params);
    const objetoParams= params;
    const categoria = objetoParams.categoria;
  }
  
  const [postData,setPostData] = useState({idCliente: '',categoriaProblematica: '',descripcionProblematica: ''});
  //useState es un método de react que sirve para 
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
  const loginHandleSubmit = async (event:any) => {
    event.preventDefault();
    const response = await axios.post('/api/auth/login', postData);
    console.log(response);
  };
  return(
      <div className='flex flex-col h-full w-full bg-white justify-center items-center'> 
        <form onSubmit={(event) => {loginHandleSubmit(event);}} className='shadow-lg h-[500px] w-[650px] p-7 flex flex-col first-letter:border rounded-[30px]'>
            <h1 className=' text-3xl text-center my-7 mt-4 text-gray-700'>Sistema de Tickets</h1>
            <label htmlFor="descripcionInput" className=' text-xl mt-7'>Descripción del problema</label>
            <textarea name="des" id="144" className='focus:outline-none focus:shadow-lg h-[225px] min-h-[225px] max-h-[225px] border border-gray-300 rounded-xl shadow-sm overflow-hidden hover:shadow-md p-5 mt-6'></textarea>
            <div className='flex justify-center'>
                <input type="button" value="Enviar" className='shadow-md w-[200px] h-[45px] mt-6 hover:bg-violet-50 rounded-[10px]'/>
            </div>
        </form>
      </div>
  )
}
export default FormCategoria;
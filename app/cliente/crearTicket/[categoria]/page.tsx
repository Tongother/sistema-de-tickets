"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FormCategoria = (params: any) => {
  
  async function loadCatego(catego:any) {
  }
  
  // const res = await fetch(`http://www.windcodeinc.me/api/tickets/${categO}`)

  async function getCatego(params:any) {
    console.log('Hola Params: ',params);
    const objetoParams= params;
    const catego= await loadCatego(objetoParams.params.categoriaProblematica);
  }
  const [postData,setPostData] = useState({idCliente: '',categoriaProblematica: '',descripcionProblematica: ''});
  //useState es un método de react que sirve para 
  const [userData,setUserData] = useState({id: 0, nombre: '',apellido: '', email: '',tipoUsuario: '',});
  //useEffect es un método de react que sirve para ejecutar al inicializar la página este pdo de abajo, recibe dos parámetros(función a ejectuar, veces que se va a ejecutar)
  useEffect(()=>{
      const getProfile = async()=> {
          try{
              //res recibe un array de objetos con toda la información de la petición de axios, incluyendo la propiedad data que contiene la información de la cookie
              const res = await axios.get('http://localhost:3000/api/profile',{withCredentials: true});
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
    
      <div className='flex flex-col h-[70%] w-[50%] place-items-center justify-center bg-white rounded-[50px] p-[2%]'> 
        <div className='w-full h-[20%] flex place-items-center text-center justify-center'>
            <h1 className=' text-2xl'>Sistema de Tickets</h1>
        </div>
        <form onSubmit={(event) => {loginHandleSubmit(event);}} className='h-[80%] w-full p-5 flex flex-col mt-2 m-6'>
            <label htmlFor="descripcionInput" className=' text-2xl'>Descripción del problema</label>
            <input type="text" id='descripcionInput' className='h-[150px] border border-gray-300 rounded-xl shadow-sm overflow-hidden hover:shadow-md p-5 mt-6'/>
            <div className='flex justify-center'>
                <input type="button" value="Enviar" className=' border border-gray-200 shadow-md w-[200px] h-[30px] mt-6 hover:bg-violet-50 rounded-[10px]'/>
            </div>
        </form>
      </div>
  )
}
export default FormCategoria;
"use client";
import { fetchAdvisorTable, fetchClientTable } from "@/app/lib/data";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import setting from "@/public/setting.svg";
import settingHover from "@/public/settingHover.gif";
import axios from "axios";

interface UsersTableProps {
  usuario: string,
  editAdvisor?: {setEdit:any},
  advisorDelete?: {nombreAsesorAEliminar:any, setNombreAsesorAEliminar:any},
  setIsAreYouSure?: any,
  formRef?: any,
}

const UsersTable = ({usuario, editAdvisor, formRef, advisorDelete, setIsAreYouSure}:UsersTableProps) => {

  const [dataUsers, setDataUsers] = useState<any>([]);
  const [imageSetting, setImageSetting] = useState<any>([]);
  const [counter, setCounter] = useState<any>(0);
  //Variables para cambio de imagen y seleccion de usuario

  const [isSetting, setIsSetting] = useState<any>([]);
  const [estaAfuera, setEstaAfuera] = useState<any>(false);
  const [matriz, setMatriz] = useState<any>();
  const [matrizBorder, setMatrizBorder] = useState<any>([]);
  const [onChangeInput, setOnChangeInput] = useState<{id: number, Nombre: string, Apellido: string, Correo: string, Password: string}>({
    id: 0,
    Nombre: "",
    Apellido: "",
    Correo: "",
    Password: ""
  });
  const refIsSetting = useRef<HTMLDivElement>(null);

  if(usuario == "Asesor"){
    
    useEffect(() => {
      setTimeout(() => {
      const fetchData = async () => {
        try{
          const data = await fetchAdvisorTable();
          setDataUsers(data);
        }catch(error){
          console.error('Error al obtener los datos de la tabla de Asesores:', error);
        }
      }
      fetchData();
      }, 1500);
    }, []);
  }else if(usuario == "Cliente"){
    useEffect(() => {
        const fetchData = async () => {
          try{
            const data = await fetchClientTable();
            setDataUsers(data);
          }catch(error){
            console.error('Error al obtener los datos de la tabla de Clientes:', error);
          }
        }
        fetchData();
    }, []);
  }

useEffect(() => {
    if(dataUsers && dataUsers.length > 0){
      setCounter(dataUsers.length);
    }
}, [dataUsers]);

useEffect(() => {
  const newImageSetting = [];
  const newIsSetting = [];
  const newOrder = [];
  const newOrderBorder = [];
  const newArray = [];
  const newArrayBorder = [];
  for (let i = 0; i < counter; i++) {
    newArray.length = 0;
    newArrayBorder.length = 0;
    for (let j = 0; j < 5; j++) {
      newArray.push(true);
    }
    newOrderBorder.push("border-0");
    newOrder.push(newArray);
    newImageSetting.push(setting.src);
    newIsSetting.push(false);
  }
  setImageSetting(newImageSetting);
  setIsSetting(newIsSetting);
  if(newOrder.length > 0){
    setMatriz(newOrder);
  }
  if(newOrderBorder.length > 0){
    setMatrizBorder(newOrderBorder);
  }
}, [counter, dataUsers]);

useEffect(() => {
  console.log(onChangeInput);
}, [onChangeInput]);

const handleOnChangeInput = (index:number, event: any) => {

  setOnChangeInput({...onChangeInput, id: parseInt(event.target.id), [event.target.name]: event.target.value});
  
  if(event.target.name == "Password" && onChangeInput.Password == ""){
    event.target.value = "";
  }
  // setOnChangeInput(newOrder);
}

const handleImageHover = (index:number) =>{
  const newImageSetting = imageSetting.map((value:any, i:number)=>{
    if(i == index){
      return settingHover.src;
    }else{
      return setting.src;
    }
  })

  setImageSetting(newImageSetting);
}

const handleImageStatic = (index:number) =>{

  const newImageSetting = imageSetting.map((value:any, i:number)=>{
    if(i == index){
      return setting.src;
    }else{
      return setting.src;
    }
  })
  setImageSetting(newImageSetting);
}

const handleOnClickSettings = (index:number) =>{

    const newIsSetting = isSetting.map((value:any, i:number)=>{
      if(i == index){
        if(value == true && estaAfuera == true){
          return false;
        }else{
          setEstaAfuera(true);
          return true;
        }
      }else{
        return false;
      }
    })
    setEstaAfuera(true);
    setIsSetting(newIsSetting);
}

const handleAreYouSure = (index:number) =>{
  
  setIsAreYouSure(true);

  const newIsSetting = isSetting.map((value:any, i:number)=>{
    if(i == index){
      return !value;
    }else{
      return false;
    }
  })
  setIsSetting(newIsSetting);
  if(advisorDelete?.nombreAsesorAEliminar != undefined){
    advisorDelete.setNombreAsesorAEliminar({...advisorDelete.nombreAsesorAEliminar, ["nombre"]: dataUsers[index].nombre, ["index"]: dataUsers[index].id_asesor});
  }
}

const handleOnClickEdit = (index:number) =>{

  setOnChangeInput(
    {
      id: 0,
      Nombre: "",
      Apellido: "",
      Correo: "",
      Password: ""
    }
  );

  const newOrder = matriz.map((value:any, i:number)=>{
    if(i == index){
      return value.map((value:any, j:number)=>{
          return false;
      })
    }else{
      return value.map((value:any, j:number)=>{
        return true;
      })
    }
  })
  setMatriz(newOrder);

  const newOrderBorder = matrizBorder.map((value:any, i:number)=>{
    if(i == index){
      return "border-2 border-black rounded-lg";
    }else{
      return "border-0";
    }
  })
  setMatrizBorder(newOrderBorder);
  editAdvisor?.setEdit(true);
}

useEffect(() => {
  
  const handleClickOutside = (event:any) => {
      if (refIsSetting.current && !refIsSetting.current.contains(event.target)) {
        setEstaAfuera(false);
      }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const handleOnSubmit = async (e:any) =>{


  const id = onChangeInput?.id;
  const Nombre = onChangeInput?.Nombre;
  const Apellido = onChangeInput?.Apellido;
  const Correo = onChangeInput?.Correo;
  const Contraseña = onChangeInput?.Password;

  console.log(id, Nombre, Apellido, Correo, Contraseña)

    try{
      const res = await axios.post('/api/upAdvisor', {
        id: id,
        nombre: Nombre,
        apellido: Apellido,
        correo: Correo,
        password: Contraseña
      });
      if(res.statusText === "OK"){
        alert("Asesor actualizado correctamente");
        window.location.href = "/dashboard/advisor";
      }
    }catch(error:any){
      console.error('Error al actualizar los datos del asesor:', error);
    }
}

  return (
      <form ref={formRef} action={(e)=>handleOnSubmit(e)}>
      {dataUsers && (
        <div className="relative flex justify-center">
          {dataUsers && dataUsers.length > 0 && matriz && matriz[0] && matriz[0].length > 0 && (
            <table className="w-[95%] table-fixed border-collapse">
              {dataUsers && (
              <thead className="p-6">
                <tr className="flex justify-around border rounded-md">
                  <th className="min-w-[2em] text-center my-[15px]">ID</th>
                  <th className="min-w-[5em] max-w-[6em] text-center my-[15px]">Nombre</th>
                  <th className="min-w-[7em] max-w-[8em] text-center my-[15px]">Apellidos</th>
                  <th className="min-w-[15em] max-w-[11em] text-center my-[15px]">Correo</th>
                  <th className="min-w-[15em] max-w-[11em] text-center my-[15px]">Contraseña</th>
                  {usuario == "Asesor" && (<th className="min-w-[5em] max-w-[6em] text-center my-[15px]">Opciones</th>)}
                </tr>
              </thead>
              )}
              <tbody>

              {dataUsers.map((user:any, index:number) => (
            <tr className="flex justify-around border-b-[1px] py-[15px]" key={index}>
                <td className={`relative flex justify-center items-center min-w-[2em] rounded-lg`}>
                  <input type="text" readOnly={true} name="id" value={usuario == "Asesor"? user.id_asesor : user.id_cliente} className={`w-[2em] text-center focus:outline-none`}/>
                </td>
                <td className={`flex justify-center items-center min-w-[5em] max-w-[6em]`}>
                  <input type="text" defaultValue={user.nombre} name="Nombre" readOnly={matriz[index][1]} id={`${usuario == "Asesor"? user.id_asesor : user.id_cliente}`} required
                  className={`w-[5em] text-center focus:outline-none ${matrizBorder[index]}`} autoFocus={true}  onChange={(event) => handleOnChangeInput(index, event)}/>
                </td>
                <td className={`flex justify-center items-center min-w-[8em]`}>
                  <input type="text" defaultValue={user.apellido} name="Apellido" readOnly={matriz[index][2]} id={`${usuario == "Asesor"? user.id_asesor : user.id_cliente}`} required
                  className={`w-[8em] text-center focus:outline-none ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
                </td>
                <td className={`flex justify-center items-center min-w-[15em] max-w-[11em]`}>
                  <input type="email" defaultValue={user.correo} name="Correo" readOnly={matriz[index][3]} id={`${usuario == "Asesor"? user.id_asesor : user.id_cliente}`} required
                  className={`w-[15em] text-center focus:outline-none ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
                </td>
                <td className={`flex items-center min-w-[15em] max-w-[11em] overflow-auto`}>
                  <input type="password" defaultValue={user.password} name="Password" readOnly={matriz[index][4]} id={`${usuario == "Asesor"? user.id_asesor : user.id_cliente}`} required minLength={8}
                  className={`w-[15em] text-center focus:outline-none ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
                </td>
                {usuario == "Asesor" &&
                <td className="relative flex justify-center items-center min-w-[5em] max-w-[6em]">
                  <Image src={imageSetting[index] || setting.src} 
                  onMouseOver={()=> {handleImageHover(index);}} onMouseOut={()=> handleImageStatic(index)} alt="Opciones" onClick={()=>{handleOnClickSettings(index)}}
                  width={25} height={25} className=" cursor-pointer"/>
                  {estaAfuera && isSetting[index] && (
                    <div className="absolute top-8 right-8 bg-white border border-gray-300 rounded-md shadow-md p-2 z-10" id={`${index}`} ref={refIsSetting}>
                      <p className="cursor-pointer hover:underline hover:text-cyan-800" onClick={() => handleOnClickEdit(index)}>Editar</p>
                      <p className="cursor-pointer hover:underline hover:text-red-800" onClick={()=> handleAreYouSure(index)}>Eliminar</p>
                    </div>
                  )}
                </td>
                }
            </tr>
          ))}

              </tbody>
            </table>
          )}

          {dataUsers && dataUsers.length == 0 && usuario == "Cliente" && (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-center text-gray-400 pb-[8em]">Tal vez necesitas hacer más marketing</p>
            </div>
          )}
          </div>
        )}
        </form>
  )
}

export default UsersTable;
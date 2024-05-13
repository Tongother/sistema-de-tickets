"use client";
import { fetchAdvisorTable } from "@/app/lib/data";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import setting from "@/public/setting.svg";
import settingHover from "@/public/settingHover.gif";
import axios from "axios";

interface UsersTableProps {
  data: {dataUsers:any, setDataUsers:any},
  usuario: string,
  register?: boolean,
  editAdvisor?: {edit:any, setEdit:any},
  advisorDelete?: {nombreAsesorAEliminar:any, setNombreAsesorAEliminar:any},
  setIsAreYouSure?: any,
  formRef?: any,
}

const UsersTable = ({usuario, data, register, editAdvisor, formRef, advisorDelete, setIsAreYouSure}:UsersTableProps) => {

  const [imageSetting, setImageSetting] = useState<any>([]);
  const [counter, setCounter] = useState<any>(0);
  //Variables para cambio de imagen y seleccion de usuario

  const [isSetting, setIsSetting] = useState<any>([]);
  const [estaAfuera, setEstaAfuera] = useState<any>(false);
  const [matriz, setMatriz] = useState<any>();
  const [matrizBorder, setMatrizBorder] = useState<any>([]);
  const [onChangeInput, setOnChangeInput] = useState<any>();
  const [fila, setFila] = useState<any>(0);
  const refIsSetting = useRef<HTMLDivElement>(null);

  //Variables de referencia para la lógica de edición de datos y eliminación de datos

  const [htmlSettings, setHtmlSettings] = useState<any>();

useEffect(() => {
  const newOrderInput = [];
  const newArrayOrderInput = [];
    if(data.dataUsers && data.dataUsers.length > 0){
      setCounter(data.dataUsers.length);
      for (let i = 0; i < counter; i++) {
        newArrayOrderInput.length = 0;
        for (let j = 0; j < 1; j++) {
          newArrayOrderInput.push(data.dataUsers[j].id_asesor);
          newArrayOrderInput.push(data.dataUsers[j].nombre);
          newArrayOrderInput.push(data.dataUsers[j].apellido);
          newArrayOrderInput.push(data.dataUsers[j].correo);
          newArrayOrderInput.push(data.dataUsers[j].password);
        }
        newOrderInput.push(newArrayOrderInput);
      }
    }
    if(newOrderInput.length > 0){
      setOnChangeInput(newOrderInput);
    }
}, [data.dataUsers]);

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
}, [counter, ]);

const handleOnChangeInput = (index:number, event:any) => {
  const newOrder = onChangeInput.map((value:any, i:number)=> {
    if(i == index){
      setFila(index);
      return value.map((value:any, j:number)=> {
        if(j == parseInt(event.target.id)){
          return event.target.value;
        }else{
          return value;
        }
      })
    }else{
      return value;
    }
  })
  setOnChangeInput(newOrder);
}

useEffect(() => {
  if(matriz && matriz.length > 0 && matriz[0].length > 0 && data.dataUsers && data.dataUsers.length > 0 && matrizBorder && matrizBorder.length > 0 && imageSetting && imageSetting.length > 0 && isSetting && isSetting.length > 0){
    if(usuario == "Cliente"){
      setHtmlSettings(
        data.dataUsers.map((user:any, index:number) => (
          <tr className="flex justify-around border-b-[1px] py-[15px]" key={index}>
              <td className={`relative flex justify-center items-center min-w-[2em] rounded-lg`}><input type="text" readOnly={true} value={user.id_cliente} className={`w-[1em] text-center focus:outline-none`}/></td>
              <td className={`flex justify-center items-center min-w-[5em] max-w-[6em]`}><input type="text" defaultValue={user.nombre} readOnly={matriz[index][1]} className={`w-[5em] text-center focus:outline-none ${matrizBorder[index]}`} required/></td>
              <td className={`flex justify-center items-center min-w-[7em] max-w-[6em]`}><input type="text" defaultValue={user.apellido} readOnly={matriz[index][2]} className={`w-[7em] text-center focus:outline-none ${matrizBorder[index]}`} required/></td>
              <td className={`flex justify-center items-center min-w-[15em] max-w-[11em]`}><input type="email" defaultValue={user.correo} readOnly={matriz[index][3]} className={`w-[15em] text-center focus:outline-none ${matrizBorder[index]}`} required/></td>
              <td className={`flex items-center min-w-[15em] max-w-[11em] overflow-auto`}><input type="password" defaultValue={user.password} readOnly={matriz[index][4]} className={`w-[15em] text-center focus:outline-none ${matrizBorder[index]}`} required minLength={8}/></td>
          </tr>
        ))
      )
    }else if(usuario == "Asesor"){
      setHtmlSettings(
        data.dataUsers.map((user:any, index:number) => (
          <tr className="flex justify-around border-b-[1px] py-[15px]" key={index}>
              <td className={`relative flex justify-center items-center min-w-[2em] rounded-lg`}>
                <input type="text" readOnly={true} value={user.id_asesor} className={`w-[1em] text-center focus:outline-none`}/>
              </td>
              <td className={`flex justify-center items-center min-w-[5em] max-w-[6em]`}>
                <input type="text" defaultValue={user.nombre} readOnly={matriz[index][1]} id={`${1}`} required
                className={`w-[5em] text-center focus:outline-none ${matrizBorder[index]}`} autoFocus={true}  onChange={(event) => handleOnChangeInput(index, event)}/>
              </td>
              <td className={`flex justify-center items-center min-w-[7em] max-w-[6em]`}>
                <input type="text" defaultValue={user.apellido} readOnly={matriz[index][2]} id={`${2}`} required
                className={`w-[7em] text-center focus:outline-none ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
              </td>
              <td className={`flex justify-center items-center min-w-[15em] max-w-[11em]`}>
                <input type="email" defaultValue={user.correo} readOnly={matriz[index][3]} id={`${3}`} required
                className={`w-[15em] text-center focus:outline-none ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
              </td>
              <td className={`flex items-center min-w-[15em] max-w-[11em] overflow-auto`}>
                <input type="password" defaultValue={user.password} readOnly={matriz[index][4]} id={`${4}`} required minLength={8}
                className={`w-[15em] text-center  ${matrizBorder[index]}`} onChange={(event) => handleOnChangeInput(index, event)}/>
              </td>
              
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
          </tr>
        ))
      )
    }
}
}, [data.dataUsers, matriz, matrizBorder, imageSetting, isSetting, estaAfuera]);

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
    advisorDelete.setNombreAsesorAEliminar({...advisorDelete.nombreAsesorAEliminar, ["nombre"]: data.dataUsers[index].nombre, ["index"]: data.dataUsers[index].id_asesor});
  }
}

useEffect(() => {
  if(register){
    const fetchData = async () => {
      try{
        const data = await fetchAdvisorTable();
        data.setDataUsers(data);
      }catch(error){
        console.error('Error al obtener los datos de la tabla de Asesores:', error);
      }
    }

    fetchData();
  }
}, [register]);

const handleOnClickEdit = (index:number) =>{
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

useEffect(()=>{
  
}, [editAdvisor?.edit])

const handleOnSubmit = async (e:any) =>{


  const id = onChangeInput[fila][0];
  const Nombre = onChangeInput[fila][1];
  const Apellido = onChangeInput[fila][2];
  const Correo = onChangeInput[fila][3];
  const Contraseña = onChangeInput[fila][4];
  

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
      window.location.reload();
    }
  }catch(error:any){
    console.error('Error al actualizar los datos del asesor:', error);
  }

  const fetchData = async () => {
    try{
      const data = await fetchAdvisorTable();
      data.setDataUsers(data);
    }catch(error){
      console.error('Error al obtener los datos de la tabla de Clientes:', error);
    }
  }

  fetchData();
}

  return (
    <form ref={formRef} action={(e)=>handleOnSubmit(e)}>
      <div className="relative flex justify-center">
        {data.dataUsers && data.dataUsers.length > 0 && matriz && matriz[0] && matriz[0].length > 0 && (
          <table className="w-[95%] table-fixed border-collapse">
            {data.dataUsers && (
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

              {htmlSettings}

            </tbody>
          </table>
        )}

        {data.dataUsers && data.dataUsers.length == 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-center text-gray-400 pb-[8em]">Maybe you need to do more marketing</p>
          </div>
        )}
        </div>
      </form>
  )
}

export default UsersTable;
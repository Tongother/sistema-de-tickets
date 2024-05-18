"use client";
import UsersTable from "@/components/Userstable";
import SearchBar from "@/components/SearchBar";
import { fetchAdvisorTable } from "@/app/lib/data";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import axios from "axios";

export default function Advisor() {

  const formRefRegister = useRef<HTMLFormElement>(null);
  const [isAddUser, setIsAddUser] = useState(false);
  const [areYouSure, setIsAreYouSure] = useState<any>(false);
  const [registerError, setRegisterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({nombre: "", apellido: "", email: "", password: "", confirmPassword: ""});
  const [nombreAsesorAEliminar, setNombreAsesorAEliminar] = useState({nombre: "", index: 0});
  const [editAdvisor, setEditAdvisor] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setFormData({...formData, [inputName]: event.target.value});
  }

  useEffect(() => {

    if (formData.password !== '' && formData.confirmPassword !== formData.password) {
      setPasswordError(true);
      
    } else {
      setPasswordError(false);
    }

  }, [formData.password]);
  
  useEffect(() => {

    if (formData.confirmPassword !== '' && formData.password !== formData.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

  }, [formData.confirmPassword]);

  const handleAddUser = async(event: React.FormEvent) => {
    event.preventDefault();
    setPasswordError(false);

        // Verificar si la contraseña y la confirmación de contraseña coinciden
        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true); // Establecer el estado de error de contraseña en true
        } else {
            // Si las contraseñas coinciden, procede con el registro
            try {
                const response = await axios.post('/api/registerAdvisor', formData);
                console.log(response.data);
                alert('Asesor registrado exitosamente');
                window.location.href = "/dashboard/advisor";
            } catch (error) {
                setRegisterError(true);
                setTimeout(() => {
                    setRegisterError(false);
                }, 6000);
            } finally {
                setFormData({ ...formData, nombre: '', apellido: '', email: '', password: '', confirmPassword: ''})
                if (formRefRegister.current) {
                    formRefRegister.current.reset();
                }
            }
          }
}

const handleCancelar = () => {
  setEditAdvisor(false);
  window.location.href = "/dashboard/advisor";
}

const handleDeleteUser = async() =>{
  const res = await axios.post('/api/advisor', {
    id: nombreAsesorAEliminar.index,
    nombre: nombreAsesorAEliminar.nombre
  });
  console.log(res);

  if(res.statusText === "OK"){
    alert(res.data.asesor[0].eliminar_asesor);
    setIsAreYouSure(false);
    window.location.href = "/dashboard/advisor";
  }
}

const handleSubmitForm = () => {
  if (formRef.current) {
    formRef.current.requestSubmit();
  }
}

    return (
      <div className="w-full h-full flex items-center justify-center">
            {registerError && (
                <div className="z-50 absolute top-0 left-0 mt-4 ml-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                    <strong className="font-bold">¡Parece que llegas tarde! </strong>
                    <span className="block sm:inline">Ya existe una cuenta registrada con este correo.</span>
                </div>
            )}
        <div className="relative w-[90%] h-[85%] rounded-lg shadow-2xl overflow-hidden">
            <div className="mt-10">
                <SearchBar/>
                <div className="relative">
                  <div className="w-full h-[4em] flex items-center justify-center mt-2">
                    <div className="w-[80%] h-full flex items-center justify-end">
                      <button className="bg-[#0E182C] hover:bg-[#1c2e4e] text-white font-bold py-2 px-4 rounded" onClick={()=> {setIsAddUser(!isAddUser);}}>Agregar asesor</button>
                    </div>
                  </div>

                  {editAdvisor && (
                    <div className="absolute top-1/2 -translate-y-1/2 flex ml-8">
                      <button className="bg-[#0E182C] hover:bg-[#1c2e4e] text-white font-bold py-2 px-4 rounded" onClick={handleCancelar}>Cancelar</button>
                      <input type="submit" className="bg-[#0E182C] hover:bg-[#1c2e4e] text-white font-bold py-2 px-4 rounded ml-8 cursor-pointer" value="Editar asesor" onClick={handleSubmitForm}/>
                    </div>
                  )}
                </div>
                <div className="overflow-hidden">
                  <motion.form initial="visible" variants={{
                      visible: { y: 0 },
                      hidden: { y: "-100%" }
                    }} animate={isAddUser ? "visible" : "hidden"}
                    transition={{
                      duration: .5,
                      delay: 0,
                  }} onSubmit={(event) =>handleAddUser(event)} ref={formRefRegister}>

                    <div className="w-full h-[9em] flex items-center justify-center">
                      <div className="w-[80%] h-full flex items-center justify-center">
                        <input type="text" required placeholder="Nombre" className="w-[40%] h-[2.5em] border-2 mr-10 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "nombre")}/>
                        <input type="text" required placeholder="Apellidos" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "apellido")}/>
                      </div>
                    </div>
                    <div className="w-full h-[4em] flex items-center justify-center my-2">
                      <div className="w-[80%] h-full flex items-center justify-center">
                        <input type="email" required placeholder="Correo" className="w-[40%] h-[2.5em] border-2 mr-10 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "email")}/>
                        <input type="password" required placeholder="Contraseña" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" 
                        onChange={(event)=> {handleChange(event, "password");}}/>
                      </div>
                    </div>

                    <div className="w-full h-[4em] flex items-center justify-center my-2">
                      <div className="relative w-[80%] h-full flex items-center justify-center">
                        <input type="password" required placeholder="Confirmar contraseña" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" 
                        onChange={(event)=> {handleChange(event, "confirmPassword");}}/>

                      {passwordError && (
                        <div className="absolute bottom-[-28px] right-[30] bg-[#E4E8F5] p-[8px] rounded-lg text-base text-[#FF0000] z-10">
                            <span className="font-medium">¡Error!</span> Las contraseñas no coinciden.
                        </div>
                      )}
                      </div>
                    </div>
                    <div className="w-full h-[4em] flex items-center justify-center my-8">
                      <div className="w-[80%] h-full flex items-center justify-center">
                        <input type="submit" className=" bg-violet-50 font-bold text-black py-2 px-4 rounded cursor-pointer w-[50%]" placeholder="Enviar"/>
                      </div>
                    </div>
                  </motion.form>
                  </div>
            </div>
            <motion.div initial="visible" variants={{
                      visible: { y: 0},
                      hidden: { y: "-105%"}
                    }} animate={isAddUser ? "visible" : "hidden"}
                    transition={{
                      duration: .5,
                      delay: 0,
                  }}
            className="h-[50vh] w-full overflow-auto">
                <UsersTable usuario="Asesor" editAdvisor={{setEdit: setEditAdvisor}} formRef={formRef}
                advisorDelete={{nombreAsesorAEliminar: nombreAsesorAEliminar, setNombreAsesorAEliminar: setNombreAsesorAEliminar}}
                setIsAreYouSure={setIsAreYouSure}/>
            </motion.div>
            {areYouSure && (
                      <div className="top-0 absolute w-full h-full z-10">
                        <div className="absolute w-[22em] h-[8em] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-md p-2 z-30">
                            <div className="w-full h-12 flex justify-center items-center">
                              <h1 className="text-center">¿Estas seguro de <span className="text-red-600">eliminar</span> al asesor {nombreAsesorAEliminar.nombre}?</h1>
                            </div>
                            <div className="w-full h-[64%] flex justify-around items-center">
                              <button type="button" className=" bg-black font-medium text-white p-2 rounded-md hover:bg-red-600" onClick={handleDeleteUser}>Eliminar</button>
                              <button type="button" className=" bg-violet-100 p-2 font-medium rounded-md hover:bg-violet-200" onClick={()=> setIsAreYouSure(false)}>Cancelar</button>
                            </div>
                        </div>
                          <div className="w-full h-full bg-black opacity-20"></div>
                      </div>
            )}
        </div>
      </div>
    );
  }
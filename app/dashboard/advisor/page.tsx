"use client";
import UsersTable from "@/components/Userstable";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import axios from "axios";

export default function Advisor() {

  const formRefRegister = useRef<HTMLFormElement>(null);
  const [isAddUser, setIsAddUser] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({nombre: "", apellido: "", email: "", password: "", confirmPassword: ""});
  


  const handleHiddenForm = () => {
    setIsAddUser(!isAddUser);
  }

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
                // Aquí puedes realizar alguna acción adicional después de enviar los datos
            } catch (error) {
                setRegisterError(true);
                setTimeout(() => {
                    setRegisterError(false);
                }, 6000);
            } finally {
                // Reiniciar el formulario si event.currentTarget está definido
                setFormData({ ...formData, nombre: '', apellido: '', email: '', password: '', confirmPassword: ''})
                if (formRefRegister.current) {
                    formRefRegister.current.reset();
                }
            }
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
        <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
            <div className="mt-10">
                <SearchBar/>
                <div className="w-full h-[4em] flex items-center justify-center my-2">
                  <div className="w-[80%] h-full flex items-center justify-end">
                    <button className="bg-[#0E182C] hover:bg-[#1c2e4e] text-white font-bold py-2 px-4 rounded" onClick={handleHiddenForm}>Add User</button>
                  </div>
                </div>
                <div className=" overflow-hidden">
                  <motion.form initial="visible" variants={{
                      visible: { y: 0 },
                      hidden: { y: "-100%" }
                    }} animate={isAddUser ? "visible" : "hidden"}
                    transition={{
                      duration: .5,
                      delay: 0,
                  }} onSubmit={(event) =>handleAddUser(event)} ref={formRefRegister}>

                    <div className="w-full h-[4em] flex items-center justify-center my-2">
                      <div className="w-[80%] h-full flex items-center justify-center">
                        <input type="text" required placeholder="Name" className="w-[40%] h-[2.5em] border-2 mr-10 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "nombre")}/>
                        <input type="text" required placeholder="Last Name" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "apellido")}/>
                      </div>
                    </div>
                    <div className="w-full h-[4em] flex items-center justify-center my-2">
                      <div className="w-[80%] h-full flex items-center justify-center">
                        <input type="email" required placeholder="Email" className="w-[40%] h-[2.5em] border-2 mr-10 rounded-md p-[10px] text-center" onChange={(event)=> handleChange(event, "email")}/>
                        <input type="password" required placeholder="Password" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" 
                        onChange={(event)=> {handleChange(event, "password");}}/>
                      </div>
                    </div>

                    <div className="w-full h-[4em] flex items-center justify-center my-2">
                      <div className="relative w-[80%] h-full flex items-center justify-center">
                        <input type="password" required placeholder="Confirm password" className="w-[40%] h-[2.5em] border-2 rounded-md p-[10px] text-center" 
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
                      visible: { y: 0 },
                      hidden: { y: "-150%", height: "100%"}
                    }} animate={isAddUser ? "visible" : "hidden"}
                    transition={{
                      duration: .5,
                      delay: 0,
                  }}
            className="h-full overflow-auto">
                <UsersTable/>
            </motion.div>
        </div>
      </div>
    );
  }
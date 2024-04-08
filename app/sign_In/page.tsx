"use client";
import { FormEvent, useEffect, useState } from "react";

export default function sign_In() {

    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertText, setAlertText] = useState(false);

    const alert = "Passwords don't match";

    useEffect(() => {
        if (Password === confirmPassword) {
            setAlertText(false);
        } else {
            setAlertText(true);
        }
    }, [confirmPassword, Password]);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Password === confirmPassword) {
            window.location.href = "/sign_In/confirm";
        }else{
            setAlertText(true);
        }
    }

    return (
      <main className="flex h-screen w-screen justify-center items-center">
        <section className="w-[28em] h-[75%] bg-white shadow-2xl rounded-lg">
            <article className="w-full h-[20%] flex flex-col justify-center items-center">
                <h1 className="text-2xl text-center">Sign in</h1>
            </article>
            <article className="bg-slate-50 w-full h-[80%]">
                <form className="w-full h-full flex flex-col justify-around items-center" onSubmit={(e) => handleSubmit(e)}>
                    <input type="name" name="name" required placeholder="Name" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <input type="text" name="last name" required placeholder="last name" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <input type="email" name="email" required placeholder="Email" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <div className="w-[80%] h-[2.5em] relative">
                        <input type="password" required placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} className="w-[100%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                        {alertText && <p className="text-red-500 text-sm absolute left-1 bottom-[-1]">{alert}</p>}
                    </div>
                    <button className="w-[80%] h-[2.5em] bg-green-400 text-white rounded-md">Sign In</button>
                </form>
            </article>
        </section>
      </main>
    );
  }
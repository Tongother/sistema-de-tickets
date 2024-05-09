'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar2 from "@/public/avatar2.png";

interface HeaderProps {
    children: React.ReactNode;
    headerInfo: { name: string; email: string; rol: string; src: string };
}

export default function Header({ children, headerInfo }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col h-full">
            <article className="w-full h-[100px] grid grid-rows-1 grid-cols-2">
                <div className="h-full w-full rounded-l-[30px] flex flex-row items-center">
                    <div className="w-[250px] h-full flex items-center justify-center">
                        <h1 className="font-outfit text-2xl">Soporte técnico</h1>
                    </div>
                </div>

                <div className="relative flex justify-end items-center right-10">
                    <button
                        className="absolute flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-slate-100 ring-slate-100 transition hover:shadow-md hover:ring-2 overflow-hidden"
                        onClick={dropdownIsOpen}
                    >
                        <Image src={Avatar2} width={64} height={64} alt={headerInfo.rol} />
                    </button>
                    {isOpen && (
                        <div className=" relative mt-40  bg-slate-900 rounded-xl p-4 text-slate-100 shadow-lg">
                            <div className="flex gap-3 items-center">
                                <div className="rounded-lg h-12 w-12 overflow-hidden border-2 border-slate-600">
                                    <Image
                                        src={Avatar2}
                                        width={64}
                                        height={64}
                                        alt="Profile"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex gap-1 text-sm font-semibold">
                                        <span>{headerInfo.name}</span>
                                        <span className="text-sky-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-400">{headerInfo.email}</div>
                                    <div className="mt-5 border-t border-slate-500/30"></div>
                                    <div className="flex flex-col">
                                        <a href="#" className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </article>
            <article className="w-full h-full flex items-start justify-center">
                <div className="w-full h-[534px] flex justify-center items-center">
                    <div className="w-[1160px] mr-3 h-full bg-[#FFFF] rounded-[30px] shadow-md">
                        {children}
                    </div>
                </div>
            </article>
        </div>
    );
}

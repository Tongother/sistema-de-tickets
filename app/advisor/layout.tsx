import React from 'react';
import Link from 'next/link';
import ticket from '@/public/ticket.png';
import historial from '@/public/historial.png';
import tecnico from '@/public/tecnico.png';

interface AdvisorLayoutProps {
  children: React.ReactNode;
}

export default function AdvisorLayout({ children }: AdvisorLayoutProps) {
  return (
    <main className="flex h-screen w-screen bg-white">
      <section className="w-[20em] bg-blue-950 text-white">
        <article className="w-full h-[6em] flex items-center justify-center">
          <h1 className="text-xl">Technical Advisor</h1>
        </article>

        <section>
          <Link href="/advisor">
          <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
            <img src={ticket.src} alt="Personas" className="w-[2em] h-[2em]" />
            <h1 className="ml-2">Tickets</h1>
          </article>
          </Link>
          <Link href="/advisor/history">
            <article className="flex items-center ml-[5%] mr-[5%] mb-[5px] rounded-lg p-[10px] cursor-pointer border-2 border-transparent hover:border-double hover:bg-blue-900">
              <img src={historial.src} alt="Personas" className="w-[2em] h-[2em]" />
              <h1 className="ml-2">Historial de tickets</h1>
            </article>
          </Link>
        </section>
      </section>
        <section className="w-full flex flex-col">
          <article className="bg-slate-100 w-full h-[5em] flex justify-end">
            <div className="w-[16em] h-full pl-[1.5em] flex items-center cursor-pointer hover:bg-slate-200">
              <img src={tecnico.src} alt="" className="w-[4em] h-[4em]" />
              <div className="ml-[10px]">
                <h1>Julian Castro</h1>
                <p>Asesor técnico</p>
              </div>
            </div>
          </article>

          <article className="h-[40em]"><div className="m-[5em]">{children}</div></article>
        </section>
    
    </main>
  );
}
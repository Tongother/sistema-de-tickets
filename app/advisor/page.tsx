import Tickets from '@/components/Tickets';
import React from 'react';

export default function Advisor() {
  return (
    <section className="h-full w-full">
      <div className='w-full h-[75px] flex items-center justify-center border-b border-b-slate-200'>
        <h1 className="font-pop text-[24px]"> Nuevos tickets </h1>
      </div>
      <div>
        <Tickets/>
      </div>
    </section>
  );
}
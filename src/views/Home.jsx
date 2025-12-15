import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
 
  return (
    <div className="min-h-screen p-6 gap-y-6 flex flex-col justify-start w-full bg-[url('../public/animal_stand_neko.png')] bg-no-repeat bg-center ">
      <section className="mt-10 relative ">
        <h1 className="text-5xl font-bold text-center text-black absolute inset-0 translate-x-[4px] translate-y-[4px] ">The pet game</h1>
        <h1 className="text-5xl font-bold text-center text-white relative">The pet game</h1>
      </section>
      <section className="w-full flex justify-center mt-55">
        <button className="border bg-indigo-500 text-white text-2xl py-1 px-3 rounded-3xl shadow-lg hover:scale-125">
          <p>play</p>
        </button>
      </section>
      
    </div>
  );
}

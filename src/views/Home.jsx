
export default function Home() {
 
  return (
    <div className="min-h-screen p-6 gap-y-6 flex flex-col justify-start w-full  ">
      <section className="mt-10 relative ">
        <h1 className="text-5xl font-bold text-center text-black absolute inset-0 translate-x-[4px] translate-y-[4px] ">The pet game</h1>
        <h1 className="text-5xl font-bold text-center text-white relative">The pet game</h1>
      </section>
      <section className="w-full h-full flex justify-center items-center">
        <button className="border bg-indigo-500 text-white text-2xl pb-2 px-4 rounded-3xl shadow-lg hover:scale-125">
          <p>play</p>
        </button>
      </section>
      
    </div>
  );
}

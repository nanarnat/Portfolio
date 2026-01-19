export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold">
        Hi, I’m <span className="text-cyan-400">Nattha</span>
      </h1>
      <p className="mt-4 text-slate-400 max-w-xl">
        Currently learning to become a developer, ready and excited to learn new
        things.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

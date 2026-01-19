export default function Projects() {
    return (
         <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-slate-900 rounded-xl p-6 hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">Custom Tea Ordering Website</h3>
          <p className="text-slate-400 mt-2">
            Online tea shop with custom drink builder, cart and checkout.
          </p>
          <p className="text-sm text-slate-500 mt-2">React · Node.js · Express · MongoDB</p>
          <div className="flex w-full justify-around">
          <a href="https://github.com/Sek-Code/DesignRatio-Web-App"  target="_blank" className="inline-block mt-4 text-cyan-400 hover:underline">GitHub (Frontend)</a>
          <a href="https://github.com/Sek-Code/DesignRatio-Backend" target="_blank" className="inline-block mt-4 text-cyan-400 hover:underline">GitHub (Backend)</a>
          </div>
        </div>

      </div>
    </section>
    )
}
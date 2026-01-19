export default function Contact() {
    return (
        <section id="contact" className="bg-slate-900/50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-400 mb-6">
          Thank you for your time and consideration.
Feel free to contact me.
        </p>
        <div className="flex gap-7 w-full justify-center">
        <a href="mailto:gamenattha@hotmail.com"
           className="px-8 py-4 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition">
          Send Email
        </a>
        <a href="https://www.linkedin.com/in/nattha-sritanaanant/" className="px-8 py-4 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition" target="_blank">Linkedin</a>
        </div>
      </div>
    </section>
    )
}
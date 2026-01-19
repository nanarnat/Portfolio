import { useEffect, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "JavaScript",
    file: "/files/Learn-JavaScript-Fundamentals.pdf",
  },
  {
    id: 2,
    title: "HTML",
    file: "/files/Learn-HTML.pdf",
  },
  {
    id: 3,
    title: "CSS",
    file: "/files/Learn-CSS.pdf",
  },
  {
    id: 4,
    title: "SQL",
    file: "/files/Learn-SQL.pdf",
  },
  {
    id: 5,
    title: "MongoDB",
    file: "/files/Learn-MongoDB.pdf",
  },
  {
    id: 6,
    title: "Git",
    file: "/files/Learn-Git-Intro.pdf",
  },
  {
    id: 7,
    title: "TOEIC",
    file: "/files/toeic.pdf",
  },
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeCert]);

  return (
    <section id="certificates" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>

      <div className="grid grid-cols-3 gap-6 ">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            onClick={() => setActiveCert(cert)}
            className={`cursor-pointer bg-slate-900 p-4 rounded-xl hover:scale-105 transition 
  ${i === certificates.length - 1 ? "col-span-3 mx-auto w-64" : ""}`}
          >
            <div className="h-16  flex items-center justify-center text-slate-400">
              Click to view
            </div>

            <p className="mt-3 text-center text-sm text-slate-300">
              {cert.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center">
          <div className="bg-slate-900 rounded-2xl p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <iframe
              src={activeCert.file}
              className="w-full h-[70vh] rounded-lg"
              title={activeCert.title}
            />

            <h3 className="mt-4 text-xl font-semibold text-center">
              {activeCert.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}

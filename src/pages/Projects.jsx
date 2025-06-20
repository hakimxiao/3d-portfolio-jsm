import { arrow } from "../assets/icons";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Selamat datang di ruang eksplorasi saya! Di halaman ini, kamu bisa
          melihat berbagai proyek yang saya kerjakan sebagai bagian dari
          perjalanan saya di dunia programming. Setiap baris kode yang saya
          tulis bukan cuma soal menyelesaikan tugas, tapi juga cara saya
          belajar, berkembang, dan menantang diri sendiri. Saya selalu terbuka
          dengan teknologi baru — entah itu framework terbaru, tools yang lagi
          hype, atau pendekatan fresh dalam menyelesaikan masalah. Buat saya,
          belajar adalah proses yang nggak pernah berhenti, dan proyek-proyek di
          sini adalah bukti nyata dari proses itu. Silakan scroll ke bawah,
          siapa tahu ada sesuatu yang menginspirasi — atau malah bikin kita bisa
          kolaborasi bareng di masa depan 🚀
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;

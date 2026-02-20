import Nav from "@/components/nav";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";
import Image from "next/image";

const stats = [
  { value: "3", label: "Active Clients" },
  { value: "15+", label: "Members" },
  { value: "3", label: "Disciplines" },
  { value: "S'26", label: "Cohort" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d112b] text-white overflow-x-hidden">
      {/* Grid texture */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Ambient periwinkle radial glow */}
      <div
        className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(129,140,248,0.1) 0%, transparent 65%)",
        }}
      />

      <Nav />

      {/* ── Hero ── */}
      <section id="home" className="relative pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10 text-[#a5b4fc] text-xs font-semibold mb-8 animate-slide-down tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Spring 2026 · 3 Projects Active
          </div>

          {/* KTP Logo */}
          <div className="flex justify-center mb-7 animate-fade-in">
            <div
              className="w-20 h-20 rounded-2xl bg-[#818cf8]/5 border border-[#818cf8]/20 flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(129,140,248,0.18)" }}
            >
              <Image
                src="/ktp-logo.png"
                alt="Kappa Theta Pi"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-3 animate-fade-up delay-1">
            <span className="gradient-text">Kappa Theta Pi</span>
          </h1>
          <p className="text-lg text-indigo-300/70 font-medium mb-3 animate-fade-up delay-1">
            USC Chapter
          </p>
          <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-12 animate-fade-up delay-2">
            USC&apos;s premier professional technology fraternity — building real
            products and strategies for real clients, one cohort at a time.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl border border-[#818cf8]/15 bg-[#818cf8]/5"
              >
                <span className="text-2xl font-bold text-[#a5b4fc]">
                  {value}
                </span>
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#818cf8]/20 to-[#818cf8]/20" />
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#818cf8]/20 bg-[#818cf8]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                Active Projects
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#818cf8]/20 to-[#818cf8]/20" />
          </div>

          {/* Stacked horizontal cards */}
          <div className="flex flex-col gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#818cf8]/10 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/ktp-logo.png"
              alt="KTP"
              width={24}
              height={24}
              className="opacity-40 object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-slate-300">
                Kappa Theta Pi — USC
              </p>
              <p className="text-xs text-slate-600">Spring 2026 Client Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a
              href="#projects"
              className="hover:text-[#a5b4fc] transition-colors duration-200"
            >
              Back to top
            </a>
            <span>·</span>
            <span>© 2026 KTP at USC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

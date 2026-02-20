"use client";

import { Project } from "@/lib/projects";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const delayClass = `delay-${Math.min(index, 7)}`;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group flex flex-col sm:flex-row rounded-2xl overflow-hidden border transition-all duration-500 animate-fade-up ${delayClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered
          ? `${project.accent}50`
          : "rgba(129, 140, 248, 0.1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 60px -12px ${project.accent}30`
          : "none",
      }}
    >
      {/* Left color panel */}
      <div
        className="sm:w-44 flex-shrink-0 flex flex-col items-center justify-center py-8 sm:py-0 gap-3"
        style={{ background: `${project.accent}0e` }}
      >
        <span
          className="text-xs font-mono font-bold tracking-widest"
          style={{ color: `${project.accent}70` }}
        >
          {num}
        </span>

        {project.logo ? (
          <div
            className="w-28 h-28 rounded-xl flex items-center justify-center overflow-hidden border"
            style={{
              background: `${project.accent}18`,
              borderColor: `${project.accent}30`,
            }}
          >
            <Image
              src={project.logo}
              alt={project.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        ) : (
          <div
            className="w-28 h-28 rounded-xl flex items-center justify-center border text-xl font-bold"
            style={{
              background: `${project.accent}18`,
              borderColor: `${project.accent}30`,
              color: project.accent,
            }}
          >
            {project.name[0]}
          </div>
        )}

        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
          style={{
            borderColor: `${project.accent}35`,
            color: project.accent,
            background: `${project.accent}10`,
          }}
        >
          Active
        </span>
      </div>

      {/* Right content panel */}
      <div className="flex-1 p-6 flex flex-col bg-[#0d112b]/60">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{project.tagline}</p>
        </div>

        {/* Disciplines */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="text-xs px-2.5 py-0.5 rounded-md border font-medium"
              style={{
                borderColor: `${project.accent}38`,
                color: project.accent,
                background: `${project.accent}0e`,
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Deliverables */}
        <div className="mb-5">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2.5">
            Deliverables
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {project.deliverables.map((d) => (
              <div
                key={d}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span
                  className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: project.accent }}
                />
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-white/[0.05]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              background: hovered ? project.accent : `${project.accent}20`,
              color: hovered ? "#fff" : project.accent,
            }}
          >
            Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20 transition-all duration-200"
          >
            Repository
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <Navbar />
      <Hero />
      <About />

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-semibold mb-16">Experience</h2>

          <div className="space-y-20">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold">Software Engineer III</h3>
                <p className="text-zinc-400">Expedia Group • Mar 2025 – Apr 2026</p>
              </div>
              <div className="md:col-span-8 text-lg text-zinc-300 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Led company-wide Node.js framework tooling and service generators</li>
                  <li>GHEC migration + Spinnaker pipeline modernization</li>
                  <li>Primary Node.js SME — supported 10+ teams</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
                <p className="text-zinc-400">Kojo • Feb 2023 – Feb 2025</p>
              </div>
              <div className="md:col-span-8 text-lg text-zinc-300 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>93%+ page load reduction</strong> (40s → 3s)</li>
                  <li>Built OpenAI + Azure PDF extraction system</li>
                  <li>Led 5 large enterprise projects as Project Lead</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
                <p className="text-zinc-400">Ascent Cloud • Feb 2022 – Jan 2023</p>
              </div>
              <div className="md:col-span-8 text-lg text-zinc-300 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Optimized data flows and built client admin platform with AWS Athena</li>
                  <li>Reduced costs and improved performance significantly</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
                <p className="text-zinc-400">Dell EMC • Sep 2018 – Feb 2022</p>
              </div>
              <div className="md:col-span-8 text-lg text-zinc-300 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduced frontend load time from 2min to ~600ms</li>
                  <li>Scaled MongoDB for 100k+ objects</li>
                  <li>Mentored engineers and onboarded Russia team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {/* Projects - Updated */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-xl text-zinc-400 mb-16">Recent work and personal projects</p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CigarSnap Editor */}
            <div className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500 rounded-3xl p-8 md:p-10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold mb-1">CigarSnap Editor</h3>
                  <p className="text-emerald-400 text-sm font-medium">Personal Project • Web App</p>
                </div>
                <div className="text-5xl opacity-20 group-hover:opacity-100 transition-all">🚬</div>
              </div>

              <p className="text-zinc-400 mb-6">
                Beautiful web application for cigar enthusiasts. Track your collection, log detailed tasting notes,
                rate cigars, and manage your humidor with a clean, modern interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Tailwind CSS</span>
              </div>

              <a
                href="https://iliyasvirsky.github.io/cigarsnap-editor/"
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Project →
              </a>
            </div>

            {/* create-node-service */}
            <div className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500 rounded-3xl p-8 md:p-10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold mb-1">create-node-service</h3>
                  <p className="text-emerald-400 text-sm font-medium">Open Source • CLI Tool</p>
                </div>
                <div className="text-5xl opacity-20 group-hover:opacity-100 transition-all">⚡</div>
              </div>

              <p className="text-zinc-400 mb-6">
                Production-grade CLI generator that creates full-featured Node.js + TypeScript microservices
                with Fastify, Docker, CI/CD, Jest testing, and best practices — all in one command.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Fastify</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Docker</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">CLI</span>
              </div>

              <a
                href="https://github.com/iliyasvirsky/create-node-service"
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Repository →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">Available for Freelance Work</h2>
          <p className="text-2xl text-zinc-400 mb-12">Let’s discuss your project</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:svirskyconsulting@gmail.com"
              className="inline-flex items-center gap-4 bg-white text-black text-xl font-medium px-10 py-5 rounded-3xl hover:bg-zinc-100 transition">
              <Mail className="w-6 h-6" />
              Email
            </a>

            <a href="https://www.upwork.com/freelancers/~01344f0a46199bfe18"
              target="_blank"
              className="inline-flex items-center gap-4 border border-zinc-700 hover:border-white text-xl font-medium px-10 py-5 rounded-3xl transition">
              💼 Upwork Profile
            </a>
          </div>

          <div className="flex justify-center gap-10 text-xl">
            <a href="https://github.com/iliyasvirsky" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/iliyasvirsky" target="_blank" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
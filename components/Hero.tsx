import { ExternalLink } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-40 pb-28 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-shrink-0">
                    <div className="w-72 h-72 md:w-80 md:h-80 bg-zinc-800 rounded-3xl border-4 border-zinc-700 flex items-center justify-center text-8xl">
                        <img
                            src="/iliya_image.jpg"
                            alt="Iliya Svirsky"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-5 py-2 rounded-2xl mb-6">
                        <span className="text-emerald-400">●</span> Austin, Texas
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                        Senior Software Engineer
                    </h1>

                    <p className="text-2xl text-zinc-400 max-w-2xl mb-10">
                        10+ years building scalable, high-performance systems.
                        Ex-Expedia, Kojo, Dell EMC. Specialized in legacy modernization,
                        OpenAI integrations, and delivering real business impact.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-100 transition">
                            View Projects
                        </a>
                        <a href="https://github.com/iliyasvirsky" target="_blank" className="border border-zinc-700 hover:border-zinc-400 px-8 py-4 rounded-2xl font-medium text-lg transition flex items-center gap-3">
                            GitHub <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


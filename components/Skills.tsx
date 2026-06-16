export default function Skills() {
    const skillCategories = [
        {
            title: "Backend & Frameworks",
            skills: ["Node.js", "NestJS", "Express", "Hapi.js", "GraphQL", "Apollo", "Python", "TypeScript"]
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Vue", "Redux", "AngularJS"]
        },
        {
            title: "Cloud & Infrastructure",
            skills: ["AWS", "Docker", "Terraform", "GitHub Actions", "Spinnaker", "Azure"]
        },
        {
            title: "Data & Tools",
            skills: ["MongoDB", "PostgreSQL", "Elasticsearch", "OpenAI", "Jest", "Cypress", "Datadog"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-5xl font-semibold mb-16 text-center">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-12 p-2">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="space-y-4">
                            <h3 className="text-emerald-400 font-semibold text-xl text-center md:text-left">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 p-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-3 rounded-2xl text-sm font-medium text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import type { Metadata } from 'next';
import {projects} from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";



export const metadata: Metadata = {
    title: "Projects | Safa Demirkan",
    description: "Full-stack applications, backend services, and automation projects built with Go, React, and modern web technologies.",
}

export default function ProjectsPage() {
    return (
        <div className={"max-w-6xl mx-auto px-4 py-12 md:py-20"}>
            <div className={"mb-12 md:mb-16 text-center animate-slide-down"}>
                <h1 className={"text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"}>Projects</h1>
                <p className={"text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"}>
                    A collection of full-stack applications and backend services showcasing modern development practices,
                    automated testing, and production deployments.
                </p>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                {projects.map((project, index) => (
                    <div
                        key={project.slug}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <ProjectCard project={project}/>
                    </div>
                ))}
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px] hover:border-gray-600 transition-all-smooth animate-slide-up" style={{ animationDelay: `${projects.length * 0.1}s` }}>
                    <h3 className="text-xl font-semibold mb-2 text-gray-300">More Projects Coming Soon</h3>
                    <p className="text-gray-500 text-center">
                        Currently building new full-stack applications
                    </p>
                </div>
            </div>
        </div>

    )
}
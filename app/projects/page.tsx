import type { Metadata } from 'next';
import {projects} from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";



export const metadata: Metadata = {
    title: "Projects | Safa Demirkan",
    description: "Full-stack applications, backend services, and automation projects built with Go, React, and modern web technologies.",
}

export default function ProjectsPage() {
    return (
        <div className={"max-w-6xl mx-auto px-4 py-20"}>
            <div className={"mb-16 text-center"}>
                <h1 className={"text-4xl font-bold mb-4"}>Projects</h1>
                <p className={"text-xl text-muted-foreground max-w-2xl mx-auto"}>
                    A collection of full-stack applications and backend services showcasing modern development practices,
                    automated testing, and production deployments.
                </p>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
                    <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
                    <p className="text-muted-foreground text-center">
                        Currently building new full-stack applications
                    </p>
                </div>
            </div>
        </div>

    )
}
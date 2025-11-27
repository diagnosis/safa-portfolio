import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {getFeaturedProjects} from "@/lib/projects";
import Link from "next/link";

export default function Home() {
    const featuredProjects = getFeaturedProjects()
    return (
        <>
            <section className="min-h-[50vh]  bg-black/100 flex flex-col items-center justify-center text-center gap-10 px-4">
                <h1 className="text-5xl font-bold max-w-3xl">Automation-Driven Software Engineer</h1>
                <p className="text-lg text-gray-300 max-w-2xl">
                    I build reliable backend and full-stack applications with Go and React.js, with end-to-end test coverage and automated CI/CD pipelines.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">
                        Contact Me
                    </Link>
                </Button>
            </section>

            <section className="py-20 pb-32">
                <h2 className="text-3xl text-center mb-10 font-bold">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project}/>
                    ))}
                </div>
            </section>
        </>
    );
}
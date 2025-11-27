import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {getFeaturedProjects} from "@/lib/projects";
import Link from "next/link";

export default function Home() {
    const featuredProjects = getFeaturedProjects()
    return (
        <>
            <section className="min-h-[70vh] bg-gradient-to-b from-black via-gray-950 to-black/50 flex flex-col items-center justify-center text-center gap-6 md:gap-8 px-4 py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="relative z-10 animate-slide-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight px-2">
                        Automation-Driven Software Engineer
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-6 md:mb-8 leading-relaxed px-2">
                        I build reliable backend and full-stack applications with Go and React.js, with end-to-end test coverage and automated CI/CD pipelines.
                    </p>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 transition-all-smooth hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </section>

            <section className="py-16 md:py-24 pb-24 md:pb-32">
                <div className="animate-slide-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 md:mb-4 font-bold px-4">Featured Projects</h2>
                    <p className="text-center text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                        A showcase of production-ready applications with modern architecture
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className="animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProjectCard project={project}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
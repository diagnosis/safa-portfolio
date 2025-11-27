import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Tell Next.js which slugs exist (for static generation)
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Make component async and await params
export default async function ProjectPage({
                                              params
                                          }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params; // Await the params Promise
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            {/* Hero Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                    {project.longDescription}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Button asChild size="lg">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo →
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            View Code →
                        </a>
                    </Button>
                </div>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
                <Section title="Screenshots">
                    <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent>
                            {project.screenshots.map((screenshot, index) => (
                                <CarouselItem key={index}>
                                    <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-950 flex items-center justify-center">
                                        <img
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="max-h-[600px] w-auto object-contain"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </Section>
            )}

            {/* Tech Stack */}
            <Section title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </Section>

            {/* Problem & Solution */}
            {project.problem && (
                <Section title="Problem">
                    <p className="text-lg">{project.problem}</p>
                </Section>
            )}

            {project.solution && (
                <Section title="Solution">
                    <p className="text-lg">{project.solution}</p>
                </Section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
                <Section title="Key Features">
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Architecture */}
            {project.architecture && (
                <Section title="Architecture">
                    <p className="text-lg leading-relaxed">{project.architecture}</p>
                </Section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
                <Section title="Challenges & Solutions">
                    <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                            <li key={index} className="border-l-2 border-blue-500 pl-4">
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
                <Section title="What I Learned">
                    <ul className="space-y-2">
                        {project.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>{learning}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Back Link */}
            <div className="mt-16 pt-8 border-t border-gray-800">
                <Button asChild variant="outline">
                    <Link href="/projects">← Back to Projects</Link>
                </Button>
            </div>
        </div>
    );
}

// Reusable Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {children}
        </section>
    );
}

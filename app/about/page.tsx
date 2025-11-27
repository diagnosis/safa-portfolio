import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Safa Demirkan",
    description: "Software Engineer specializing in Go, React, and test automation with nearly a decade of experience.",
};
export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="mb-16 text-center animate-slide-down">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">About Me</h1>
                <p className="text-xl text-gray-400">
                    Software Engineer | Full-Stack Developer | SDET
                </p>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-gray-300 animate-slide-up">
                <p>
                    With nearly a decade of experience as a Software Development Engineer in Test,
                    I've grown from building automation frameworks into designing complete,
                    production-ready systems. My background in web, mobile, and end-to-end testing
                    formed a strong foundation in reliability and engineering discipline — and over
                    the past few years, I've expanded that into full-stack development, backend
                    architecture, and cloud deployments.
                </p>

                <p>
                    I now specialize in building secure backend services in Go, full-stack applications
                    with React and Next.js, and fully automated CI/CD pipelines using GitHub Actions,
                    Jenkins, and GitLab. I've implemented authentication systems with JWT and refresh
                    tokens, designed REST APIs, and deployed containerized applications to DigitalOcean
                    droplets with Nginx, Docker, and automated workflows.
                </p>

                <p>
                    On the testing side, I've led automation efforts using Kotlin, Java, JavaScript,
                    Cucumber, Appium, and Playwright, delivering stable and scalable BDD/TDD frameworks
                    for both mobile and web. My CI/CD work has supported teams across iOS and Android
                    platforms, significantly reducing manual testing effort and increasing deployment
                    confidence.
                </p>

                <p>
                    What drives me is continuous growth. I learn aggressively, adopt new technologies
                    quickly, and love turning ideas into real, working products — whether it's a backend
                    microservice, a full-stack feature, or an automation pipeline. I enjoy solving
                    complex engineering problems, improving developer workflows, and building systems
                    that are both robust and user-focused.
                </p>

                <p>
                    Outside of engineering, I recharge by spending time outdoors — hiking, exploring
                    quiet places, and clearing my mind. These moments help me stay focused, creative,
                    and ready to build the next thing.
                </p>
            </div>

            <div className="mt-16 flex gap-4 justify-center animate-fade-in">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 transition-all-smooth hover:scale-105">
                    <Link href="/projects">View My Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all-smooth">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </div>
    );
}
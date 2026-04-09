import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Resume/CV | Safa Demirkan",
    description: "Software Engineer with 9+ years of experience, specializing in full-stack development and test automation.",
};

export default function CVPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            {/* Header */}
            <div className="mb-10 md:mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Safa Demirkan</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                    Software Engineer | Full-Stack Developer | SDET
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Button asChild>
                        <a href="/resume/safa_demirkan_resume.pdf" download>
                            Download PDF Resume
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href="mailto:demirkan@safadev.app">
                            Contact Me
                        </a>
                    </Button>
                </div>
            </div>

            {/* Summary */}
            <Card className="mb-6 md:mb-8">
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base md:text-lg leading-relaxed">
                        Software Engineer with 9+ years of experience in test automation, CI/CD, and software quality,
                        now transitioning into full-stack development. Recently built and launched production applications
                        using Go, React, React Native, and PostgreSQL — including a live iOS app on the App Store.
                        Strong foundation in system architecture, debugging, and automated testing, with a proven track
                        record of improving release quality and reducing manual effort through tooling and frameworks.
                    </p>
                </CardContent>
            </Card>

            {/* Projects Section */}
            <section className="mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Projects</h2>

                {/* LuxSUV */}
                <Card className="mb-4 md:mb-6">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl mb-2">LuxSUV — Premium Ground Transportation Platform</CardTitle>
                                <p className="text-sm text-muted-foreground">Oct 2024 – Present</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Full-stack luxury ride-sharing platform for the Seattle–Vancouver BC corridor. Spans a Go REST API,
                            React rider web app, React Native iOS driver app, and React admin portal — all live in production.
                        </p>

                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {['Go', 'React', 'React Native', 'Expo', 'PostgreSQL', 'TypeScript', 'Stripe', 'Google Maps API', 'TanStack Router', 'TanStack Query', 'SSE', 'EAS Build', 'Playwright', 'DigitalOcean', 'Vercel'].map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Architected and deployed a Go REST API on DigitalOcean serving three client applications: rider web app, driver iOS app, and admin portal.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Implemented multi-role JWT authentication with separate flows for web (httpOnly cookies) and mobile (SecureStore), plus role-based middleware for Rider, Driver, and Admin.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Integrated Stripe payments, Google Distance Matrix API for dynamic route pricing, and Server-Sent Events for real-time ride tracking.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Built and published a React Native/Expo driver app to the App Store via EAS Build, including background location tracking and TestFlight distribution.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Developed a Playwright E2E test suite with GitHub Actions CI/CD pipeline connected to Neon PostgreSQL and MailHog.</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="sm">
                                <a href="https://rider.luxsuv.us" target="_blank" rel="noopener noreferrer">
                                    Live Demo →
                                </a>
                            </Button>
                            {/* Add App Store link once available */}
                            {/* <Button asChild size="sm" variant="outline">
                                <a href="https://apps.apple.com/..." target="_blank" rel="noopener noreferrer">
                                    App Store →
                                </a>
                            </Button> */}
                        </div>
                    </CardContent>
                </Card>

                {/* Interactive Todo */}
                <Card className="mb-4 md:mb-6">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl mb-2">Interactive Todo Application</CardTitle>
                                <p className="text-sm text-muted-foreground">Nov 2025</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Production full-stack task management platform with team-based workflows, authentication,
                            and role-based access control.
                        </p>

                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {['Go', 'React', 'PostgreSQL', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Playwright', 'Docker', 'Nginx'].map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Designed and built secure REST API in Go with JWT authentication and role-based authorization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Implemented team management, task assignment, and refresh token security patterns</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Developed React SPA with TanStack ecosystem for optimistic UI and smart caching</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Created comprehensive E2E test suite with Playwright for API validation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Deployed with Docker, Nginx, and automated CI/CD pipeline on DigitalOcean</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="sm">
                                <a href="https://interactive-todo.safadev.app" target="_blank" rel="noopener noreferrer">
                                    Live Demo →
                                </a>
                            </Button>
                            <Button asChild size="sm" variant="outline">
                                <a href="https://github.com/diagnosis/interactive-todo" target="_blank" rel="noopener noreferrer">
                                    GitHub →
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Skills Section */}
            <section className="mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Technical Skills</h2>

                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-6">
                            <SkillCategory
                                title="Languages"
                                skills={['Go', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'SQL']}
                            />
                            <SkillCategory
                                title="Frontend"
                                skills={['React', 'Next.js', 'TanStack Router', 'TanStack Query', 'Tailwind CSS', 'Vite']}
                            />
                            <SkillCategory
                                title="Backend"
                                skills={['Go (Chi, pgx)', 'REST APIs', 'PostgreSQL', 'Docker', 'Nginx', 'Node.js']}
                            />
                            <SkillCategory
                                title="Mobile"
                                skills={['React Native', 'Expo', 'EAS Build', 'App Store Submission', 'iOS', 'Android']}
                            />
                            <SkillCategory
                                title="Testing & QA"
                                skills={['Playwright', 'Selenium', 'Appium', 'Cucumber', 'JUnit', 'TestNG', 'Jest']}
                            />
                            <SkillCategory
                                title="DevOps & Tools"
                                skills={['GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Linux']}
                            />
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Work Experience */}
            <section className="mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Work Experience</h2>

                <div className="space-y-4 md:space-y-6">
                    <ExperienceCard
                        company="Wizards of the Coast"
                        title="Software Development Engineer in Test"
                        location="Renton, WA"
                        period="Jan 2019 - May 2025"
                        achievements={[
                            "Built Java/Kotlin test automation framework, reducing manual testing effort significantly across web and mobile.",
                            "Developed Android/iOS automation with Appium, increasing test coverage by 40% in 6 months.",
                            "Implemented BDD framework (Cucumber, Selenium, Appium), reducing defects by 25% within one year.",
                            "Integrated test suites into Jenkins/GitLab CI/CD pipelines; deployed scalable environments on AWS, Docker, and Kubernetes.",
                            "Adopted Playwright for web automation, boosting test efficiency by 40% in 6 months.",
                        ]}
                    />

                    <ExperienceCard
                        company="Providence Health Services"
                        title="Software Development Engineer in Test"
                        location="Seattle, WA"
                        period="Jul 2018 - Jan 2019"
                        achievements={[
                            "Built Android/iOS/Web automation framework (Java, JUnit, JavaScript), increasing test coverage by 50% in 4 months.",
                            "Automated deep linking and parallel mobile tests; Agile test strategy via Bitrise CI reduced system downtime by 30%.",
                        ]}
                    />

                    <ExperienceCard
                        company="Sempra Energy"
                        title="Software Development Engineer in Test"
                        location="Redmond, WA"
                        period="Nov 2017 - May 2018"
                        achievements={[
                            "Automated tests with WebDriver and Cucumber, increasing test coverage by 40% within 3 months.",
                        ]}
                    />

                    <ExperienceCard
                        company="Hilton"
                        title="Software Development Engineer in Test / Test Lead Engineer"
                        location="Memphis, TN"
                        period="Mar 2017 - Nov 2017"
                        achievements={[
                            "Led test strategy with Jenkins CI/CD; built Selenium/Appium scripts for web/mobile, enhancing coverage by 60%.",
                        ]}
                    />

                    <ExperienceCard
                        company="American Express"
                        title="Software Development Engineer in Test"
                        location="NYC, NY"
                        period="Nov 2015 - Jan 2017"
                        achievements={[
                            "Built and maintained Selenium WebDriver automation in Jenkins CI; developed internal tooling to reduce manual QA effort.",
                        ]}
                    />
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Education</h2>

                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold">Northwestern University</h3>
                                        <p className="text-muted-foreground">MS, Biomedical Engineering</p>
                                    </div>
                                    <span className="text-muted-foreground">Jan 2013 - Jan 2015</span>
                                </div>
                                <p className="text-sm">GPA: 3.5</p>
                            </div>

                            <div className="border-t border-gray-800 pt-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold">Yeditepe University</h3>
                                        <p className="text-muted-foreground">BS, Biomedical Engineering</p>
                                    </div>
                                    <span className="text-muted-foreground">Jan 2007 - Jan 2011</span>
                                </div>
                                <p className="text-sm">GPA: 3.6</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

// Helper Components
function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    );
}

function ExperienceCard({
                            company,
                            title,
                            location,
                            period,
                            achievements
                        }: {
    company: string;
    title: string;
    location: string;
    period: string;
    achievements: string[];
}) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <div>
                        <CardTitle className="text-lg md:text-xl mb-1">{company}</CardTitle>
                        <p className="text-sm md:text-base text-muted-foreground">{title}</p>
                    </div>
                    <div className="text-left sm:text-right text-xs md:text-sm text-muted-foreground">
                        <p>{period}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
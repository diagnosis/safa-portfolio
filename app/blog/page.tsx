import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Blog | Safa Demirkan",
    description: "Technical articles and insights from my development journey.",
};

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-xl text-muted-foreground">
                    Technical articles and insights from my development journey
                </p>
            </div>

            <Card>
                <CardContent className="py-20 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                    <p className="text-muted-foreground mb-6">
                        I'm currently focused on building projects. Blog posts about my learnings
                        will be published soon!
                    </p>
                    <p className="text-sm text-muted-foreground">
                        First post: "Building a Full-Stack Task Manager with Go and React"
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
"use client";

import {useEffect, useState} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {useSearchParams} from "next/dist/client/components/navigation";

export default function ContactPage() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const subject = searchParams.get("subject");
        if (subject) {
            setFormData(prev => ({...prev, subject}));
        }
    }, [searchParams]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            <div className="mb-12 text-center animate-slide-down">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Get in Touch</h1>
                <p className="text-xl text-gray-400">
                    Interested in collaboration or have a question? I'd love to hear from you.
                </p>
            </div>

            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm animate-slide-up">
                <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>
                        Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {status === "success" ? (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-green-500 mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground mb-4">
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                            <Button onClick={() => setStatus("idle")} variant="outline">
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth disabled:opacity-50 hover:border-gray-600"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth disabled:opacity-50 hover:border-gray-600"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth disabled:opacity-50 hover:border-gray-600"
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth disabled:opacity-50 hover:border-gray-600 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-500 transition-all-smooth hover:scale-[1.02]" disabled={status === "loading"}>
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>

            <div className="mt-12 text-center animate-fade-in">
                <p className="text-gray-400 mb-2">Or email me directly at:</p>
                <a
                    href="mailto:demirkan@safadev.app"
                    className="text-lg text-blue-400 hover:text-blue-300 transition-all-smooth hover:underline"
                >
                    demirkan@safadev.app
                </a>
            </div>
        </div>
    );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://safademirkan.com'),
  title: {
    default: "Safa Demirkan - Software Engineer Portfolio",
    template: "%s | Safa Demirkan",
  },
  description: "Automation-driven software engineer specializing in backend and full-stack development with Go, React.js, and TypeScript. Building reliable applications with end-to-end test coverage and automated CI/CD pipelines.",
  keywords: ["Software Engineer", "Full Stack Developer", "Backend Developer", "Go Developer", "React Developer", "TypeScript", "CI/CD", "Test Automation", "Web Development", "Safa Demirkan"],
  authors: [{ name: "Safa Demirkan" }],
  creator: "Safa Demirkan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safademirkan.com",
    siteName: "Safa Demirkan Portfolio",
    title: "Safa Demirkan - Software Engineer Portfolio",
    description: "Automation-driven software engineer specializing in backend and full-stack development with Go, React.js, and TypeScript.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safa Demirkan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safa Demirkan - Software Engineer Portfolio",
    description: "Automation-driven software engineer specializing in backend and full-stack development with Go, React.js, and TypeScript.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={"dark"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >

            <Header/>
            <main className={"flex-1 bg-black/50"}>
                {children}
            </main>
            <Footer/>
            <Analytics />

      </body>
    </html>
  );
}

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const Header = () =>
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 py-4 px-4 md:py-5 md:px-6 sticky top-0 z-50 transition-all-smooth">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-lg md:text-xl font-bold hover:text-blue-400 transition-all-smooth hover:scale-105">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ❮Safa Dev❯
                </span>
            </Link>

            <nav className="hidden lg:block">
                <ul className="flex gap-8">
                    <li>
                        <Link href="/about" className="relative text-gray-300 hover:text-white transition-all-smooth group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all-smooth group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="relative text-gray-300 hover:text-white transition-all-smooth group">
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all-smooth group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="relative text-gray-300 hover:text-white transition-all-smooth group">
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all-smooth group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" className="relative text-gray-300 hover:text-white transition-all-smooth group">
                            Resume/CV
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all-smooth group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all-smooth hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <MobileMenu />
        </div>
    </header>
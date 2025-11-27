import Link from "next/link";

export const Header = () =>
    <header className="bg-gray-900 border-b border-gray-800 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold hover:text-blue-400 transition">
                ❮Safa Dev❯
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/about" className="hover:text-blue-400 transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-blue-400 transition">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-blue-400 transition">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" className="hover:text-blue-400 transition">
                            Resume/CV
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-400 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
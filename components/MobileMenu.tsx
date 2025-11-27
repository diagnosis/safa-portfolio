"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/cv", label: "Resume/CV" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center relative z-[9999]"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9997] lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-[#111827] border-l border-gray-700 shadow-2xl z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-3 pt-24 px-6 pb-8 bg-[#111827] h-full overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className={`block px-5 py-4 rounded-lg transition-all font-medium ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                } ${link.href === "/contact" ? "bg-blue-600 hover:bg-blue-500 text-white mt-6 shadow-lg shadow-blue-600/30" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

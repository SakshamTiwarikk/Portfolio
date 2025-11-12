"use client";

import "./globals.css";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  const scrollToSection = (sectionId) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <span className="text-white font-bold text-xl">ST</span>
                  </div>
                </div>
                <span className="text-gray-900 font-semibold text-lg hidden sm:block">
                  Saksham Tiwari
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 rounded-lg text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-900 p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm">
                  © 2025 Saksham Tiwari. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Full Stack Web Developer
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

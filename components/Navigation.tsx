"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;
  const isHomepage = pathname === "/";
  const shouldShowNavBackground = isScrolled;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      shouldShowNavBackground 
        ? "bg-slate-900/95 backdrop-blur-sm shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className={`transition-all duration-300 ${
              shouldShowNavBackground || isHomepage
                ? "opacity-100"
                : "opacity-100"
            }`}>
              <Image 
                src={shouldShowNavBackground || isHomepage ? "/white.png" : "/color png.png"}
                alt="VLP Technologies Logo" 
                width={117} 
                height={117}
                className="h-20 w-auto pt-2"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isHomepage || shouldShowNavBackground
                    ? (isActive(item.href)
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-yellow-400")
                    : (isActive(item.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600")
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/get-quote"
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isHomepage || shouldShowNavBackground
                  ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isHomepage || shouldShowNavBackground
                ? "text-gray-300 hover:text-yellow-400 hover:bg-slate-800"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            isHomepage || shouldShowNavBackground
              ? "bg-slate-800 border-t border-slate-700"
              : "bg-white border-t border-gray-200"
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isHomepage || shouldShowNavBackground
                      ? (isActive(item.href)
                        ? "text-yellow-400 bg-slate-700"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-slate-700")
                      : (isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100")
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/get-quote"
                className={`block w-full mt-4 px-3 py-2 rounded-lg font-medium text-center transition-colors duration-200 ${
                  isHomepage || shouldShowNavBackground
                    ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

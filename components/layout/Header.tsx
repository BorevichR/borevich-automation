"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Главная", id: "hero" },
  { label: "Решения", id: "services" },
  { label: "Цены", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

function scrollToSection(id: string, closeMenu?: () => void) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (closeMenu) closeMenu();
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero", () =>
              setIsMobileMenuOpen(false)
            )}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center border border-gray-700">
              <span className="text-white font-bold text-sm">BA.</span>
            </div>
            <span className="font-semibold text-white text-base sm:text-lg">
              Borevich Automation
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id, () => setIsMobileMenuOpen(false))
                }
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://t.me/BorevichAutomation_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                В Telegram
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id, () => setIsMobileMenuOpen(false))
                }
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://t.me/BorevichAutomation_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                В Telegram
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
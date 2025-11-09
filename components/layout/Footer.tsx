import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-gray-700">
              <span className="text-white font-bold text-xs">BA.</span>
            </div>
            <span className="font-semibold text-white">
              Borevich Automation
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © 2025 Borevich Automation. Автоматизация с ИИ
          </p>
          <a
            href="https://t.me/BorevichAutomation_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium text-sm"
          >
            Написать в Telegram →
          </a>
        </div>
      </div>
    </footer>
  );
}
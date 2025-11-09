"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Автоматизация бизнес-процессов с{" "}
              <span className="text-blue-400">ИИ</span>{" "}
              для малого и среднего бизнеса
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Подключаем ИИ к вашим бизнес-процессам, чтобы снять рутину с
              команды и ускорить обработку клиентов. Вы получаете больше сделок
              при тех же людях и прозрачную картину по бизнесу в любой момент.
            </p>
            <div className="flex justify-center">
              <a
                href="https://t.me/BorevichAutomation_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="
                    w-full sm:w-auto
                    h-16 px-12 sm:px-14
                    bg-blue-500 hover:bg-blue-600
                    text-white text-xl font-semibold
                    rounded-2xl
                    shadow-[0_20px_45px_rgba(59,130,246,0.5)]
                    hover:shadow-[0_24px_55px_rgba(59,130,246,0.65)]
                    transition-all
                  "
                >
                  Запустить диагностику
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
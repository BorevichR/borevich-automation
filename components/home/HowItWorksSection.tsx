"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Search, PhoneCall, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Старт через Telegram",
    description:
      "Вы переходите в бота и описываете бизнес, текущие процессы и задачи. На основе ответов формируется структурированный бриф.",
  },
  {
    number: "02",
    icon: Search,
    title: "Анализ и предложение",
    description:
      "Мы изучаем бриф, выделяем узкие места и предлагаем, какие процессы стоит автоматизировать в первую очередь и какой эффект это даст.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Созвон и согласование",
    description:
      "Созваниваемся, уточняем детали, согласуем приоритеты и формат работы: что входит в первый релиз, какие сервисы подключаем, по какому тарифу идём.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Реализация и запуск",
    description:
      "Настраиваем сценарии, подключаем сервисы, тестируем на реальных данных и запускаем. Передаём доступы, краткую инструкцию для команды и обеспечиваем базовую поддержку после старта.",
  },
];

export default function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      className="py-20 md:py-28 bg-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            От первого обращения до запущенной автоматизации — в несколько шагов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex"
            >
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-gray-900 rounded-2xl p-8 pt-12 flex-1 flex flex-col border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Линия-связка между шагами на больших экранах */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent -ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
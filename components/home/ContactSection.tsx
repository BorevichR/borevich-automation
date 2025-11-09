"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Точки для улучшения",
    description: "Где уходит время команды и теряются заявки.",
  },
  {
    title: "Черновой план автоматизации",
    description:
      "Понимание, какие процессы и задачи имеет смысл автоматизировать и подключить к ИИ в первую очередь, чтобы разгрузить команду и ускорить работу с клиентами.",
  },
  {
    title: "Понятный следующий шаг",
    description:
      "Согласованный формат проекта: что делаем в ближайшее время, какие результаты ожидаем и как двигаемся дальше.",
  },
];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы посмотреть, как ИИ разгрузит ваш бизнес?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Запустите короткую диагностику в Telegram: бот аккуратно соберёт
            базовую информацию о ваших процессах, а мы на основе ответов
            подготовим предложение по автоматизации.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 rounded-3xl shadow-2xl shadow-black/40 p-8 md:p-12 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Что вы получите после диагностики
          </h3>

          <div className="space-y-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://t.me/BorevichAutomation_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                className="
                  w-full sm:w-auto
                  px-8 sm:px-12
                  py-4 sm:py-5
                  bg-blue-500 hover:bg-blue-600
                  text-white text-lg sm:text-xl font-semibold
                  rounded-2xl
                  shadow-[0_20px_45px_rgba(59,130,246,0.5)]
                  hover:shadow-[0_24px_55px_rgba(59,130,246,0.65)]
                  transition-all
                "
              >
                Запустить диагностику в Telegram
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Диагностика не потребует много времени, после её прохождения мы
              свяжемся с вами для согласования следующего шага.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
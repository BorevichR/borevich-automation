"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "от 20 000 ₽",
    description: "Базовая автоматизация для начала",
    features: [
      "1 ключевой сценарий автоматизации",
      "Заявки с сайта / формы / бота автоматически создаются в CRM",
      "Уведомление ответственному менеджеру о новой заявке",
      "Подключение до 2–3 сервисов",
      "Краткая инструкция по работе",
      "Гарантийная поддержка по багам 7 дней",
    ],
    popular: false,
  },
  {
    name: "Операционный",
    price: "от 50 000 ₽",
    description: "Полный цикл работы с заявками",
    features: [
      "2–3 сценария автоматизации вокруг CRM",
      "Приём заявок с сайта и мессенджеров в единую воронку",
      "Автоназначение ответственных и постановка задач по лидам",
      "Напоминания, если заявки стоят без движения",
      "Подключение до 5–7 сервисов",
      "Базовые отчёты по заявкам и менеджерам (в т.ч. краткая сводка в Telegram)",
      "Гарантийная поддержка по багам 14 дней",
    ],
    popular: true,
  },
  {
    name: "Бизнес",
    price: "от 80 000 ₽",
    description: "Комплексная автоматизация с AI-ассистентом",
    features: [
      "Всё из тарифа «Операционный»",
      "AI-бот / ассистент для первичного общения и сбора данных",
      "Несколько источников заявок: сайт, мессенджеры, реклама, звонки",
      "Гибкие правила распределения: очереди, приоритеты, сегменты клиентов",
      "Единая история клиента в CRM и кастомные отчёты / дашборды для собственника",
      "Гарантийная поддержка по багам 30 дней",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="py-20 md:py-28 bg-gray-900"
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
            Цены
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Выберите подходящий тариф для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "ring-2 ring-blue-500 transform md:scale-105"
                  : "border border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-blue-500/30">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/BorevichAutomation_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-auto"
              >
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  Обсудить проект
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="font-medium text-gray-300">
              Точная стоимость зависит от ваших сервисов и количества сценариев.
            </span>{" "}
            Напишите нам в Telegram — разберём ваш процесс и рассчитаем проект
            под ваши задачи.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
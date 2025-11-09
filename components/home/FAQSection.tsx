"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "С чего вообще начать, если мы не до конца понимаем, что автоматизировать?",
    answer:
      "Начинаем с диагностики. Вы в свободной форме описываете процессы и точки, где сейчас больше всего ручной работы. На основе этого мы предлагаем 1–2 понятных варианта автоматизации: что делаем первым шагом, какой результат получите и во сколько этапов это лучше развернуть.",
  },
  {
    question:
      "У нас нет amoCRM или Битрикс24, часть заявок в мессенджерах и таблицах. Так можно?",
    answer:
      "Да. Мы опираемся на то, что у вас уже есть: таблицы, почта, мессенджеры, простые CRM. Можно аккуратно связать текущие инструменты, а при необходимости помочь выбрать и подключить CRM без резких движений и «ломки» процессов.",
  },
  {
    question: "Нужен ли свой программист или IT-отдел, чтобы это работало?",
    answer:
      "Нет. Мы собираем сценарии на n8n под ключ. От вас — доступы к сервисам, описание процессов и согласование логики. Если в компании есть свой технический специалист, можем передать ему структуру сценариев и договориться, кто за что отвечает дальше.",
  },
  {
    question:
      "Вы работаете только с CRM или делаете ещё и умных ботов-консультантов?",
    answer:
      "Мы настраиваем и CRM-интеграции, и умных Telegram-ботов / AI-ассистентов. Боты помогают отвечать на типовые вопросы, собирать данные по клиенту, записывать на услуги и передавать в CRM уже структурированную информацию вместо разрозненных переписок.",
  },
  {
    question:
      "Если сейчас хаос: заявки в мессенджерах, Excel и блокнотах — это проблема?",
    answer:
      "Это обычная отправная точка. На диагностике мы раскладываем, откуда приходят обращения и куда попадают сейчас, и предлагаем простой план наведения порядка: что связать между собой, какие шаги автоматизировать в первую очередь и как это сделать без лишнего стресса для команды.",
  },
  {
    question:
      "Что происходит после запуска — кто поддерживает сценарии и что, если что-то сломается?",
    answer:
      "В каждый тариф входит период базовой поддержки: мы следим, чтобы сценарии стабильно работали, правим мелкие ошибки и по необходимости слегка подстраиваем логику. Далее можно либо продолжить сопровождение по отдельному договору, либо передать поддержку вашему сотруднику с простой инструкцией.",
  },
  {
    question: "Сколько времени занимает внедрение таких решений?",
    answer:
      "Базовые сценарии (заявка → CRM → уведомление) обычно укладываются в 1–2 недели с момента согласования. Более сложные истории с несколькими каналами и ИИ-ботом занимают 3–4 недели. Точные сроки называем после диагностики, когда понятно, какие процессы трогаем и какие сервисы подключаем.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className="py-20 md:py-28 bg-gray-950"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-gray-400">
            Коротко отвечаем на основные вопросы о внедрении ИИ-автоматизации и
            работе с Borevich Automation
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-white text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
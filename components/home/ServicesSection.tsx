"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, Bot, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Порядок и логика в CRM",
    description:
      "Выстраиваем структуру воронок, статусов и задач так, чтобы каждая заявка проходила понятный путь, а данные по клиентам были аккуратно собраны в одном месте.",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Zap,
    title: "Заявки из всех каналов в единой системе",
    description:
      "Объединяем обращения с сайта, форм, мессенджеров и рекламы в общую CRM. Команда работает с единой лентой обращений, без разрыва между каналами.",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: Bot,
    title: "Автоматические касания и ИИ-консультант",
    description:
      "Настраиваем напоминания и сообщения по заданной логике и подключаем ИИ-бота, который корректно отвечает на типовые вопросы, собирает первичную информацию и передаёт её менеджеру.",
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    icon: BarChart3,
    title: "Отчёты и прозрачная картина для владельца",
    description:
      "Формируем сводные показатели по заявкам и продажам и передаём их в удобном формате. Руководитель видит динамику и ключевые цифры по воронке без погружения в операционную рутину.",
    color: "bg-orange-500/20 text-orange-400",
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
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
            Что автоматизируем
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Подключаем ИИ к вашим процессам, настраиваем CRM и ИИ-ботов, чтобы
            работа с клиентами шла по предсказуемой и управляемой логике
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700 group"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
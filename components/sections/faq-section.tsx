"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "XpressGo qanday ishlaydi?",
    answer: "XpressGo - bu Telegram mini-app orqali ishlaydigan pre-order xizmati. Siz sevimli kafe yoki restorandan buyurtma berasiz, vaqtini tanlaysiz, Click yoki Payme orqali to'laysiz va belgilangan vaqtda navbatsiz olib ketasiz."
  },
  {
    question: "Qaysi to'lov usullarini qo'llab-quvvatlaysiz?",
    answer: "Hozirda Click va Payme to'lov tizimlari orqali to'lash mumkin. Tez orada boshqa to'lov usullari ham qo'shiladi."
  },
  {
    question: "Buyurtmani qancha vaqt oldin berish kerak?",
    answer: "Minimal vaqt 10 daqiqa. Siz buyurtma berayotganda mavjud vaqtlarni ko'rasiz va sizga qulay bo'lgan vaqtni tanlashingiz mumkin."
  },
  {
    question: "Buyurtmani bekor qilsa bo'ladimi?",
    answer: "Ha, buyurtma tayyor bo'lishdan kamida 5 daqiqa oldin bekor qilish mumkin. Pul to'liq qaytariladi."
  },
  {
    question: "Qaysi shaharlar va kafelarda xizmat mavjud?",
    answer: "Hozirda Toshkent shahrida 120+ kafe va restoranda xizmat ko'rsatmoqdamiz. Har hafta yangi hamkorlar qo'shilmoqda."
  },
  {
    question: "Biznes sifatida qanday qo'shilish mumkin?",
    answer: "Hamkor bo'lish uchun 'Biznes uchun' bo'limidagi formani to'ldiring yoki bizning Telegram kanalimiz orqali bog'laning. 24 soat ichida javob beramiz."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground lg:text-5xl">
            Ko'p so'raladigan savollar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            XpressGo haqida eng ko'p beriladigan savollarga javoblar
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-none bg-card px-6 shadow-md transition-all data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Boshqa savollaringiz bormi?{" "}
            <a
              href="#"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Biz bilan bog'laning
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

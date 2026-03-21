"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, BarChart3, Headphones, ArrowRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: TrendingUp,
    title: "Savdoni oshiring",
    description: "Oldindan buyurtmalar orqali kunlik savdoni 30% ga oshiring"
  },
  {
    icon: Users,
    title: "Yangi mijozlar",
    description: "15,000+ foydalanuvchi bazasiga kirish imkoniyati"
  },
  {
    icon: BarChart3,
    title: "Analitika paneli",
    description: "Real-time sotuvlar va mijoz tahlili"
  },
  {
    icon: Headphones,
    title: "24/7 qo'llab-quvvatlash",
    description: "Bizning jamoamiz doim yordam berishga tayyor"
  }
]

export function B2BSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-400">
              Biznes uchun
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-white lg:text-5xl">
              Kafe va restoranlar uchun{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                maxsus imkoniyatlar
              </span>
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              XpressGo bilan hamkorlik qiling va mijozlaringizga yangi darajadagi 
              xizmat ko'rsating. Biz bilan savdoingizni oshiring!
            </p>

            {/* Feature Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-1 font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="group h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Hamkor bo'lish
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Mascot with Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
            
            {/* Mascot */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative isolate px-4 pb-6 pt-10 lg:px-8"
            >
              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute right-0 top-0 z-20 max-w-[220px] rounded-2xl bg-white px-5 py-4 shadow-xl lg:right-2 lg:top-2"
              >
                <p className="text-sm font-medium text-gray-800">
                  &ldquo;Har kuni 200+ yangi buyurtma! XpressGo bizning eng yaxshi qarorimiz bo'ldi.&rdquo;
                </p>
                <p className="mt-2 text-xs text-gray-500">— Barista Coffee, Toshkent</p>
                <div className="absolute -bottom-2 right-12 h-4 w-4 rotate-45 bg-white" />
              </motion.div>

              {/* 3D Mascot Character - Brand Face */}
              <div className="relative z-0 h-80 w-80 lg:h-[420px] lg:w-[420px]">
                <Image
                  src="/mascot2.png"
                  alt="XpressGo hamkor maskoti"
                  width={420}
                  height={420}
                  className="relative z-0 h-full w-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Stats Card */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-0 z-20 rounded-xl bg-white p-4 shadow-xl lg:-left-10 lg:bottom-16"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">+47%</p>
                    <p className="text-xs text-gray-500">Savdo o'sishi</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

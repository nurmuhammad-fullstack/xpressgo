"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0057FF] via-[#0080FF] to-[#00C9C8]">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-cyan-300/18 blur-xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-blue-400/18 blur-xl" />
      </div>

      <div className="container relative mx-auto px-4 pb-20 pt-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Zap className="h-4 w-4" />
              <span>Navbatlarsiz buyurtma platformasi</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-balance text-[clamp(1.75rem,4.2vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-white"
            >
              Vaqtingizni navbatda emas,{" "}
              <span className="relative">
                <span className="relative z-10">o'zingizga</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-[0.12em] left-0 h-[0.24em] bg-cyan-300/40"
                />
              </span>{" "}
              <span className="text-cyan-200">sarflang.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-8 max-w-lg text-pretty text-sm text-blue-100 sm:text-base lg:mx-0 lg:text-lg"
            >
              XpressGo — O‘zbekistonda xizmatlarni oldindan bron qilib, navbatni butunlay chetlab o‘tish uchun yaratilgan. Hech qanday alohida ilova kerak emas — hammasi bitta Telegram chatida.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link href="https://t.me/xpress_go_bot" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group h-12 rounded-full bg-white px-6 text-base font-semibold text-[#0057FF] shadow-xl shadow-blue-900/20 transition-all hover:bg-cyan-50 hover:shadow-2xl"
                >
                  Telegram botni ishga tushiring
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-2 border-white/30 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Biz bilan bog'laning
                </Button>
              </Link>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              {[
                { icon: Clock, text: "2 daqiqada tayyor" },
                { icon: CreditCard, text: "Click & Payme" },
                { icon: Zap, text: "Navbatsiz" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Mascot Container */}
            <motion.div
              initial={floatAnimation.initial}
              animate={shouldReduceMotion ? { y: 0 } : floatAnimation.animate}
              transition={shouldReduceMotion ? undefined : floatAnimation.animate.transition}
              className="relative transform-gpu will-change-transform"
            >
              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-4 -top-4 z-10 rounded-2xl bg-white px-4 py-3 shadow-xl lg:-left-8"
              >
                <p className="text-sm font-semibold text-gray-800">
                  Salom! Tayyor qahva kutmoqda ☕
                </p>
                <div className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 bg-white" />
              </motion.div>

              {/* 3D Mascot Character - Brand Face */}
              <div className="relative h-80 w-80 lg:h-[480px] lg:w-[480px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-300/30 blur-xl" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src="/mascot.png"
                    alt="XpressGo maskoti - qahva buyurtma beruvchi do'st"
                    width={480}
                    height={480}
                    className="relative z-10 drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={shouldReduceMotion ? { y: 0, x: 0 } : { y: [-8, 8, -8], x: [-4, 4, -4] }}
              transition={shouldReduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 rounded-2xl bg-white p-3 shadow-xl transform-gpu will-change-transform lg:right-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Buyurtma tayyor!</p>
                  <p className="text-sm font-semibold text-gray-800">Cappuccino</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? { y: 0, x: 0 } : { y: [8, -8, 8], x: [4, -4, 4] }}
              transition={shouldReduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-20 rounded-2xl bg-white p-3 shadow-xl transform-gpu will-change-transform lg:left-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tez tayyor</p>
                  <p className="text-sm font-semibold text-gray-800">3 daqiqa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}

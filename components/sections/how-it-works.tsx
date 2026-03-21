"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Send, ShoppingBag, Clock, Wallet, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Send,
    title: "Telegram'ni oching",
    description: "Bizning mini-ilovani Telegram orqali oching va menyuni ko'ring",
    gradient: "from-[#0057FF] to-[#3B82F6]",
    shadowColor: "shadow-blue-500/30",
    bgGlow: "bg-blue-500/20",
    number: "01"
  },
  {
    icon: ShoppingBag,
    title: "Buyurtma bering",
    description: "Sevimli ichimlik yoki taomingizni tanlang va savatga qo'shing",
    gradient: "from-[#06B6D4] to-[#0891B2]",
    shadowColor: "shadow-cyan-500/30",
    bgGlow: "bg-cyan-500/20",
    number: "02"
  },
  {
    icon: Clock,
    title: "Vaqtni tanlang",
    description: "Qachon olib ketishni xohlayotganingizni belgilang",
    gradient: "from-[#14B8A6] to-[#0D9488]",
    shadowColor: "shadow-teal-500/30",
    bgGlow: "bg-teal-500/20",
    number: "03"
  },
  {
    icon: Wallet,
    title: "To'lang va oling",
    description: "Click yoki Payme orqali to'lang va navbatsiz olib keting",
    gradient: "from-[#10B981] to-[#059669]",
    shadowColor: "shadow-emerald-500/30",
    bgGlow: "bg-emerald-500/20",
    number: "04"
  }
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/80 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white hover:shadow-2xl dark:bg-slate-900/80 dark:hover:bg-slate-900">
        
        {/* Background Glow Effect */}
        <div
          className={`absolute -right-20 -top-20 h-36 w-36 rounded-full ${step.bgGlow} opacity-30 blur-2xl will-change-transform transition-[transform,opacity] duration-500 group-hover:scale-110 group-hover:opacity-70`}
        />
        
        {/* Step Number - Large Background */}
        <div className="absolute right-4 top-4 font-bold text-7xl text-slate-100 dark:text-slate-800/50">
          {step.number}
        </div>

        {/* Icon Container */}
        <div
          className="relative z-10 mb-6 will-change-transform transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} ${step.shadowColor} shadow-xl`}>
            <step.icon className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
          
          {/* Active Indicator */}
          <div
            className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg will-change-transform transition-transform duration-300 group-hover:scale-110"
          >
            <CheckCircle2 className={`h-5 w-5 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`} fill="currentColor" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
            {step.title}
          </h3>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {step.description}
          </p>
        </div>

        {/* Bottom Gradient Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-[0.3] bg-gradient-to-r ${step.gradient} will-change-transform transition-transform duration-300 group-hover:scale-x-100`}
        />
      </div>

      {/* Connection Arrow - Desktop Only */}
      {index < steps.length - 1 && (
        <div className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg will-change-transform transition-transform duration-300 group-hover:translate-x-1"
          >
            <ArrowRight className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function HowItWorksSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,87,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,87,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={shouldReduceMotion ? { y: 0, rotate: 0 } : { y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-40 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-lg will-change-transform"
      />
      <motion.div
        animate={shouldReduceMotion ? { y: 0, rotate: 0 } : { y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-lg will-change-transform"
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Qanday ishlaydi?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl"
          >
            Faqat{" "}
            <span className="bg-gradient-to-r from-[#0057FF] to-[#00C9C8] bg-clip-text text-transparent">
              4 oddiy qadam
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            Bir necha daqiqada buyurtma bering va navbatsiz qahvangizni oling. 
            Vaqtingizni tejang, hayotdan zavqlaning.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-3 text-sm text-slate-600 shadow-inner dark:from-slate-800 dark:to-slate-900 dark:text-slate-400">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-cyan-400 to-cyan-600" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-emerald-600" />
            </div>
            <span className="font-medium">15,000+ foydalanuvchilar allaqachon foydalanmoqda</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import { Check, Coffee, Leaf, Flame, Clock, MapPin, Star, Sparkles, Zap } from "lucide-react"
import { useRef } from "react"

const menuItems = [
  { name: "Cappuccino", price: "28,000", icon: Coffee, tag: "Ommabop", tagColor: "bg-blue-500" },
  { name: "Fresh Juice", price: "22,000", icon: Leaf, tag: "Yangi", tagColor: "bg-green-500" },
  { name: "Hot Dog", price: "18,000", icon: Flame, tag: "Tez", tagColor: "bg-orange-500" }
]

export function PhoneMockupSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const rawPhoneY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [56, -56])
  const rawPhoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [-2, 0, 2])
  const phoneY = useSpring(rawPhoneY, { stiffness: 110, damping: 24, mass: 0.35 })
  const phoneRotate = useSpring(rawPhoneRotate, { stiffness: 110, damping: 24, mass: 0.35 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Background Orbs */}
      <motion.div
        animate={shouldReduceMotion ? { scale: 1, opacity: 0.25 } : {
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-[48px] will-change-transform"
      />
      <motion.div
        animate={shouldReduceMotion ? { scale: 1, opacity: 0.2 } : {
          scale: [1.08, 1, 1.08],
          opacity: [0.15, 0.28, 0.15]
        }}
        transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 h-[260px] w-[260px] rounded-full bg-gradient-to-r from-secondary/15 to-cyan-400/15 blur-[44px] will-change-transform"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Telegram bot</span>
            </motion.div>

            <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Barcha imkoniyatlar{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
                  bir joyda
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"
                />
              </span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Hech qanday alohida ilova kerak emas. 
              Menyu, vaqt tanlash, to'lov — hammasi bitta Telegram chatida.
            </p>

            {/* Features List with Animation */}
            <div className="space-y-5">
              {[
                { text: "Real-time buyurtma holati", icon: Zap },
                { text: "Click va Payme orqali to'lov", icon: Check },
                { text: "Sevimli buyurtmalar tarixi", icon: Star },
                { text: "Yaqin hamkorlarni xaritada ko'rish", icon: MapPin }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 rounded-2xl border border-transparent bg-gradient-to-r from-white/80 to-white/40 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg dark:from-gray-800/80 dark:to-gray-800/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-8"
            >
              {[
                { value: "2 min", label: "O'rtacha buyurtma" },
                { value: "99%", label: "Mijozlar mamnun" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y: phoneY, rotate: phoneRotate }}
            className="flex justify-center transform-gpu will-change-transform"
          >
            <div className="relative">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 -z-10 translate-y-8 scale-90 rounded-[4rem] bg-gradient-to-r from-primary via-blue-500 to-secondary opacity-40 blur-2xl" />

              {/* Phone Frame */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-[650px] w-[320px] overflow-hidden rounded-[3.5rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl shadow-black/50 transform-gpu will-change-transform"
              >
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-3 z-20 h-8 w-28 -translate-x-1/2 rounded-full bg-black">
                  <div className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-green-500/50" />
                </div>

                {/* Screen Content */}
                <div className="h-full w-full overflow-hidden bg-gradient-to-br from-[#0057FF] via-[#0066FF] to-[#00C9C8]">
                  {/* Header */}
                  <div className="px-5 pt-16">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <motion.p 
                          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.8, 1, 0.8] }}
                          transition={shouldReduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                          className="text-sm opacity-80"
                        >
                          Salom! 
                        </motion.p>
                        <h3 className="text-xl font-bold">Aziz</h3>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md"
                      >
                        <MapPin className="h-4 w-4" />
                        <span>Chilanzar</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="mt-5 px-5">
                    <motion.div 
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 rounded-2xl bg-white/20 px-5 py-4 text-white/80 backdrop-blur-md"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm">Qidirish...</span>
                    </motion.div>
                  </div>

                  {/* Category Pills */}
                  <div className="mt-5 flex gap-3 overflow-x-auto px-5 pb-2">
                    {["Hammasi", "Qahva", "Sharbat", "Taom"].map((cat, i) => (
                      <motion.div
                        key={cat}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all ${
                          i === 0
                            ? "bg-white text-[#0057FF] shadow-white/25"
                            : "bg-white/20 text-white backdrop-blur-md"
                        }`}
                      >
                        {cat}
                      </motion.div>
                    ))}
                  </div>

                  {/* Menu Items */}
                  <div className="mt-5 h-full space-y-3 rounded-t-[2.5rem] bg-white p-5 pb-24 shadow-[0_-10px_50px_rgba(0,0,0,0.1)]">
                    <div className="mb-5 flex items-center justify-between">
                      <h4 className="text-lg font-bold text-gray-800">Ommabop</h4>
                      <span className="text-sm font-medium text-primary">Hammasi</span>
                    </div>

                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.15 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        <motion.div 
                          whileHover={{ rotate: 10 }}
                          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-blue-100 to-secondary/20 shadow-inner"
                        >
                          <item.icon className="h-7 w-7 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800">{item.name}</span>
                            {item.tag && (
                              <span className={`rounded-full ${item.tagColor} px-2.5 py-1 text-xs font-semibold text-white`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-500">{item.price} so'm</span>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.15, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-lg font-bold text-white shadow-lg shadow-primary/30"
                        >
                          +
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {/* Success Notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -right-20 top-28 rounded-2xl border border-green-100 bg-white p-4 shadow-2xl shadow-green-500/10 lg:-right-28"
              >
                <motion.div
                  animate={shouldReduceMotion ? { y: 0, rotate: 0 } : {
                    y: [-6, 6, -6],
                    rotate: [-1.5, 1.5, -1.5]
                  }}
                  transition={shouldReduceMotion ? undefined : {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-3 transform-gpu will-change-transform"
                >
                  <motion.div
                    animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.12, 1] }}
                    transition={shouldReduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30"
                  >
                    <Check className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">To'lov muvaffaqiyatli!</p>
                    <p className="text-base font-bold text-gray-800">28,000 so'm</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Time Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -left-16 bottom-44 rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-500/10 lg:-left-24"
              >
                <motion.div
                  animate={shouldReduceMotion ? { y: 0, rotate: 0 } : {
                    y: [6, -6, 6],
                    rotate: [1.5, -1.5, 1.5]
                  }}
                  transition={shouldReduceMotion ? undefined : {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-3 transform-gpu will-change-transform"
                >
                  <motion.div
                    animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
                    transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-primary shadow-lg shadow-blue-500/30"
                  >
                    <Clock className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Tayyor bo'lish</p>
                    <p className="text-base font-bold text-gray-800">10:30</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -right-8 bottom-32 rounded-2xl border border-yellow-100 bg-white px-4 py-3 shadow-2xl shadow-yellow-500/10 lg:-right-16"
              >
                <motion.div
                  animate={shouldReduceMotion ? { y: 0, x: 0 } : {
                    y: [-4, 4, -4],
                    x: [2, -2, 2]
                  }}
                  transition={shouldReduceMotion ? undefined : {
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-2 transform-gpu will-change-transform"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">4.9</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

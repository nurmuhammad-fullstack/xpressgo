"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, ShoppingBag, Store, Star } from "lucide-react"

function AnimatedCounter({ 
  value, 
  suffix = "",
  duration = 2 
}: { 
  value: number | string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || typeof value !== "number") return

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  if (typeof value === "string") {
    return <span ref={ref}>{value}{suffix}</span>
  }

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: Users,
    value: "Beta",
    suffix: " bosqich",
    label: "Erta foydalanuvchilar",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingBag,
    value: "Tez orada",
    suffix: "",
    label: "Buyurtmalar",
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Store,
    value: "Ochilmoqda",
    suffix: "",
    label: "Hamkorlar",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Star,
    value: "Yangi",
    suffix: "",
    label: "Reyting",
    color: "from-amber-400 to-orange-500"
  }
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Raqamlarda <span className="text-primary">XpressGo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Beta bosqichidamiz: dastlabki foydalanuvchilar va hamkorlarni qo'shish ustida ishlayapmiz.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-all hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity group-hover:opacity-5`} />
              
              {/* Icon */}
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>

              {/* Value */}
              <div className="mb-2 text-3xl font-bold text-foreground lg:text-4xl">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={stat.label === "O'rtacha reyting" ? 1 : 2}
                />
              </div>

              {/* Label */}
              <p className="text-muted-foreground">{stat.label}</p>

              {/* Decorative Element */}
              <div className={`absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl transition-all group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

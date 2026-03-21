"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contacts = [
  {
    title: "Telegram",
    href: "https://t.me/xpressgo_bot",
    label: "@xpressgo_bot",
  },
  {
    title: "Telefon",
    href: "tel:+998901234567",
    label: "+998 90 123 45 67",
  },
  {
    title: "Email",
    href: "mailto:hello@xpressgo.uz",
    label: "hello@xpressgo.uz",
  },
  {
    title: "Manzil",
    href: "https://maps.google.com/?q=Tashkent",
    label: "Toshkent, O'zbekiston",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,181,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(0,255,214,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[conic-gradient(at_20%_30%,#0ea5e9_0deg,#38bdf8_90deg,#22d3ee_180deg,#0ea5e9_270deg,#38bdf8_360deg)] blur-3xl" />
      <div className="container relative mx-auto px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
              Aloqa markazi
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight lg:text-5xl">
              Bir zumda bog'lanamiz,
              <br />
              hammasini onlayn hal qilamiz.
            </h2>
            <p className="max-w-2xl text-lg text-slate-200/85">
              Telegram, qo‘ng‘iroq yoki email — qaysi kanal qulay bo‘lsa, shu yerdan yozing. Ish vaqti: 07:00–23:00, biznes hamkorlarga ustuvor navbat.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://t.me/xpressgo_bot" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 rounded-full bg-white px-6 text-slate-950 shadow-xl shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:shadow-cyan-300/40">
                  Telegramdan yozish
                </Button>
              </Link>
              <Link href="mailto:hello@xpressgo.uz">
                <Button size="lg" variant="outline" className="h-12 rounded-full border-white/30 bg-white/5 px-6 text-white hover:bg-white/10">
                  Email yuborish
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="rounded-3xl border border-white/15 bg-white/8 p-7 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.8)] backdrop-blur-lg">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">Tezkor so'rov</h3>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">15 daqiqada javob</span>
              </div>
              <p className="mt-2 text-sm text-slate-200/80">Kontaktlaringizni qoldiring, manager darhol bog‘lanadi.</p>
              <form
                className="mt-4 space-y-4"
                action="mailto:hello@xpressgo.uz"
                method="POST"
                encType="text/plain"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input name="name" required placeholder="Ism" className="border-white/15 bg-white/8 text-white placeholder:text-slate-300" />
                  <Input name="phone" required placeholder="Telefon" className="border-white/15 bg-white/8 text-white placeholder:text-slate-300" />
                </div>
                <Input type="email" name="email" placeholder="Email (ixtiyoriy)" className="border-white/15 bg-white/8 text-white placeholder:text-slate-300" />
                <Textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Savolingiz yoki taklifingiz"
                  className="border-white/15 bg-white/8 text-white placeholder:text-slate-300"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-200/70">Yuborish mail klient orqali amalga oshadi.</span>
                  <Button type="submit" className="h-11 rounded-full bg-white px-6 text-slate-950 shadow-lg shadow-cyan-400/25 hover:-translate-y-0.5 hover:shadow-cyan-300/40 transition">
                    Yuborish
                  </Button>
                </div>
              </form>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {contacts.map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <p className="text-sm uppercase tracking-wide text-cyan-200/80">{item.title}</p>
                  <p className="mt-2 text-lg font-semibold">{item.label}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-200">
                    Bog'lanish
                    <span className="h-1 w-1 rounded-full bg-cyan-200" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

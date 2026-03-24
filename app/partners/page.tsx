import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Hamkorlar | XpressGo",
  description: "XpressGo bilan hamkorlik qiling: kafe va restoranlar uchun yangi savdo kanali va tezkor buyurtmalar.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Hamkorlar | XpressGo",
    description: "Kafelar va restoranlar uchun navbatni kamaytirib, onlayn buyurtma olishni boshlang.",
    url: "https://xpressgo.uz/partners",
  },
}

const steps = [
  { title: "Ro‘yxatdan o‘ting", text: "Telegram orqali yoki formani to‘ldirib, filiallaringizni kiritamiz." },
  { title: "Menyu integratsiyasi", text: "Menyuni 1 ish kuni ichida yuklab, narxlarni sinxron qilamiz." },
  { title: "Tez start", text: "Buyurtmalarni qabul qiling, xodimlarga 30 daqiqalik qo‘llanma yetarli." },
]

export default function PartnersPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Hamkorlarga
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Kafe va restoranlar uchun qo‘shimcha savdo kanali
          </h1>
          <p className="text-lg text-muted-foreground">
            XpressGo buyurtmalarni oldindan qabul qilish va navbatlarni kamaytirishga yordam beradi. Keling, bir kunda
            ishga tushiramiz.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/10 p-8">
          <h2 className="text-2xl font-semibold">Hamkorlikni boshlash</h2>
          <p className="mt-2 text-muted-foreground">
            Filial sonidan qat’i nazar, shartnoma va integratsiyani tezda tayyorlab beramiz.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="https://t.me/xpress_go_bot" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Telegramdan yozish</Button>
            </Link>
            <Link href="mailto:hello@xpressgo.uz">
              <Button size="lg" variant="outline">
                hello@xpressgo.uz
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

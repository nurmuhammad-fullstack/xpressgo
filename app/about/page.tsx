import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Biz haqimizda | XpressGo",
  description: "XpressGo — Toshkentda navbatsiz qahva va taom buyurtma qilish uchun mini-app. Jamoa, missiya va qadriyatlar bilan tanishing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Biz haqimizda | XpressGo",
    description: "Navbatsiz qahva va taom buyurtma xizmati ortidagi jamoa va qadriyatlar.",
    url: "https://xpressgo.uz/about",
  },
}

export default function AboutPage() {
  const values = [
    { title: "Tezlik", text: "Buyurtmalarni 2-3 daqiqada tayyorlashga intilamiz." },
    { title: "Ishonch", text: "Hamkor kafe va restoranlar bilan shaffof hamkorlik." },
    { title: "Quvvat", text: "Klik/Payme to‘lovlari va Telegram mini-app orqali oddiy jarayon." },
  ]

  return (
    <main className="bg-background">
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            XpressGo haqida
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Toshkentda navbatsiz qahva va taom buyurtmalarini tezlashtiramiz
          </h1>
          <p className="text-lg text-muted-foreground">
            XpressGo — Telegram mini-app sifatida boshlangan pre-order xizmati. Maqsadimiz kafe va restoranlar uchun
            qo‘shimcha savdo kanali yaratish, foydalanuvchilar uchun esa navbatni yo‘qotish.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/10 p-8">
          <h2 className="text-2xl font-semibold">Biz bilan bog‘laning</h2>
          <p className="mt-2 text-muted-foreground">
            Hamkorlik, media yoki savollar uchun yozing. 15 daqiqa ichida javob beramiz.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="https://t.me/xpressgo_bot" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Telegram bot</Button>
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

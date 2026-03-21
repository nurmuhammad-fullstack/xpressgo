import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { PhoneMockupSection } from "@/components/sections/phone-mockup"
import { B2BSection } from "@/components/sections/b2b-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/sections/footer"
import { ContactSection } from "@/components/sections/contact-section"
import Script from "next/script"

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "XpressGo qanday ishlaydi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "XpressGo - bu Telegram mini-app orqali ishlaydigan pre-order xizmati. Sevimli kafe yoki restorandan buyurtma berasiz, vaqtni tanlaysiz, Click yoki Payme orqali to\u2019laysiz va belgilangan vaqtda navbatsiz olib ketasiz."
        }
      },
      {
        "@type": "Question",
        "name": "Qaysi to'lov usullari mavjud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hozirda Click va Payme orqali to\u2019lash mumkin, tez orada boshqa usullar ham qo\u2019shiladi."
        }
      },
      {
        "@type": "Question",
        "name": "Buyurtmani qancha vaqt oldin berish kerak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimal vaqt 10 daqiqa. Buyurtma jarayonida mavjud vaqt oynalaridan qulayini tanlaysiz."
        }
      },
      {
        "@type": "Question",
        "name": "Buyurtmani bekor qilish mumkinmi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ha, tayyor bo\u2019lishidan kamida 5 daqiqa oldin bekor qilib, to\u2019liq qaytarib olasiz."
        }
      },
      {
        "@type": "Question",
        "name": "Qaysi shahar va kafelarda xizmat mavjud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hozirda Toshkent shahrida 120+ kafe va restoranda ishlaymiz, ro\u2019yxat haftasiga yangilanadi."
        }
      },
      {
        "@type": "Question",
        "name": "Biznes sifatida qanday qo'shilish mumkin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biznes bo\u2019lib qo\u2019shilish uchun \"Biznes uchun\" bo\u2019limidagi formani to\u2019ldiring yoki Telegram orqali bog\u2019laning, 24 soatda javob beramiz."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen">
      <Script
        id="faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <HeroSection />
      <StatsSection />
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <PhoneMockupSection />
      <section id="b2b">
        <B2BSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}

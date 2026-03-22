"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Send, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Bosh sahifa", href: "/" },
    { label: "Qanday ishlaydi", href: "#how-it-works" },
    { label: "Biznes uchun", href: "#b2b" },
    { label: "Hamkorlar", href: "/partners" },
    { label: "Biz haqimizda", href: "/about" },
    { label: "FAQ", href: "#faq" }
  ],
  company: [
    { label: "Aloqa", href: "#contact" },
    { label: "Telegram bot", href: "https://t.me/xpressgo_bot" },
    { label: "Instagram", href: "https://instagram.com/xpressgo" },
    { label: "Email", href: "mailto:hello@xpressgo.uz" }
  ],
  legal: [] as { label: string; href: string }[]
}

const socialLinks = [
  { icon: Send, label: "Telegram", href: "https://t.me/xpressgo_bot" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/xpressgo" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/998978285111" }
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/xgo-logo.png"
                alt="XGO"
                width={180}
                height={90}
                className="h-9 w-auto sm:h-10 lg:h-12"
              />
            </div>
            
            <p className="mb-6 text-muted-foreground">
              Toshkentda navbatsiz qahva va taom buyurtma qilish xizmati. 
              Telegram orqali tez va qulay.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Toshkent, O'zbekiston</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+998 97 828 51 11</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@xpressgo.uz</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm transition-all hover:bg-primary hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Product Links */}
              <div>
                <h4 className="mb-4 font-semibold text-foreground">Mahsulot</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="mb-4 font-semibold text-foreground">Kompaniya</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download CTA */}
              <div>
                <h4 className="mb-4 font-semibold text-foreground">Hoziroq boshlang</h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  Telegram orqali buyurtma berishni boshlang
                </p>
                <a
                  href="https://t.me/xpressgo_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Telegram Bot
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} XpressGo. Barcha huquqlar himoyalangan.
          </p>
          {footerLinks.legal.length > 0 && (
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Qanday ishlaydi", href: "#how-it-works" },
  { label: "Biznes uchun", href: "#b2b" },
  { label: "Hamkorlar", href: "/partners" },
  { label: "Biz haqimizda", href: "/about" },
  { label: "FAQ", href: "#faq" },
  { label: "Aloqa", href: "#contact" }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const updateScrollState = () => {
      frameId = null
      const nextIsScrolled = window.scrollY > 50
      setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled))
    }

    const handleScroll = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(updateScrollState)
    }

    updateScrollState()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 will-change-transform transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 shadow-lg backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/xgo-logo.png"
                alt="XGO"
                width={160}
                height={80}
                className="h-7 w-auto sm:h-8 lg:h-9"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="https://t.me/xpressgo_bot" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`h-11 rounded-full px-6 font-semibold transition-all ${
                    isScrolled
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-primary hover:bg-white/90"
                  }`}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Telegram botni ishga tushiring
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-lg p-2 lg:hidden ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-background/95 p-4 shadow-xl backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="https://t.me/xpressgo_bot" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="mt-4 h-12 w-full rounded-full bg-primary font-semibold text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Telegram botni ishga tushiring
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

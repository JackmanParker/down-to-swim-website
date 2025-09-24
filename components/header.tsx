"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Waves } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg white ">
              <Image src="/fishLogo.jpeg" alt="Down to Swim" width={64} height={64} />
            </div>
            <span className="text-xl font-bold text-foreground">Down to Swim</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/lessons" className="text-foreground hover:text-primary transition-colors">
              Lessons/Pricing
            </Link>
            <Link href="/instructors" className="text-foreground hover:text-primary transition-colors">
              Instructors
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book a Lesson</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/lessons" className="text-foreground hover:text-primary transition-colors">
                Lessons
              </Link>
              <Link href="/instructors" className="text-foreground hover:text-primary transition-colors">
                Instructors
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">Book a Lesson</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

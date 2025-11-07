"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  onRegisterClick: () => void
}

export default function Navigation({ onRegisterClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">#</span>
            </div>
            <span className="text-xl font-bold text-foreground">HackFest 2025</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#info" className="text-muted-foreground hover:text-foreground transition">
              Schedule
            </a>
            <a href="#scenarios" className="text-muted-foreground hover:text-foreground transition">
              Challenges
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
            <Button onClick={onRegisterClick} className="bg-primary hover:bg-accent text-primary-foreground">
              Register Now
            </Button>
          </div>
          <Button onClick={onRegisterClick} className="md:hidden bg-primary hover:bg-accent text-primary-foreground">
            Register
          </Button>
        </div>
      </div>
    </nav>
  )
}

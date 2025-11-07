"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onRegisterClick: () => void
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-secondary/30 border border-primary/50 rounded-full">
          <span className="text-sm text-primary">Join the Innovation Wave</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Build the Future at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">HackFest 2025</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of brilliant students for 24 hours of innovation, collaboration, and creation. Build amazing
          projects, win prizes, and connect with fellow developers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRegisterClick}
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground text-lg h-12 px-8"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary/50 text-lg h-12 px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Participants</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$25K</div>
            <p className="text-sm text-muted-foreground">Prize Pool</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <p className="text-sm text-muted-foreground">Duration</p>
          </div>
        </div>
      </div>
    </section>
  )
}

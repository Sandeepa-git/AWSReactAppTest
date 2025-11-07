"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import EventInfo from "@/components/event-info"
import Countdown from "@/components/countdown"
import Scenarios from "@/components/scenarios"
import Registration from "@/components/registration"
import Footer from "@/components/footer"

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation onRegisterClick={() => setShowRegistration(true)} />
      <Hero onRegisterClick={() => setShowRegistration(true)} />
      <EventInfo />
      <Countdown />
      <Scenarios />
      {showRegistration && <Registration onClose={() => setShowRegistration(false)} />}
      <Footer />
    </main>
  )
}

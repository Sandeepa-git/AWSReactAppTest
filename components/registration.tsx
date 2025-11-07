"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegistrationProps {
  onClose: () => void
}

export default function Registration({ onClose }: RegistrationProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    team: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: "", email: "", university: "", team: "" })
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Register for HackFest</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition text-2xl">
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Registration Confirmed!</h3>
            <p className="text-muted-foreground">Check your email for details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@university.edu"
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="university" className="text-foreground">
                University
              </Label>
              <Input
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Your University"
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="team" className="text-foreground">
                Team Name (Optional)
              </Label>
              <Input
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="Your team name"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground mt-6">
              Complete Registration
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

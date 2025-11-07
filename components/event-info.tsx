export default function EventInfo() {
  return (
    <section id="info" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Event Details</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border rounded-lg p-8 bg-background/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">When & Where</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Date</p>
                <p className="text-lg text-foreground font-semibold">March 15 - 16, 2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-lg text-foreground font-semibold">University Tech Center</p>
                <p className="text-sm text-muted-foreground">123 Innovation Drive</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Format</p>
                <p className="text-lg text-foreground font-semibold">In-Person & Online</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-8 bg-background/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">What to Expect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">24-hour continuous hackathon</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Free meals and refreshments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Mentorship from industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">Live judging and prize ceremony</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

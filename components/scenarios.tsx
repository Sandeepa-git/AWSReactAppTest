export default function Scenarios() {
  const challenges = [
    {
      title: "AI & Machine Learning",
      description:
        "Build intelligent applications using ML models. Create chatbots, recommendation systems, or predictive analytics tools.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description:
        "Create amazing web applications from scratch. Build the next big web platform or innovative SaaS product.",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description:
        "Develop cross-platform mobile applications. Create tools that solve real-world problems on iOS and Android.",
      icon: "📱",
    },
    {
      title: "Open Innovation",
      description:
        "Any project using any technology. Come up with creative ideas and build something you are passionate about.",
      icon: "💡",
    },
    {
      title: "Blockchain & Web3",
      description:
        "Explore decentralized technologies. Build DApps, smart contracts, or innovative blockchain solutions.",
      icon: "⛓️",
    },
    {
      title: "IoT & Hardware",
      description:
        "Connect the physical and digital worlds. Build IoT solutions using sensors, Arduino, or Raspberry Pi.",
      icon: "🔧",
    },
  ]

  return (
    <section id="scenarios" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Challenge Tracks</h2>
          <p className="text-lg text-muted-foreground">Choose your track or create your own</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-8 bg-background/50 hover:border-primary/50 hover:bg-background/80 transition duration-300"
            >
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import * as React from "react"

import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { MapPin, ChevronLeft, ChevronRight,Play, Pause, Star, Users, Calendar, Shield  } from "lucide-react"

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  const slides = [
    {
      title: "E-GUICHET",
      subtitle: "Votre plateforme de billetterie en ligne",
      description: "Révolutionnez la vente de billets avec notre solution complète et intuitive",
      features: [
        {
          title: "Simplifiez",
          description: "la vente de billets en ligne",
          color: "bg-gradient-to-br from-white/95 to-gray-50/95",
          textColor: "text-gray-800",
          icon: Star,
        },
        {
          title: "Personnalisez",
          description: "vos options de billetterie",
          color: "bg-gradient-to-br from-blue-500/95 to-blue-600/95",
          textColor: "text-white",
          icon: Users,
        },
        {
          title: "Suivez",
          description: "en temps réel les ventes et les statistiques",
          color: "bg-gradient-to-br from-blue-600/95 to-purple-600/95",
          textColor: "text-white",
          icon: Calendar,
        },
        {
          title: "Facilitez",
          description: "l'entrée à l'événement avec des codes QR",
          color: "bg-gradient-to-br from-purple-500/95 to-pink-500/95",
          textColor: "text-white",
          icon: Shield,
        },
      ],
      stats: [
        { label: "Événements créés", value: "10K+" },
        { label: "Billets vendus", value: "500K+" },
        { label: "Clients satisfaits", value: "98%" },
      ],
    },
    {
      title: "GESTION AVANCÉE",
      subtitle: "Outils professionnels pour vos événements",
      description: "Maximisez vos revenus avec des outils d'analyse et de gestion performants",
      features: [
        {
          title: "Analysez",
          description: "les données de vente en détail",
          color: "bg-gradient-to-br from-white/95 to-gray-50/95",
          textColor: "text-gray-800",
          icon: Star,
        },
        {
          title: "Optimisez",
          description: "vos stratégies de pricing",
          color: "bg-gradient-to-br from-green-500/95 to-emerald-600/95",
          textColor: "text-white",
          icon: Users,
        },
        {
          title: "Contrôlez",
          description: "l'accès avec validation mobile",
          color: "bg-gradient-to-br from-orange-500/95 to-red-500/95",
          textColor: "text-white",
          icon: Calendar,
        },
        {
          title: "Exportez",
          description: "vos rapports et statistiques",
          color: "bg-gradient-to-br from-purple-500/95 to-indigo-600/95",
          textColor: "text-white",
          icon: Shield,
        },
      ],
      stats: [
        { label: "Temps économisé", value: "75%" },
        { label: "ROI moyen", value: "+150%" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
    {
      title: "SUPPORT 24/7",
      subtitle: "Assistance complète pour votre succès",
      description: "Bénéficiez d'un accompagnement personnalisé à chaque étape",
      features: [
        {
          title: "Accompagnement",
          description: "personnalisé pour vos événements",
          color: "bg-gradient-to-br from-white/95 to-gray-50/95",
          textColor: "text-gray-800",
          icon: Star,
        },
        {
          title: "Formation",
          description: "complète sur la plateforme",
          color: "bg-gradient-to-br from-cyan-500/95 to-blue-600/95",
          textColor: "text-white",
          icon: Users,
        },
        {
          title: "Support",
          description: "technique disponible 24h/24",
          color: "bg-gradient-to-br from-blue-600/95 to-indigo-600/95",
          textColor: "text-white",
          icon: Calendar,
        },
        {
          title: "Maintenance",
          description: "et mises à jour automatiques",
          color: "bg-gradient-to-br from-indigo-500/95 to-purple-600/95",
          textColor: "text-white",
          icon: Shield,
        },
      ],
      stats: [
        { label: "Temps de réponse", value: "<2min" },
        { label: "Satisfaction", value: "4.9/5" },
        { label: "Disponibilité", value: "24/7" },
      ],
    },
  ]

  React.useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length, isPlaying])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-2xl transform rotate-12 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-green-400 rounded-2xl transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-pink-400 rounded-2xl transform rotate-45 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

   

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Feature Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {slides[currentSlide].features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className={`p-6 ${feature.color} backdrop-blur-sm border-0 shadow-xl ${feature.textColor} transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      transform: hoveredCard === index ? "scale(1.05) translateY(-5px)" : "scale(1)",
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${feature.textColor === "text-white" ? "bg-white/20" : "bg-blue-100"}`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${feature.textColor === "text-white" ? "text-white" : "text-blue-600"}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm opacity-90">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              {slides[currentSlide].stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Contactez-nous!
              </Button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-2xl text-white/90 mb-4 transition-all duration-700 font-medium">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-white/80 mb-8 transition-all duration-700 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start gap-3 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 h-3 bg-white rounded-full"
                      : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentSlide && (
                    <div
                      className="absolute top-0 left-0 h-full bg-white/80 rounded-full transition-all duration-6000 ease-linear"
                      style={{
                        width: isPlaying ? "100%" : "0%",
                        transitionDuration: isPlaying ? "6000ms" : "0ms",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 transition-all duration-300"
              >
                Voir la démo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 transition-all duration-300"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-white to-yellow-300 transition-all duration-300 ease-linear shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

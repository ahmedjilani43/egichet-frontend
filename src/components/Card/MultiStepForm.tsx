import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
import { ProgressBar } from "./ProgressBar"
import { CartStep } from "./CartStep"
import { InformationStep } from "./InformationStep"
import { PaymentStep } from "./PaymentStep"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const steps = [
  {
    id: 1,
    title: "Votre panier",
    icon: ShoppingCart,
    description: "Vérifiez vos événements",
  },
  {
    id: 2,
    title: "Vos informations",
    icon: User,
    description: "Informations personnelles",
  },
  {
    id: 3,
    title: "Paiement",
    icon: CreditCard,
    description: "Finaliser la commande",
  },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const {token} =useAuth();
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
    if (!token) {
      alert("Please log in to complete the purchase.");
      navigate("/signin")
      return;
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <CartStep />
      case 2:
        return <InformationStep />
      case 3:
        return <PaymentStep />
      default:
        return <CartStep />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-50 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-fuchsia-400/20 to-violet-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ProgressBar currentStep={currentStep} steps={steps} />

        <div className="mb-12 animate-in slide-in-from-bottom-4 duration-500">{renderStepContent()}</div>

        <div className="flex justify-between max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 h-12 px-8 rounded-xl border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </Button>

          {currentStep === steps.length ? (
            <Button className="h-12 px-8 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Finaliser la commande
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="flex items-center gap-2 h-12 px-8 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Suivant
              <ChevronRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
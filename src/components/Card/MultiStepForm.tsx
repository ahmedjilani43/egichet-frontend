"use client"
import { useState } from "react"
import { ShoppingCart, User, CreditCard, Check } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { CartStep } from "./CartStep"
import { InformationStep } from "./InformationStep"
import { PaymentStep } from "./PaymentStep"

const steps = [
  {
    id: 1,
    title: "Votre Panier",
    subtitle: "vérifier vos événements",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Vos Informations",
    subtitle: "Informations personnelles",
    icon: User,
  },
  {
    id: 3,
    title: "Paiement",
    subtitle: "Finaliser la Commande",
    icon: CreditCard,
  },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const { token } = useAuth()
  const navigate = useNavigate()

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
    if (!token) {
      alert("Please log in to complete the purchase.")
      navigate("/signin")
      return
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
        return (
          <CartStep
            prevStep={prevStep}
            nextStep={nextStep}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        )
      case 2:
        return (
          <InformationStep
            goNextStep={() => setCurrentStep(3)}
            prevStep={prevStep}
          />
        )
      case 3:
        return <PaymentStep />
      default:
        return (
          <CartStep
            prevStep={prevStep}
            nextStep={nextStep}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        )
    }
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src="/f1.png"
          alt="Card header background"
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-2">CARD</h1>
          <p className="text-lg opacity-90">You can view and check your card here</p>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => {
              const isCompleted = currentStep > step.id
              const isCurrent = currentStep === step.id
              const isPrevious = currentStep > step.id
              return (
                <div key={step.id} className="flex items-center relative z-10">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                        ${isPrevious || isCompleted
                          ? "border-secondary bg-secondary text-white"
                          : isCurrent
                            ? "border-secondary text-secondary bg-white"
                            : "border-gray-300 text-gray-400 bg-white"
                        }
                      `}
                    >
                      {isPrevious || isCompleted ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <span className="text-sm font-semibold">{step.id}</span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <h3
                        className={`text-sm font-medium ${isCurrent || isPrevious || isCompleted
                            ? "text-secondary"
                            : "text-gray-500"
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{step.subtitle}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-12 w-full h-0.5 -z-10">
                      <div
                        className={`h-full transition-all duration-300 ${isPrevious || isCompleted ? "bg-secondary" : "bg-gray-300"
                          }`}
                        style={{
                          width: `calc(100vw / ${steps.length} - 3rem)`,
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mb-12 animate-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto px-4">
        {renderStepContent()}
      </div>
    </div>
  )
}

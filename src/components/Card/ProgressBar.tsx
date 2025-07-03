import { Check } from "lucide-react"

interface Step {
  id: number
  title: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

interface ProgressBarProps {
  currentStep: number
  steps: Step[]
}

export function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="flex items-center justify-between relative px-8">
        <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full shadow-lg"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          />
        </div>

        {steps.map((step) => {
          const isActive = currentStep === step.id
          const isCompleted = currentStep > step.id
          const Icon = step.icon

          return (
            <div key={step.id} className="flex flex-col items-center relative z-10 group">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                  isCompleted
                    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 border-violet-400 text-white shadow-xl scale-105"
                    : isActive
                      ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 border-violet-400 text-white shadow-2xl scale-110"
                      : "bg-white border-slate-300 text-slate-400 shadow-md hover:shadow-lg hover:scale-105"
                } group-hover:shadow-xl`}
                style={isActive ? { boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" } : {}}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <Icon className="w-6 h-6" />
                )}
              </div>
              <div className="mt-4 text-center">
                <p
                  className={`text-sm font-semibold ${
                    isActive || isCompleted ? "text-slate-800" : "text-slate-500"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

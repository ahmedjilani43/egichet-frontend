import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, MessageSquare, RotateCcw, Ticket } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/AuthContext"

const SMSVerification = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()
  const { register } = useAuth()

  const userData = location.state?.userData || {}
  const phoneNumber = userData.phone || ""

  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (!phoneNumber) {
      navigate("/signup")
      return
    }
    inputRefs.current[0]?.focus()
  }, [phoneNumber, navigate])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newOtp = [...otp]

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i]
    }

    setOtp(newOtp)
    const nextIndex = Math.min(pastedData.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join("")

    if (otpString.length !== 6) return

    setIsVerifying(true)

    // Mock verification delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (otpString !== "123456") {
      toast({
        title: "Erreur",
        description: "Code de vérification invalide",
        variant: "destructive",
      })
      setOtp(["", "", "", "", "", ""])
      inputRefs.current[0]?.focus()
      setIsVerifying(false)
      return
    }

    try {
      await register({
        ...userData,
        phoneVerified: true,
      })

      toast({
        title: "Succès",
        description: "Compte créé avec succès !",
        variant: "default",
      })

      navigate("/signin")
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du compte",
        variant: "destructive",
      })
      console.error("Registration error:", err)
    }

    setIsVerifying(false)
  }

  const handleResend = async () => {
    setIsResending(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Code renvoyé",
      description: `Un nouveau code a été envoyé au ${phoneNumber}`,
      variant: "default",
    })

    setCountdown(60)
    setCanResend(false)
    setIsResending(false)
  }

  const isOtpComplete = otp.every((digit) => digit !== "")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              e-gichet
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vérification SMS</h1>
          <p className="text-gray-600">Confirmez votre numéro de téléphone</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Code de vérification</CardTitle>
            <CardDescription className="text-center">
              Nous avons envoyé un code de vérification à<br />
              <span className="font-semibold text-gray-900">{phoneNumber}</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="block text-center">Entrez le code à 6 chiffres</Label>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el
                      }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-12 h-12 text-center text-lg font-semibold bg-white border-gray-300 focus:border-blue-500"
                      disabled={isVerifying}
                    />
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium"
                size="lg"
                disabled={!isOtpComplete || isVerifying}
              >
                {isVerifying ? "Vérification..." : "Vérifier le code"}
              </Button>
            </form>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Vous n'avez pas reçu le code ?</p>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleResend}
                  disabled={!canResend || isResending}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {isResending ? "Envoi..." : canResend ? "Renvoyer le code" : `Renvoyer (${countdown}s)`}
                </Button>
              </div>

              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate("/signup")}
                  className="text-gray-600 hover:text-gray-800 font-medium"
                  disabled={isVerifying}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à l'inscription
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 text-center">
                <strong>Code de test :</strong> <code className="bg-blue-100 px-1 rounded">123456</code>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 font-medium text-sm">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SMSVerification

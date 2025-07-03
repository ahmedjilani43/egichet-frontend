import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { sendSMSVerification, verifyOTP } from "@/lib/smsService"

export const useSMSVerification = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const sendSMS = async (phoneNumber: string) => {
    setIsLoading(true)
    try {
      await sendSMSVerification(phoneNumber)
      toast({
        title: "Code envoyé",
        description: `Un code de vérification a été envoyé au ${phoneNumber}`,
        variant: "default",
      })
      return true
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le code SMS",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const verifySMS = async (phoneNumber: string, otp: string) => {
    setIsLoading(true)
    try {
      const isValid = await verifyOTP(phoneNumber, otp)
      if (!isValid) {
        toast({
          title: "Erreur",
          description: "Code de vérification invalide",
          variant: "destructive",
        })
      }
      return isValid
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la vérification",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    sendSMS,
    verifySMS,
    isLoading,
  }
}

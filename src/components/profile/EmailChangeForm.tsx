"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Lock } from "lucide-react"

export default function EmailChangeForm() {
  const [formData, setFormData] = useState({
    currentEmail: "",
    newEmail: "",
    confirmEmail: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.newEmail !== formData.confirmEmail) {
      toast({
        title: "Erreur",
        description: "Les adresses e-mail ne correspondent pas",
        variant: "destructive",
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.newEmail)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse e-mail valide",
        variant: "destructive",
      })
      return
    }

    console.log("Email change submitted:", formData)
    toast({
      title: "Succès",
      description: "Votre adresse e-mail a été modifiée avec succès",
    })

    setFormData({
      currentEmail: "",
      newEmail: "",
      confirmEmail: "",
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto border-none shadow-md rounded-xl bg-white">
      <CardHeader className="text-left">
        <CardTitle className="text-secondary text-lg font-thin text-left">
          Changer votre E-mail
        </CardTitle>
        <p className="text-sm text-gray-500 mt-2">
          Mettez à jour votre adresse e-mail pour recevoir vos notifications.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-2">
            <Label htmlFor="currentEmail" className="text-sm font-medium text-gray-500">
              Ancien e-mail
            </Label>
            <Input
              id="currentEmail"
              type="email"
              value={formData.currentEmail}
              onChange={(e) =>
                setFormData({ ...formData, currentEmail: e.target.value })
              }
              required
              placeholder="Ancien e-mail"
              className="border-secondary placeholder:text-gray-500 focus:border-secondary focus:ring-secondary bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newEmail" className="text-sm font-medium text-gray-500">
              Nouveau e-mail
            </Label>
            <Input
              id="newEmail"
              type="email"
              value={formData.newEmail}
              onChange={(e) =>
                setFormData({ ...formData, newEmail: e.target.value })
              }
              required
              placeholder="Nouveau e-mail"
              className="border-secondary placeholder:text-gray-500 focus:border-secondary focus:ring-secondary bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmEmail" className="text-sm font-medium text-gray-500">
              Confirmer nouveau e-mail
            </Label>
            <Input
              id="confirmEmail"
              type="email"
              value={formData.confirmEmail}
              onChange={(e) =>
                setFormData({ ...formData, confirmEmail: e.target.value })
              }
              required
              placeholder="Confirmer nouveau e-mail"
              className="border-secondary placeholder:text-gray-500 focus:border-secondary focus:ring-secondary bg-transparent"
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="flex items-center gap-2 bg-secondary text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors duration-200"
            >
              <Lock className="h-4 w-4" />
              VALIDER Votre Email
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

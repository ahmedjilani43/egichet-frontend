import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone } from "lucide-react"

interface InformationStepProps {
  goNextStep: () => void
  prevStep?: () => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postal: string
  country: string
}

interface FormErrors {
  [key: string]: string
}

export function InformationStep({ goNextStep }: InformationStepProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    country: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis"
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis"

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
    if (!formData.address.trim()) newErrors.address = "L'adresse est requise"
    if (!formData.city.trim()) newErrors.city = "La ville est requise"

    if (!formData.postal.trim()) {
      newErrors.postal = "Le code postal est requis"
    } else if (!/^\d{5}$/.test(formData.postal)) {
      newErrors.postal = "Le code postal doit contenir 5 chiffres"
    }

    if (!formData.country.trim()) newErrors.country = "Le pays est requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      goNextStep() 
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const baseInputClass =
    "border border-secondary rounded-[8px] h-11 px-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg shadow-md bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-secondary font-medium text-left">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`${baseInputClass} ${errors.firstName ? "border-red-500" : ""}`}
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-secondary font-medium text-left">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className={`${baseInputClass} ${errors.lastName ? "border-red-500" : ""}`}
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-secondary font-medium text-left">
            Email <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`${baseInputClass} pr-10 ${errors.email ? "border-red-500" : ""}`}
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
          </div>
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-secondary font-medium text-left">
            Phone <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`${baseInputClass} pr-10 ${errors.phone ? "border-red-500" : ""}`}
            />
            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
          </div>
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-secondary font-medium text-left">
            Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="Address"
            className={`${baseInputClass} ${errors.address ? "border-red-500" : ""}`}
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="postal" className="text-secondary font-medium text-left">
              Postal Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="postal"
              value={formData.postal}
              onChange={(e) => handleInputChange("postal", e.target.value)}
              placeholder="Postal Code"
              maxLength={5}
              className={`${baseInputClass} ${errors.postal ? "border-red-500" : ""}`}
            />
            {errors.postal && <p className="text-sm text-red-500">{errors.postal}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="country" className="text-secondary font-medium text-left">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              placeholder="Country"
              className={`${baseInputClass} ${errors.country ? "border-red-500" : ""}`}
            />
            {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-secondary font-medium text-left">
              City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="City"
              className={`${baseInputClass} ${errors.city ? "border-red-500" : ""}`}
            />
            {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 rounded-[8px]"
        >
          {isSubmitting ? "Validation en cours..." : "Continue to Payment"}
        </Button>
      </form>
    </div>
  )
}

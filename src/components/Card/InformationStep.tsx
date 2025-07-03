import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { User, MapPin, Phone, Mail } from "lucide-react"
import { Input } from "../ui/input"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postal: string
}

interface FormErrors {
  [key: string]: string
}

export function InformationStep() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis"
    }

    if (!formData.address.trim()) {
      newErrors.address = "L'adresse est requise"
    }

    if (!formData.city.trim()) {
      newErrors.city = "La ville est requise"
    }

    if (!formData.postal.trim()) {
      newErrors.postal = "Le code postal est requis"
    } else if (!/^\d{5}$/.test(formData.postal)) {
      newErrors.postal = "Le code postal doit contenir 5 chiffres"
    }

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

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50 pointer-events-none" />

        <CardHeader className="relative pb-8 pt-8">
          <CardTitle className="flex items-center gap-4 text-3xl font-bold">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl text-white shadow-lg">
              <User className="w-7 h-7" />
            </div>
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Vos informations
            </span>
          </CardTitle>
          <CardDescription className="text-slate-600 text-lg mt-2 ml-16">
            Renseignez vos informations personnelles et de livraison
          </CardDescription>
        </CardHeader>

        <CardContent className="relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-lg">
                  <User className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Informations personnelles</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 font-medium flex items-center gap-2">
                    Prénom <span className="text-red-500">*</span>
                  </Label>
                  <Input
  id="firstName"
  value={formData.firstName}
  onChange={(e) => handleInputChange("firstName", e.target.value)}
  placeholder="Jean"
  className={`h-12  p-0 border-2 rounded-xl transition-all duration-300 ${
    errors.firstName
      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
      : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
  }`}
  aria-invalid={!!errors.firstName}
  aria-describedby={errors.firstName ? "firstName-error" : undefined}
/>

                  {errors.firstName && (
                    <p id="firstName-error" className="text-sm text-red-600 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="">
                  <Label htmlFor="lastName" className="text-slate-700 font-medium flex items-center gap-2">
                    Nom <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Dupont"
                    className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                      errors.lastName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                    }`}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="text-sm text-red-600 mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="jean.dupont@email.com"
                  className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+33 1 23 45 67 89"
                  className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-red-600 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Adresse de livraison</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-slate-700 font-medium flex items-center gap-2">
                  Adresse <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="123 Rue de la Paix"
                  className={`min-h-[100px] border-2 rounded-xl transition-all duration-300 resize-none ${
                    errors.address
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                  }`}
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "address-error" : undefined}
                />
                {errors.address && (
                  <p id="address-error" className="text-sm text-red-600 mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-slate-700 font-medium flex items-center gap-2">
                    Ville <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Paris"
                    className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                      errors.city
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                    }`}
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" className="text-sm text-red-600 mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postal" className="text-slate-700 font-medium flex items-center gap-2">
                    Code postal <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="postal"
                    value={formData.postal}
                    onChange={(e) => handleInputChange("postal", e.target.value)}
                    placeholder="75001"
                    maxLength={5}
                    className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                      errors.postal
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:border-violet-500 focus:ring-violet-200"
                    }`}
                    aria-invalid={!!errors.postal}
                    aria-describedby={errors.postal ? "postal-error" : undefined}
                  />
                  {errors.postal && (
                    <p id="postal-error" className="text-sm text-red-600 mt-1">
                      {errors.postal}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Validation en cours..." : "Valider les informations"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

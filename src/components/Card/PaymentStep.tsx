import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/Card"
import { CreditCard } from "lucide-react"

export default function PaymentStep() {
  const [selectedCard, setSelectedCard] = useState("visa")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [ccv, setCcv] = useState("")
  const [cardholderName, setCardholderName] = useState("")

  const [cartItems, setCartItems] = useState<any[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems")
    if (storedItems) {
      setCartItems(JSON.parse(storedItems))
    }
  }, [])

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(" ") : v
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)
  }

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(" TND", ""))
    return acc + price * item.quantity
  }, 0)

  const serviceFees = cartItems.reduce((acc, item) => acc + 1 * item.quantity, 0) 
  const tva = 0.07 * subtotal 
  const total = subtotal + serviceFees + tva

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 font-poppins text-left">
      <div className="flex items-center gap-6">
        <Label className="text-sm font-medium text-secondary mb-0">
          Choisissez le type de votre Carte:
        </Label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="visa"
              checked={selectedCard === "visa"}
              onChange={(e) => setSelectedCard(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
             <img src="/visa.svg" alt="visa" className="h-10 w-auto object-contain" />
            
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="mastercard"
              checked={selectedCard === "mastercard"}
              onChange={(e) => setSelectedCard(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
             <img src="/mastercard.svg" alt="mastercard" className="h-10 w-auto object-contain" />
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="dinar"
              checked={selectedCard === "dinar"}
              onChange={(e) => setSelectedCard(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
             <img src="/d17.png" alt="d17" className="h-10 w-auto object-contain" />
           
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardNumber" className="text-sm font-medium text-secondary">
          Numéro de la carte
        </Label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="cardNumber"
            type="text"
            placeholder="1234 5678 1234 5678"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19}
            className="pl-10 h-12 border-secondary focus:border-secondary focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiration" className="text-sm font-medium text-secondary">
            Date d'expiration
          </Label>
          <Input
            id="expiration"
            type="month"
            placeholder="Choisir une date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="h-12 border-secondary focus:border-secondary focus:ring-secondary placeholder-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ccv" className="text-sm font-medium text-secondary">
            CCV
          </Label>
          <Input
            id="ccv"
            type="text"
            placeholder="123"
            value={ccv}
            onChange={(e) => setCcv(e.target.value.replace(/\D/g, "").slice(0, 4))}
            className="h-12 border-secondary focus:border-secondary focus:ring-secondary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardholderName" className="text-sm font-medium text-secondary">
          Nom sur la carte
        </Label>
        <Input
          id="cardholderName"
          type="text"
          placeholder="Jean DUPONT"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="h-12 border-secondary focus:border-secondary focus:ring-secondary"
        />
      </div>

      <div className="pt-4">
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-secondary mb-4 text-left">
              Récapitulatif de la commande
            </h3>
            <div className="space-y-2 text-sm">
              {cartItems.map((item) => {
                const price = parseFloat(item.price.replace(" TND", ""))
                return (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">{item.title} x{item.quantity}</span>
                    <span className="font-medium">{price * item.quantity} DT</span>
                  </div>
                )
              })}

              <div className="flex justify-between">
                <span className="text-gray-600">Service Fees</span>
                <span className="font-medium">{serviceFees} DT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">T.V.A</span>
                <span className="font-medium">{tva.toFixed(2)} DT</span>
              </div>
              <hr className="my-3 border-gray-300" />
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-secondary">Total</span>
                <span className="text-secondary">{total.toFixed(2)} DT</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        className="w-full h-12 bg-secondary hover:bg-blue-700 text-white font-medium rounded-lg"
        onClick={() => {
          console.log("Processing payment...", {
            cardType: selectedCard,
            cardNumber,
            expirationDate,
            ccv,
            cardholderName,
            cartItems,
            total,
          })
        }}
      >
        Continue to Payment
      </Button>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard } from "lucide-react"

export function PaymentStep() {
  return (
    <Card className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/90 border-0 shadow-2xl">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          <div className="p-2 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl text-white">
            <CreditCard className="w-6 h-6" />
          </div>
          Paiement
        </CardTitle>
        <CardDescription className="text-slate-600 text-lg">
          Finalisez votre commande en saisissant vos informations de paiement
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-3">
          <Label htmlFor="cardNumber" className="text-slate-700 font-semibold">
            Numéro de carte
          </Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            className="h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3 md:col-span-2">
            <Label className="text-slate-700 font-semibold">Date d'expiration</Label>
            <div className="grid grid-cols-2 gap-3">
              <Select>
                <SelectTrigger className="h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500">
                  <SelectValue placeholder="Mois" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500">
                  <SelectValue placeholder="Année" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={2024 + i} value={String(2024 + i)}>
                      {2024 + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="cvv" className="text-slate-700 font-semibold">
              CVV
            </Label>
            <Input
              id="cvv"
              placeholder="123"
              maxLength={3}
              className="h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="cardName" className="text-slate-700 font-semibold">
            Nom sur la carte
          </Label>
          <Input
            id="cardName"
            placeholder="Jean Dupont"
            className="h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-xl mb-6 text-slate-800">Récapitulatif de la commande</h4>
          <div className="space-y-4 text-base">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Sous-total</span>
              <span className="font-semibold text-slate-800">295.00 TND</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Livraison</span>
              <span className="font-semibold text-slate-800">0.00 TND</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">TVA</span>
              <span className="font-semibold text-slate-800">51.63 TND</span>
            </div>
            <div className="border-t border-slate-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-slate-800">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  346.63 TND
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
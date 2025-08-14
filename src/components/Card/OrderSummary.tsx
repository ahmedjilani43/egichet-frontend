import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderSummaryProps {
  subtotal: number
  shipping: number
}

export function OrderSummary({ subtotal, shipping }: OrderSummaryProps) {
  const total = subtotal + shipping

  return (
    <div className="w-full">
      <Card className="border-none w-full">
        <CardHeader className="pb-4 border-none">
          <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 border-none">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Sous-total</span>
              <span className="text-sm font-medium">{subtotal.toFixed(2)} TND</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Frais de livraison</span>
              <span className="text-sm font-medium">{shipping.toFixed(2)} TND</span>
            </div>
          </div>

          <Separator className="border-t border-gray-300" />

          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold text-orange-600">{total.toFixed(2)} TND</span>
          </div>
        </CardContent>
      </Card>
    </div>


  )
}

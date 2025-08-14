import { useCart } from "@/contexts/CartContext"
import { CartItem as CartItemComponent } from "./CartItem"
import { OrderSummary } from "./OrderSummary"
import { DiscountCode } from "./DiscountCode"
import { useState } from "react"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface CartStepProps {
  prevStep: () => void
  nextStep: () => void
  currentStep: number
  totalSteps: number
}

export function CartStep({ prevStep, nextStep, currentStep, totalSteps }: CartStepProps) {
  const { cartItems, updateQuantity, removeItem } = useCart()
  const [discountCode, setDiscountCode] = useState("")
  const [discountError, setDiscountError] = useState("")

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(" TND", ""))
    return sum + priceNum * item.quantity
  }, 0)

  const shipping = 0

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600 uppercase tracking-wide">
          <div className="col-span-5 text-left">Événement</div>
          <div className="col-span-2 text-left">Prix</div>
          <div className="col-span-2 text-left">Nombre de billets</div>
          <div className="col-span-2 text-left">Total</div>
          <div className="col-span-1 text-left text-secondary">Actions</div>
        </div>

        <div className="divide-y divide-slate-100">
          {cartItems.map((item) => (
            <CartItemComponent key={item.id} item={item} removeItem={removeItem} />
          ))}
          <DiscountCode
            discountCode={discountCode}
            setDiscountCode={setDiscountCode}
            discountError={discountError}
            setDiscountError={setDiscountError}
          />
        </div>
        <Separator className="border-t border-gray-300" />

        <OrderSummary subtotal={subtotal} shipping={shipping} />
      </div>

      <div className="flex gap-10 p-6 justify-center mt-6">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="bg-transparent border-slate-300 text-gray-600 hover:bg-gray-100 w-[356px] h-[45px] rounded-[16px]"
        >
          Cancel
        </Button>

        {currentStep === totalSteps ? (
          <Button
            variant="outline"
            className="bg-transparent border-slate-300 text-gray-600 hover:bg-gray-100 w-[356px] h-[50px] rounded-[16px]"
          >
            Finaliser la commande
          </Button>
        ) : (
          <Button
            onClick={nextStep}
            className="bg-secondary hover:bg-secondary text-font-inter text-white w-[356px] h-[45px] rounded-[16px]"
          >
            Check Out
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

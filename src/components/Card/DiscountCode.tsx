import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Input } from "../ui/input"

interface DiscountCodeProps {
  discountCode: string
  setDiscountCode: (code: string) => void
  discountError: string
  setDiscountError: (error: string) => void
}

export function DiscountCode({ discountCode, setDiscountCode, discountError, setDiscountError }: DiscountCodeProps) {
  const validateDiscount = () => {
    if (discountCode.trim() === "") {
      setDiscountError("Veuillez saisir un code de réduction.")
    } else if (discountCode !== "WELCOME10") {
      setDiscountError("Code de réduction invalide.")
    } else {
      setDiscountError("")
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
      <div className="flex items-center gap-4 max-w-md">
        <Input
          placeholder="Code de réduction"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 h-12 border-slate-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
        <Button
          onClick={validateDiscount}
          variant="outline"
          className="h-12 px-6 rounded-xl border-slate-300 hover:bg-slate-50 font-medium bg-transparent"
        >
          Valider
        </Button>
      </div>
      {discountError && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between">
          <span className="text-red-700 text-sm">{discountError}</span>
          <button onClick={() => setDiscountError("")} className="text-red-500 hover:text-red-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
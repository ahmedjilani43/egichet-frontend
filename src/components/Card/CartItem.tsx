import { Edit, Trash2 } from "lucide-react"
import { allEvents } from "../eventData"

interface CartItemProps {
  item: typeof allEvents[0] & { quantity: number }
  removeItem: (id: number) => void
}

export function CartItem({ item, removeItem }: CartItemProps) {
  const priceNum = parseFloat(item.price.replace(" TND", ""))

  return (
    <div className="grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-slate-50/50 transition-colors duration-200">
      <div className="col-span-5 flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 rounded-xl object-cover bg-slate-100"
        />
        <div>
          <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
          <p className="text-slate-500 text-sm mt-1">
            {item.artist} - {item.date} à {item.time}, {item.venue}, {item.location}
          </p>
        </div>
      </div>

      <div className="col-span-2 text-left">
        <span className="text-secondary font-medium">{item.price}</span>
      </div>

      <div className="col-span-2 flex items-center justify-start">
        <span className="text-secondary font-medium">
          {item.quantity}
        </span>
      </div>

      <div className="col-span-2 text-left">
        <span className="text-secondary  font-semibold text-lg">
          {(priceNum * item.quantity).toFixed(2)} TND
        </span>
      </div>

      <div className="col-span-1 text-left flex space-x-2">
        <button
          onClick={() => removeItem(item.id)}
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Delete item"
        >
          <Trash2 className="w-5 h-5" />
        </button>

        <button
          onClick={() => {/* action d’édition ici */ }}
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Edit item"
        >
          <Edit className="w-5 h-5" />
        </button>
      </div>

    </div>
  )
}

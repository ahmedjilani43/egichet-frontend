import { Minus, Plus, Trash2 } from "lucide-react"
import { allEvents } from "../eventData"

interface CartItemProps {
  item: typeof allEvents[0] & { quantity: number }
  updateQuantity: (id: number, change: number) => void
  removeItem: (id: number) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  const priceNum = parseFloat(item.price.replace(" TND", ""));

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

      <div className="col-span-2 text-center">
        <span className="text-slate-900 font-medium">{item.price}</span>
      </div>

      <div className="col-span-2 flex items-center justify-center">
        <div className="flex items-center border border-slate-200 rounded-lg">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 rounded-l-lg"
          >
            <Minus className="w-4 h-4 text-slate-600" />
          </button>
          <span className="w-12 h-10 flex items-center justify-center text-slate-900 font-medium border-x border-slate-200">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200 rounded-r-lg"
          >
            <Plus className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="col-span-2 text-center">
        <span className="text-slate-900 font-semibold text-lg">
          {(priceNum * item.quantity).toFixed(2)} TND
        </span>
      </div>

      <div className="col-span-1 text-center">
        <button
          onClick={() => removeItem(item.id)}
          className="w-10 h-10 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
}

export function OrderSummary({ subtotal, shipping }: OrderSummaryProps) {
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <div className="max-w-md ml-auto space-y-4">
        <div className="flex justify-between items-center text-slate-600">
          <span>Sous-total</span>
          <span className="font-medium">{subtotal.toFixed(2)} TND</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Frais de livraison</span>
          <span className="font-medium">{shipping.toFixed(2)} TND</span>
        </div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-slate-900">Total</span>
            <span className="text-2xl font-bold text-orange-600">{total.toFixed(2)} TND</span>
          </div>
        </div>
      </div>
    </div>
  );
}

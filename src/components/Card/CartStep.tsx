import { useCart } from "@/contexts/CartContext";
import { CartItem as CartItemComponent } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { DiscountCode } from "./DiscountCode";
import { useState } from "react";

export function CartStep() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState("");

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(" TND", ""));
    return sum + priceNum * item.quantity;
  }, 0);

  const totalItems = cartItems.length;
  const shipping = 0;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        Vous Avez {totalItems} {totalItems === 1 ? "article" : "articles"}
      </h2>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600 uppercase tracking-wide">
          <div className="col-span-5">Événement</div>
          <div className="col-span-2 text-center">Prix</div>
          <div className="col-span-2 text-center">Nombre de billets</div>
          <div className="col-span-2 text-center">Total</div>
          <div className="col-span-1 text-center">Actions</div>
        </div>
        <div className="divide-y divide-slate-100">
          {cartItems.map((item) => (
            <CartItemComponent
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>

      <DiscountCode
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        discountError={discountError}
        setDiscountError={setDiscountError}
      />

      <OrderSummary subtotal={subtotal} shipping={shipping} />
    </div>
  );
}

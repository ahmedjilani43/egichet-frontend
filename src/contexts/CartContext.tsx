import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {

  id: number;
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  price: string;
  quantity: number;
  category: string; 
  rating: string;
  isHot: boolean;   
}

interface CartContextType {
  cartItems: CartItem[];
  addItems: (items: CartItem[]) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const saveToStorage = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event("storage"));
  };

  const addItems = (items: CartItem[]) => {
    const updatedMap: Record<number, CartItem> = {};
    cartItems.forEach((item) => (updatedMap[item.id] = item));
    items.forEach((item) => {
      if (updatedMap[item.id]) {
        updatedMap[item.id].quantity += item.quantity;
      } else {
        updatedMap[item.id] = item;
      }
    });

    const updated = Object.values(updatedMap);
    setCartItems(updated);
    saveToStorage(updated);
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    saveToStorage(updated);
  };

  const updateQuantity = (id: number, change: number) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updated);
    saveToStorage(updated);
  };

  const clearCart = () => {
    setCartItems([]);
    saveToStorage([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItems, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

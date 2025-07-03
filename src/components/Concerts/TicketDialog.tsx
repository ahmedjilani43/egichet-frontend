import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Calendar, MapPin, Star, Plus, Minus, CreditCard } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Event, TicketType } from "../ConcertsSection";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface TicketDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedEvent: Event | null;
  ticketQuantities: Record<string, number>;
  setTicketQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  customerInfo: { name: string; email: string; phone: string };
  setCustomerInfo: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string }>>;
  getTicketTypes: (eventId: number) => TicketType[];
}

export const TicketDialog = ({
  isOpen,
  onOpenChange,
  selectedEvent,
  ticketQuantities,
  setTicketQuantities,
  customerInfo,
  setCustomerInfo,
  getTicketTypes,
}: TicketDialogProps) => {
  const { token } = useAuth();
  const Navigate = useNavigate()

  const selectedType = Object.entries(ticketQuantities).find(([_, qty]) => qty > 0)?.[0] || null;

  const updateQuantity = (ticketId: string, change: number) => {
    setTicketQuantities((prev) => {
      const newQty = Math.max(0, (prev[ticketId] || 0) + change);
      const newQuantities: Record<string, number> = {};

      if (newQty > 0) {
        newQuantities[ticketId] = newQty;
      }

      return newQuantities;
    });
  };

  const calculateTotal = () => {
    if (!selectedEvent) return 0;
    const ticketTypes = getTicketTypes(selectedEvent.id);
    return ticketTypes.reduce((total, ticket) => {
      const quantity = ticketQuantities[ticket.id] || 0;
      return total + ticket.price * quantity;
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0);
  };

  const handlePurchase = () => {
    if (!selectedEvent) return;
    if (!token) {
      alert("Please log in to complete the purchase.");
      Navigate("/signin")
      return;
    }

    const newTickets = getTicketTypes(selectedEvent.id).flatMap((ticket) => {
      const qty = ticketQuantities[ticket.id] || 0;
      if (qty === 0) return [];
      return {
        id: ticket.id,
        eventTitle: selectedEvent.title,
        ticketName: ticket.name,
        price: `${ticket.price} TND`,
        quantity: qty,
        image: selectedEvent.image,
        artist: selectedEvent.artist,
        date: selectedEvent.date,
        time: selectedEvent.time,
        venue: selectedEvent.venue,
        location: selectedEvent.location,
        title: selectedEvent.title,
      };
    });

    const stored = localStorage.getItem("cartItems");
    const existingItems = stored ? JSON.parse(stored) : [];

    const mergedItemsMap: Record<string, typeof newTickets[0]> = {};

    existingItems.forEach((item: typeof newTickets[0]) => {
      mergedItemsMap[item.id] = { ...item };
    });

    newTickets.forEach((item) => {
      if (mergedItemsMap[item.id]) {
        mergedItemsMap[item.id].quantity += item.quantity;
      } else {
        mergedItemsMap[item.id] = item;
      }
    });

    const mergedItems = Object.values(mergedItemsMap);

    localStorage.setItem("cartItems", JSON.stringify(mergedItems));
    onOpenChange(false);
    window.location.href = "/card";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm">
        {selectedEvent && (
          <>
            <DialogHeader className="pb-6">
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get Tickets - {selectedEvent.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-8">
              <div className="flex gap-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <img
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  className="w-32 h-32 object-cover rounded-xl shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">{selectedEvent.artist}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">
                        {selectedEvent.date} • {selectedEvent.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">
                        {selectedEvent.venue}, {selectedEvent.location}
                      </span>
                    </div>
                    {selectedEvent.rating && (
                      <div className="flex items-center gap-2 mt-3">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{selectedEvent.rating} rating</span>
                        <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-700">
                          {selectedEvent.category}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-bold text-2xl mb-6 text-gray-900">Select Your Tickets</h4>
                <div className="space-y-4">
                  {getTicketTypes(selectedEvent.id).map((ticket) => {
                    const qty = ticketQuantities[ticket.id] || 0;
                    const isDisabled = selectedType !== null && selectedType !== ticket.id;

                    return (
                      <div
                        key={ticket.id}
                        className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                          isDisabled
                            ? "border-gray-100 opacity-50 pointer-events-none"
                            : "hover:border-purple-200 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="font-bold text-lg text-gray-900">{ticket.name}</h5>
                            <p className="text-gray-600 mt-1">{ticket.description}</p>
                            <p className="text-sm text-purple-600 font-medium mt-2">
                              {ticket.available} tickets remaining
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-2xl text-purple-600">{ticket.price} TND</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(ticket.id, -1)}
                              disabled={qty === 0}
                              className="bg-white/80 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-bold text-lg">{qty}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(ticket.id, 1)}
                              disabled={qty >= ticket.available}
                              className="w-10 h-10 rounded-full border-2 hover:border-purple-300"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="font-bold text-xl text-gray-900">{qty * ticket.price} TND</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {getTotalTickets() > 0 && (
                <>
                  <Separator />

                  <div>
                    <h4 className="font-bold text-2xl mb-6 text-gray-900">Your Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your full name"
                          className="h-12 rounded-xl border-2 focus:border-purple-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter your email"
                          className="h-12 rounded-xl border-2 focus:border-purple-300"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="Enter your phone number"
                          className="h-12 rounded-xl border-2 focus:border-purple-300"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-bold text-2xl mb-6 text-gray-900">Order Summary</h4>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 space-y-4">
                      {getTicketTypes(selectedEvent.id).map((ticket) => {
                        const quantity = ticketQuantities[ticket.id] || 0;
                        if (quantity === 0) return null;
                        return (
                          <div key={ticket.id} className="flex justify-between items-center">
                            <span className="font-medium">
                              {ticket.name} × {quantity}
                            </span>
                            <span className="font-bold">{quantity * ticket.price} TND</span>
                          </div>
                        );
                      })}
                      <Separator />
                      <div className="flex justify-between items-center font-bold text-xl">
                        <span>Total ({getTotalTickets()} tickets)</span>
                        <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {calculateTotal()} TND
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={handlePurchase}
                    disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                  >
                    <CreditCard className="w-6 h-6 mr-3" />
                    Complete Purchase - {calculateTotal()} TND
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

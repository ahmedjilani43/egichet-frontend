
import React from "react";
import { Calendar, Clock, Minus, Plus, CreditCard } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Event, TicketType } from "../ConcertsSection";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface Props {
    selectedEvent: Event;
    ticketQuantities: Record<string, number>;
    setTicketQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
    customerInfo: { name: string; email: string; phone: string };
    setCustomerInfo: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string }>>;
    getTicketTypes: (eventId: number) => TicketType[];
}

export const TicketPurchaseSection = ({
    selectedEvent,
    ticketQuantities,
    setTicketQuantities,
    customerInfo,
    setCustomerInfo,
    getTicketTypes,
}: Props) => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const { addItems } = useCart();

    const selectedType = Object.entries(ticketQuantities).find(([, qty]) => qty > 0)?.[0] || null;

    const updateQuantity = (ticketId: string, change: number) => {
        setTicketQuantities((prev) => {
            const newQty = Math.max(0, (prev[ticketId] || 0) + change);
            const newQuantities: Record<string, number> = {};
            if (newQty > 0) newQuantities[ticketId] = newQty;
            return newQuantities;
        });
    };

    const getBasePrice = () => {
        return Number(selectedEvent.price.replace(/[^\d]/g, "")) || 0;
    };

    const getTicketExtra = (ticketName: string) => {
        return ticketName.toLowerCase() === "vip" ? 30 : 0;
    };

    const calculateTotal = () => {
        const basePrice = getBasePrice();
        return Object.entries(ticketQuantities).reduce((sum, [ticketId, qty]) => {
            if (qty === 0) return sum;
            const ticket = getTicketTypes(selectedEvent.id).find(t => t.id === ticketId);
            if (!ticket) return sum;
            const ticketPrice = basePrice + getTicketExtra(ticket.name);
            return sum + ticketPrice * qty;
        }, 0);
    };

    const getTotalTickets = () => Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0);

    const handlePurchase = () => {
        if (!token) {
            alert("Please log in to complete the purchase.");
            navigate("/signin");
            return;
        }

        const basePrice = getBasePrice();

        const newTickets = getTicketTypes(selectedEvent.id).flatMap((ticket) => {
            const qty = ticketQuantities[ticket.id] || 0;
            if (qty === 0) return [];

            const ticketPrice = basePrice + getTicketExtra(ticket.name);

            return {
                id: ticket.id,
                title: selectedEvent.title,
                artist: selectedEvent.artist,
                date: selectedEvent.date,
                time: selectedEvent.time,
                venue: selectedEvent.venue,
                location: selectedEvent.location,
                image: selectedEvent.image,
                price: `${ticketPrice} TND`,
                quantity: qty,
                category: selectedEvent.category ?? "N/A",
                rating: selectedEvent.rating ?? "N/A",
                isHot: selectedEvent.isHot ?? false,
            };
        });

        addItems(newTickets);
        navigate("/card");
    };

    const basePrice = getBasePrice();

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left border-b border-gray-300 pb-2">Date and Time</h2>
                <div className="flex items-center gap-4 mb-4 text-xl">
                    <Calendar className="w-7 h-7 text-indigo-600" />
                    <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                    <Clock className="w-7 h-7 text-indigo-600" />
                    <span>{selectedEvent.time}</span>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-left border-b border-gray-300 pb-2">
                    Sélectionnez votre Ticket
                </h2>

                {getTicketTypes(selectedEvent.id).map((ticket) => {
                    const qty = ticketQuantities[ticket.id] || 0;
                    const isDisabled = selectedType !== null && selectedType !== ticket.id;
                    const ticketPrice = basePrice + getTicketExtra(ticket.name);

                    return (
                        <div
                            key={ticket.id}
                            className={`p-6 mb-4 rounded-2xl ${isDisabled ? "opacity-50 pointer-events-none" : "hover:shadow-lg"}`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <img src="/tikcet.png" className="w-[20px] h-[20px]" />
                                    <span className="font-medium text-gray-900 text-lg">{ticket.name}</span>
                                </div>
                                <span className="text-indigo-600 font-semibold text-lg">{ticketPrice} Dt</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 text-left">{ticket.description}</p>
                            <p className="text-xs text-secondary text-left p-2">{ticket.available} Tickets Restants</p>

                            <div className="flex items-center justify-between border border-secondary p-2 rounded-[12px]">
                                <span className="text-sm font-medium p-2">{qty > 0 ? qty : "Ticket Number"}</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateQuantity(ticket.id, -1)}
                                        className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-[12px] hover:bg-gray-50"
                                        disabled={qty === 0}
                                    >
                                        <Minus className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={() => updateQuantity(ticket.id, 1)}
                                        className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-[12px] hover:bg-gray-50"
                                        disabled={qty >= ticket.available}
                                    >
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            {getTotalTickets() > 0 && (
                <div className="space-y-6">
                    <div className="space-y-3">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            value={customerInfo.name}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        />
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        />
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            value={customerInfo.phone}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        />
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-2xl space-y-3">
                        {getTicketTypes(selectedEvent.id).map((ticket) => {
                            const qty = ticketQuantities[ticket.id] || 0;
                            const ticketPrice = basePrice + getTicketExtra(ticket.name);
                            return qty > 0 ? (
                                <div key={ticket.id} className="flex justify-between text-lg font-semibold">
                                    <span>{ticket.name} × {qty}</span>
                                    <span>{ticketPrice * qty} Dt</span>
                                </div>
                            ) : null;
                        })}
                        <div className="flex justify-between font-bold text-xl">
                            <span>Total ({getTotalTickets()} tickets)</span>
                            <span>{calculateTotal()} Dt</span>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                        onClick={handlePurchase}
                        disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                    >
                        <CreditCard className="w-6 h-6" />
                        Complete Purchase - {calculateTotal()} Dt
                    </Button>
                </div>
            )}
        </div>
    );
};

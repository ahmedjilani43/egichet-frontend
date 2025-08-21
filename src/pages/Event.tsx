import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { TicketPurchaseSection } from "@/components/Concerts/TicketPurchaseSection";
import { Event, TicketType } from "@/components/ConcertsSection";
import { EventSection } from "@/components/EventSection";

export default function EventPage() {
    const { id } = useParams<{ id: string }>();
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [ticketQuantities, setTicketQuantities] = useState<Record<string, number>>({});
    const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", phone: "" });

    const ticketTypes: TicketType[] = [
        { id: "standard", name: "Standard", price: 30, available: 30, description: "Accès standard" },
        { id: "vip", name: "VIP", price: 70, available: 30, description: "Accès VIP avec boissons offertes, Service optimal" },
    ];

    useEffect(() => {
        const storedEvent = localStorage.getItem("selectedEvent");
        if (storedEvent) {
            const event: Event = JSON.parse(storedEvent);
            if (event.id === Number(id)) {
                setSelectedEvent(event);
            }
        }
    }, [id]);

    if (!selectedEvent) {
        return <p className="text-center py-20 text-lg text-muted">Event not found</p>;
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="relative w-full h-[700px]">
                <img
                    src="/xmas.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Christmas"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-6">{selectedEvent.title.toUpperCase()}</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Artist: {selectedEvent.artist} | Category: {selectedEvent.category} | Price: {selectedEvent.price}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <TicketPurchaseSection
                            selectedEvent={selectedEvent}
                            ticketQuantities={ticketQuantities}
                            setTicketQuantities={setTicketQuantities}
                            customerInfo={customerInfo}
                            setCustomerInfo={setCustomerInfo}
                            getTicketTypes={() => ticketTypes}
                        />
                    </div>

                    <div className="flex-1 p-8 ">
                        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Location</h3>
                        <div className="flex items-center gap-4 mb-6 text-lg">
                            <MapPin className="w-6 h-6 text-primary" />
                            <span>{selectedEvent.location}</span>
                        </div>
                        <div className="w-full h-[500px] rounded-2xl relative overflow-hidden">
                            <img
                                src="/maps.png"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-[34px] font-semibold uppercase text-[var(--color-primary)] text-center mb-12 font-poppins" > Other events you may like </span>
            <EventSection></EventSection>
        </div>
    );
}

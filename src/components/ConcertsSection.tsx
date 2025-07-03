import * as React from "react";
import { allEvents } from "./eventData";
import { EventSearch } from "./Concerts/EventSearch";
import { CategoryFilter } from "./Concerts/CategoryFilter";
import { EventList } from "./Concerts/EventList";
import { TicketDialog } from "./Concerts/TicketDialog";
import { EventHeader } from "./Concerts/EventHeader";

export interface Event {
  id: number;
  title: string;
  artist: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  image?: string;
  rating?: string;
  category: string;
  isHot?: boolean;
  price: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
}

export const ConcertsSection = () => {
  const categories = ["All", "Musique", "Danse", "Jazz", "Rock", "Pop", "Électro"];

  const getTicketTypes = (eventId: number): TicketType[] => {
    const basePrice = Number.parseInt(allEvents.find((e) => e.id === eventId)?.price.replace(" TND", "") || "50");
    return [
      {
        id: "general",
        name: "General Admission",
        price: basePrice,
        description: "Standard entry to the event",
        available: 150,
      },
      {
        id: "vip",
        name: "VIP Experience",
        price: Math.round(basePrice * 1.8),
        description: "Premium seating, complimentary drinks, meet & greet",
        available: 25,
      },
      {
        id: "premium",
        name: "Premium Seating",
        price: Math.round(basePrice * 1.4),
        description: "Reserved seating in premium section",
        available: 75,
      },
    ];
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [ticketQuantities, setTicketQuantities] = React.useState<Record<string, number>>({});
  const [customerInfo, setCustomerInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const filteredEvents = allEvents.filter((event: Event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleGetTickets = (event: Event) => {
    setSelectedEvent(event);
    setTicketQuantities({});
    setCustomerInfo({ name: "", email: "", phone: "" });
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <EventHeader />
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <EventSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <EventList
          filteredEvents={filteredEvents}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSelectedCategory={setSelectedCategory}
          onGetTickets={handleGetTickets}
        />
        <TicketDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedEvent={selectedEvent}
          ticketQuantities={ticketQuantities}
          setTicketQuantities={setTicketQuantities}
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
          getTicketTypes={getTicketTypes}
        />
      </div>
    </section>
  );
};
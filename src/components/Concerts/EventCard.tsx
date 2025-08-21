import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Event } from "../ConcertsSection";

interface EventCardProps {
  event: Event;
  onGetTickets?: (event: Event) => void;
  isHot?: boolean;
}

export const EventCard = ({ event,  isHot = false }: EventCardProps) => {
  const navigate = useNavigate();

   const handleGetTickets = () => {
    localStorage.setItem("selectedEvent", JSON.stringify(event));
    navigate(`/event/${event.id}?openDialog=true`);
  };

  return (
    <Card className="overflow-hidden border-0 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardContent className="p-4 text-left">
        <h3 className="text-lg font-semibold text-primary mb-1 flex items-center gap-2 line-clamp-2">
          {event.title}
          {event.soldout ? (
            <img 
              src="/Asset 13.svg" 
              alt="Sold Out"
              className="ml-auto w-20 h-auto object-contain"
            />
          ) : (
            isHot && (
              <>
                <span className="ml-auto flex items-center gap-1 rounded-full px-2 py-1 text-ms font-poppins text-third">
                  HOT EVENT
                </span>
                <img 
                  src="/hot.svg" 
                  alt="Hot Event" 
                  className="w-6 h-6"
                />
              </>
            )
          )}
        </h3>
        <p className="text-sm text-secondary hover:bg-secondary/10 mb-2 text-left">
          {event.artist}
        </p>
        <div className="flex items-center gap-2 text-secondary hover:bg-secondary/10 text-sm mb-4 text-left">
          <Calendar className="w-4 h-4" />
          <span>{event.date} • {event.time}</span>
        </div>
        <div className="text-secondary hover:bg-secondary/10 text-sm mb-1 text-left">
          {event.venue}, {event.location}
        </div>
        <p className="font-bold text-secondary text-ms text-left">STARTING FROM</p>
        <div className="flex items-center justify-between text-left">
          <span className="font-bold text-secondary text-2xl">{event.price}</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="w-full mt-4 bg-white hover:bg-white hover:text-secondary hover:border-white text-left"
          onClick={handleGetTickets}
          disabled={event.soldout}
        >
          {event.soldout ? "Sold Out" : "Get Tickets"}
        </Button>
      </CardContent>
    </Card>
  );
};
import * as React from "react";
import { MoveRight, Search } from "lucide-react";
import { Event } from "../ConcertsSection";
import { EventCard } from "./EventCard";
import { Button } from "../ui/button";

interface HotEventsProps {
    filteredEvents: Event[];
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    onGetTickets: (event: Event) => void;
}

export const HotEvents = ({
    filteredEvents,
    searchTerm,
    setSearchTerm,
    setSelectedCategory,
    onGetTickets,
}: HotEventsProps) => {
    const [showAll, setShowAll] = React.useState(false);

    const eventsToShow = showAll ? filteredEvents : filteredEvents.slice(0, 3);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            {searchTerm && (
                <div className="text-center mb-8">
                    <p className="text-gray-600">
                        Found <span className="font-semibold text-secondary">{filteredEvents.length}</span> events
                        {searchTerm && ` for "${searchTerm}"`}
                    </p>
                </div>
            )}

            {filteredEvents.length > 0 ? (
                <>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventsToShow.map((event) => (
                            <EventCard key={event.id} event={event} onGetTickets={onGetTickets} isHot />
                        ))}
                    </div>

                    {filteredEvents.length > 3 && (
                        <div className="text-center mt-6">
                            <Button
                                className="bg-third text-white px-8 py-4 rounded-full flex items-center gap-3 justify-center mx-auto text-lg font-medium min-w-[220px]"
                                onClick={() => setShowAll((prev) => !prev)}
                            >
                                {showAll ? "Show Less" : "Voir Plus"}
                                <MoveRight className="w-5 h-5 flex-none" />
                            </Button>
                        </div>

                    )}

                </>
            ) : (
                <div className="col-span-full text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search terms or browse all categories</p>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("All");
                        }}
                        className="bg-third hover:bg-white hover:text-secondary hover:border-white"
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
        </section>
    );
};

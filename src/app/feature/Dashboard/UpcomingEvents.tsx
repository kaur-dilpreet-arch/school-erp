// src/components/UpcomingEvents.tsx
import React from 'react';

interface IEvent {
    title: string;
    date: string;
    day: string;
    description: string;
}

interface IUpcomingEvents {
    events: IEvent[];
}

const UpcomingEvents: React.FC<IUpcomingEvents> = ({ events }) => {
    return (
        <div className="max-w-lg bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-black-800 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className={` ${(index < events.length - 1) ? "border-b" : ""} pb-4`}>
                        <div className="flex flex-row justify-between">
                            <div>
                                <h3 className="font-medium text-gray-800">{event.title}</h3>
                                <p className="text-sm text-gray-500">{event.description}</p>
                            </div>
                            <div>
                                <p className="text-sm text-black-500">{event.date}</p>
                                <p className="text-sm text-gray-500">{event.day}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;

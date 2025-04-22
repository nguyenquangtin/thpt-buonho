import React, { useState } from 'react';
import { events } from '../../data/mockData';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('2025-07-15');

  const dayEvents = events.filter(event => event.date === selectedDay);
  
  return (
    <section id="events" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Event Schedule
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for three days of reunion activities. From casual meetups to formal celebrations, 
            we've planned an unforgettable experience.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          <button
            className={`px-6 py-3 rounded-full font-medium transition-colors mb-2 ${
              selectedDay === '2025-07-15'
                ? 'bg-indigo-700 text-white'
                : 'bg-white text-indigo-700 hover:bg-indigo-100'
            }`}
            onClick={() => setSelectedDay('2025-07-15')}
          >
            <Calendar className="inline-block w-4 h-4 mr-2" />
            Day 1 (July 15)
          </button>
          <button
            className={`px-6 py-3 rounded-full font-medium transition-colors mb-2 ${
              selectedDay === '2025-07-16'
                ? 'bg-indigo-700 text-white'
                : 'bg-white text-indigo-700 hover:bg-indigo-100'
            }`}
            onClick={() => setSelectedDay('2025-07-16')}
          >
            <Calendar className="inline-block w-4 h-4 mr-2" />
            Day 2 (July 16)
          </button>
          <button
            className={`px-6 py-3 rounded-full font-medium transition-colors mb-2 ${
              selectedDay === '2025-07-17'
                ? 'bg-indigo-700 text-white'
                : 'bg-white text-indigo-700 hover:bg-indigo-100'
            }`}
            onClick={() => setSelectedDay('2025-07-17')}
          >
            <Calendar className="inline-block w-4 h-4 mr-2" />
            Day 3 (July 17)
          </button>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dayEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {event.image && (
                  <div 
                    className="md:col-span-2 h-48 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  ></div>
                )}
                <div className={`p-6 ${event.image ? 'md:col-span-3' : 'md:col-span-5'}`}>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{event.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-2 px-4 rounded-full transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Register for Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
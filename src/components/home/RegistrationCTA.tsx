import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const RegistrationCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Register for the Reunion</h2>
              <p className="text-lg opacity-90">
                Secure your spot at our 20-year reunion celebration! Register today to reconnect, 
                reminisce, and create new memories with your classmates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">July 15-17, 2025</h3>
                  <p className="opacity-80">Mark your calendar</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">Krong Ana</h3>
                  <p className="opacity-80">Our hometown</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">215 Classmates</h3>
                  <p className="opacity-80">Let's reunite</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-400 text-indigo-900 inline-block px-4 py-2 rounded-full mb-6">
                <span className="font-bold">Early Bird Registration:</span> $75 until March 1, 2025
              </div>
              
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
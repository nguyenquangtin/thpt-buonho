import React from 'react';
import { Users, CalendarDays, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Our 20-Year Reunion
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us as we celebrate two decades since we walked the halls of Krong Ana High School. 
            Reconnect with old friends and create new memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Reconnect</h3>
            <p className="text-gray-600">
              Find old friends, share stories, and see where life has taken your classmates over the past 20 years.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Celebrate</h3>
            <p className="text-gray-600">
              Enjoy a weekend full of events designed to celebrate our shared history and the journeys we've taken.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Remember</h3>
            <p className="text-gray-600">
              Return to our alma mater, visit old hangouts, and reminisce about the good old days of high school.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-indigo-900 text-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">About Our Class</h3>
              <p className="mb-4">
                The Class of 2005 was known for its school spirit, academic achievements, and championship sports teams. 
                As we graduated, we set out to make our mark on the world.
              </p>
              <p className="mb-4">
                Now, 20 years later, our classmates have become doctors, engineers, teachers, artists, entrepreneurs, 
                parents, and so much more. It's time to come together to celebrate our accomplishments.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">215</span>
                  <span className="text-sm">Graduates</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">28</span>
                  <span className="text-sm">Countries</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">20</span>
                  <span className="text-sm">Years</span>
                </div>
              </div>
            </div>
            <div 
              className="h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { newsItems } from '../../data/mockData';

const News: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Updates
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Stay informed about all the reunion plans and news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-indigo-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              {item.image && (
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              )}
              <div className="p-6">
                <div className="text-amber-300 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-80 mb-4">{item.content}</p>
                <button className="text-amber-300 hover:text-amber-400 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 opacity-80">
            Want to receive reunion updates directly to your inbox?
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
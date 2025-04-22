import React from 'react';
import { memoryPosts } from '../../data/mockData';
import { MessageCircle, Heart } from 'lucide-react';

const MemoryWall: React.FC = () => {
  return (
    <section id="memories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Memory Wall
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your favorite high school memories and reconnect through stories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Share Your Memory</h3>
            <textarea
              className="w-full p-4 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
              rows={4}
              placeholder="What's your favorite high school memory?"
            ></textarea>
            <div className="flex justify-between items-center">
              <div>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2">
                  Add Photo
                </button>
              </div>
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Post Memory
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {memoryPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.alumniImage}
                    alt={post.alumniName}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-indigo-900">{post.alumniName}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Memory"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 px-8 rounded-full transition-colors">
            Load More Memories
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemoryWall;
import React, { useState } from 'react';
import { alumni } from '../../data/mockData';
import { Search, MapPin, Briefcase, Facebook, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const filteredAlumni = alumni.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFlip = (id: string) => {
    setFlippedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="alumni" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Danh Sách Cựu Học Sinh
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kết nối lại với bạn học và xem họ đang ở đâu. Nhấp vào thẻ để xem thêm chi tiết.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full p-4 pl-10 text-sm text-gray-900 bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Tìm kiếm theo tên, nghề nghiệp hoặc địa điểm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Alumni cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlumni.map((person) => (
            <div
              key={person.id}
              className={`flip-card h-[28rem] perspective cursor-pointer`}
              onClick={() => toggleFlip(person.id)}
            >
              <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${flippedCards.includes(person.id) ? 'rotate-y-180' : ''
                  }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden bg-white">
                  <div
                    className="h-72 bg-cover bg-center"
                    style={{ backgroundImage: `url(${person.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{person.name}</h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Briefcase className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{person.profession}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{person.location}</span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">Nhấp để xem thêm</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rounded-xl shadow-lg bg-indigo-800 text-white p-6 rotate-y-180">
                  <h3 className="text-xl font-bold mb-4">{person.name}</h3>
                  <div
                    className="mb-4 text-gray-200 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: person.bio }}
                  />

                  <div className="mt-auto">
                    <h4 className="text-amber-300 font-medium mb-2">Kết nối với {person.name.split(' ')[3]}</h4>
                    <div className="flex space-x-3">
                      {person.socialLinks?.linkedin && (
                        <a href={person.socialLinks.linkedin} className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {person.socialLinks?.facebook && (
                        <a href={person.socialLinks.facebook} className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {person.socialLinks?.twitter && (
                        <a href={person.socialLinks.twitter} className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {person.socialLinks?.instagram && (
                        <a href={person.socialLinks.instagram} className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {person.socialLinks?.website && (
                        <a href={person.socialLinks.website} className="hover:text-amber-300" target="_blank" rel="noopener noreferrer">
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <p className="text-sm text-indigo-200">Nhấp để lật lại</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Tham Gia Danh Sách
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniDirectory;

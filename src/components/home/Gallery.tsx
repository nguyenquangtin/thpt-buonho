import React, { useState } from 'react';
import { galleryImages } from '../../data/mockData';
import { X } from 'lucide-react';
import Masonry from 'react-masonry-css';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Hành Trình Kỷ Niệm
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cùng ngược dòng thời gian với những bức ảnh từ thời cấp ba của chúng ta.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="mb-4 relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-amber-300 text-sm">{image.year}</span>
                  <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        <div className="text-center mt-12">
          <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 px-8 rounded-full transition-colors">
            Xem Toàn Bộ Album
          </button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Ảnh phóng to"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

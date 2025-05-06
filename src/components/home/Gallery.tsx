import React, { useState, useRef, useEffect, useMemo } from 'react';
import { galleryImages } from '../../data/mockData';
import { X, ChevronLeft, ChevronRight, Image, Layers, Filter } from 'lucide-react';
import Masonry from 'react-masonry-css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery: React.FC = () => {
  const ALL_IMAGES = 'Tất cả';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_IMAGES);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showAllImages, setShowAllImages] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);
  const categories = [ALL_IMAGES, ...new Set(galleryImages.map(img => img.category))];

  // Function to get random images
  const getRandomImages = (images: typeof galleryImages, count: number) => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get initial random images using useMemo to prevent regeneration on every render
  const initialImages = useMemo(() => getRandomImages(galleryImages, 30), []);

  // Filter images based on category and showAllImages state
  const filteredImages = useMemo(() => {
    return selectedCategory === ALL_IMAGES
      ? (showAllImages ? galleryImages : initialImages)
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory, showAllImages, initialImages]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleImageClick = (src: string, imageId: string) => {
    setSelectedImage(src);
    // Find the index of the clicked image in the filtered images array
    const index = filteredImages.findIndex(img => img.id === imageId);
    setCurrentSlideIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          handleClose();
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlideIndex,
    arrows: false,
    afterChange: (current: number) => setCurrentSlideIndex(current)
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Hành Trình Kỷ Niệm
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Cùng ngược dòng thời gian với những bức ảnh từ thời cấp ba của chúng ta.
          </p> */}
          <div className="max-w-2xl mx-auto bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">Hướng dẫn xem ảnh:</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <Image className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Album sẽ hiển thị <span className="font-semibold text-indigo-700">30 bức ảnh ngẫu nhiên</span> khi bạn truy cập</span>
              </li>
              <li className="flex items-start">
                <Layers className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Nhấn <span className="font-semibold text-indigo-700">"Xem Toàn Bộ Album"</span> để xem tất cả ảnh</span>
              </li>
              <li className="flex items-start">
                <Filter className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Chọn tên lớp để xem ảnh của lớp đó</span>
              </li>
            </ul>
          </div>
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
              onClick={() => {
                setSelectedCategory(category);
                setShowAllImages(false);
              }}
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
              onClick={() => handleImageClick(image.src, image.id)}
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
          <button
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 px-8 rounded-full transition-colors"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            {showAllImages ? 'Ẩn Bớt Ảnh' : 'Xem Toàn Bộ Album'}
          </button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 z-10"
              onClick={handleClose}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 z-10 p-2 bg-black/50 rounded-full transition-transform hover:scale-110"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 z-10 p-2 bg-black/50 rounded-full transition-transform hover:scale-110"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>

            <div className="w-full max-w-4xl">
              <Slider ref={sliderRef} {...settings}>
                {filteredImages.map((image) => (
                  <div key={image.id} className="px-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-h-[80vh] w-full object-contain mx-auto"
                    />
                    <div className="text-white text-center mt-4">
                      <h3 className="text-xl font-medium">{image.alt}</h3>
                      <div className="flex justify-center items-center gap-4 mt-2">
                        <span className="text-amber-300">{image.year}</span>
                        <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{image.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

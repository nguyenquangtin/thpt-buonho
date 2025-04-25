import React, { useEffect, useState } from 'react';
import { CalendarDays } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set reunion date (July 15, 2025)
    const reunionDate = new Date('2025-06-15T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = reunionDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
        style={{
          backgroundImage: 'url(/images/banner.jpg)',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg text-indigo-900">
            <span className="block">THPT Krông Buk</span>
            <span className="block text-amber-500 mt-2">Niên Khóa 2005</span>
          </h1>

          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>

          <h2 className="text-2xl md:text-3xl mb-6 font-light text-indigo-800">
            <span className="animate-pulse">Tổ chức kỷ niệm 20 năm hội ngộ</span>
          </h2>

          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-6">
            <CalendarDays className="w-6 h-6" />
            <span className="text-xl">Ngày 15 Tháng 6, Năm 2025</span>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-6 max-w-md mx-auto mb-8 shadow-lg">
            <h3 className="text-xl mb-4 text-indigo-900">Đếm ngược đến ngày hội ngộ</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="text-3xl font-bold text-indigo-900">{timeLeft.days}</div>
                <div className="text-xs uppercase text-indigo-700">Ngày</div>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="text-3xl font-bold text-indigo-900">{timeLeft.hours}</div>
                <div className="text-xs uppercase text-indigo-700">Giờ</div>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="text-3xl font-bold text-indigo-900">{timeLeft.minutes}</div>
                <div className="text-xs uppercase text-indigo-700">Phút</div>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="text-3xl font-bold text-indigo-900">{timeLeft.seconds}</div>
                <div className="text-xs uppercase text-indigo-700">Giây</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Đăng ký ngay
            </button>
            <button
              onClick={scrollToTimeline}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
            >
              Xem lịch trình
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-indigo-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

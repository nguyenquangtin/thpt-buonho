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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/banner.jpg)',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="bg-black/30  rounded-xl p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            <span className="block">THPT Krông Buk</span>
            <span className="block text-amber-400 mt-2">Niên Khóa 2005</span>
          </h1>

          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8 mt-2"></div>

          <h2 className="text-2xl md:text-3xl mb-6 font-light">
            <span className="animate-pulse">Tổ chức kỷ niệm 20 năm hội ngộ</span>
          </h2>

          <div className="flex items-center justify-center space-x-2 text-amber-200 mb-8">
            <CalendarDays className="w-6 h-6" />
            <span className="text-xl">Ngày 15 Tháng 6, Năm 2025</span>
          </div>

          <div className="bg-black/402 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl mb-4">Đếm ngược đến ngày hội ngộ</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-indigo-800/80 p-3 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs uppercase">Ngày</div>
              </div>
              <div className="bg-indigo-800/80 p-3 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs uppercase">Giờ</div>
              </div>
              <div className="bg-indigo-800/80 p-3 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs uppercase">Phút</div>
              </div>
              <div className="bg-indigo-800/80 p-3 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs uppercase">Giây</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Đăng ký ngay
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Xem lịch trình
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
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

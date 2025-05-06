import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const RegistrationCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Đăng ký tham gia hội ngộ</h2>
              <p className="text-lg opacity-90">
                Đăng ký ngay để tham gia buổi hội ngộ 20 năm! Gặp lại bạn bè cũ,
                ôn lại kỷ niệm và tạo thêm những kỷ niệm mới cùng các bạn cùng lớp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">15/06/2025</h3>
                  <p className="opacity-80">Đánh dấu lịch</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">Krông Buk</h3>
                  <p className="opacity-80">Quê hương chúng ta</p>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="h-8 w-8 mr-4 text-amber-300" />
                <div>
                  <h3 className="font-bold">215 Bạn cùng lớp</h3>
                  <p className="opacity-80">Hãy cùng gặp lại</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-amber-400 text-indigo-900 inline-block px-4 py-2 rounded-full mb-6">
                <span className="font-bold">Đăng ký:</span> 1.000.000đ đến hết ngày 30/05/2025
              </div>

              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Đăng ký ngay
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

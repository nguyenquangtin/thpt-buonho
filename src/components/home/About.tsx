import React from 'react';
import { Users, CalendarDays, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Hội ngộ 20 năm
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hãy cùng chúng tôi kỷ niệm hai thập kỷ kể từ ngày chúng ta rời khỏi mái trường THPT Krông Buk.
            Gặp lại bạn bè cũ và tạo thêm những kỷ niệm mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Gặp lại</h3>
            <p className="text-gray-600">
              Tìm lại bạn bè cũ, chia sẻ câu chuyện và xem cuộc sống đã đưa các bạn cùng lớp đi đến đâu trong 20 năm qua.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Kỷ niệm</h3>
            <p className="text-gray-600">
              Tận hưởng một ngày đầy ắp các sự kiện được thiết kế để kỷ niệm lịch sử chung và những hành trình chúng ta đã đi qua.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 text-center transform transition-transform hover:scale-105 duration-300">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Nhớ về</h3>
            <p className="text-gray-600">
              Trở về trường cũ, thăm lại những nơi từng gắn bó và hồi tưởng về những ngày tháng tươi đẹp của thời học sinh.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-indigo-900 text-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Về trường của chúng ta</h3>
              <p className="mb-4">
                Khóa 2005 được biết đến với tinh thần học đường, thành tích học tập và các đội thể thao vô địch.
                Khi tốt nghiệp, chúng ta đã bắt đầu tạo dấu ấn trên thế giới.
              </p>
              <p className="mb-4">
                Giờ đây, 20 năm sau, các bạn cùng lớp đã trở thành bác sĩ, kỹ sư, giáo viên, nghệ sĩ, doanh nhân,
                cha mẹ và nhiều hơn thế nữa. Đã đến lúc chúng ta cùng nhau kỷ niệm những thành tựu của mình.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">215</span>
                  <span className="text-sm">Học sinh</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">28</span>
                  <span className="text-sm">Tỉnh thành</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-amber-400">20</span>
                  <span className="text-sm">Năm</span>
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

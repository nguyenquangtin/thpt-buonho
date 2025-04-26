import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

interface TimelineItem {
  id: string;
  content: string;
  time: string;
  responsible: string;
  location?: string;
  description?: string;
  image?: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: "01",
    content: "Đón tiếp đại biểu; Ổn định tổ chức",
    time: "7h-7h30",
    responsible: "BTC-Ban tiếp khách",
    location: "Sảnh chính",
    description: "Đón tiếp và hướng dẫn đại biểu đến tham dự sự kiện"
  },
  {
    id: "02",
    content: "Văn nghệ chào mừng",
    time: "7h30-8h00",
    responsible: "Các lớp được chọn",
    location: "Sân khấu chính",
    description: "Các tiết mục văn nghệ đặc sắc do học sinh biểu diễn"
  },
  {
    id: "03",
    content: "Chào cờ - Quốc ca",
    time: "8h00-8h10",
    responsible: "Thầy & Trò",
    location: "Sân trường",
    description: "Nghi thức chào cờ và hát Quốc ca"
  },
  {
    id: "04",
    content: "Tuyên bố lí do, giới thiệu đại biểu",
    time: "8h10-8h20",
    responsible: "BTC-Bạn Quỳnh",
    location: "Hội trường chính"
  },
  {
    id: "05",
    content: "Phát biểu khai mạc",
    time: "8h10-8h20",
    responsible: "BTC-Bạn Khánh",
    location: "Hội trường chính"
  },
  {
    id: "06",
    content: "Phát biểu cảm nghĩ của đại diện học sinh khóa 2002-2005",
    time: "8h20-8h30",
    responsible: "BTC-Bạn Thu",
    location: "Hội trường chính"
  },
  {
    id: "07",
    content: "Chia sẻ kỷ niệm đẹp thời học trò",
    time: "8h30-8h40",
    responsible: "BTC-bạn...",
    location: "Hội trường chính"
  },
  {
    id: "08",
    content: "Tặng quà tri ân cho các thầy cô giáo",
    time: "8h40-9h",
    responsible: "Bạn Quỳnh – Thầy cô - 12 lớp trưởng",
    location: "Hội trường chính"
  },
  {
    id: "09",
    content: "Phát biểu của đại diện thầy cô giáo",
    time: "9h-9h10",
    responsible: "Thầy...",
    location: "Hội trường chính"
  },
  {
    id: "10",
    content: "Tặng quà cho trường (nếu có)",
    time: "9h-9h20",
    responsible: "BTC",
    location: "Hội trường chính"
  },
  {
    id: "11",
    content: "Thông qua Ban liên lạc của hội khóa",
    time: "9h20-9h30",
    responsible: "Bạn Duy",
    location: "Hội trường chính"
  },
  {
    id: "12",
    content: "Chụp hình lưu niệm",
    time: "9h30-10h",
    responsible: "Nhiếp ảnh – 12 lớp",
    location: "Sân trường",
    description: "Chụp ảnh tập thể và theo lớp"
  },
  {
    id: "13",
    content: "Sinh hoạt tại các lớp",
    time: "10h-10h45",
    responsible: "12 lớp",
    location: "Các phòng học",
    description: "Gặp gỡ và giao lưu tại các lớp học cũ"
  },
  {
    id: "14",
    content: "Tiệc liên hoan",
    time: "11h-13h",
    responsible: "Thầy cô - 12 lớp",
    location: "Nhà ăn tập thể",
    description: "Bữa tiệc liên hoan thân mật"
  },
  {
    id: "15",
    content: "Họp ban liên lạc, rút kinh nghiệm",
    time: "13h30",
    responsible: "BTC-Ban liên lạc-mời Thầy...",
    location: "Phòng họp"
  }
];

const EventTimeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="timeline" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0NGM2LjYyNyAwIDEyLTUuMzczIDEyLTEycy01LjM3My0xMi0xMi0xMi0xMiA1LjM3My0xMiAxMiA1LjM3MyAxMiAxMiAxMnptMC0yYy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtNS41MjMgNC40NzctMTAgMTAtMTAgNS41MjMgMCAxMCA0LjQ3NyAxMCAxMCAwIDUuNTIzLTQuNDc3IDEwLTEwIDEweiIgZmlsbD0iI2UwZTdmZiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Chương Trình Chi Tiết
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6 transform transition-all duration-300 hover:scale-110"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cùng xem lại lịch trình chi tiết của ngày hội ngộ. Từ những khoảnh khắc trang trọng đến những phút giây thân mật,
            chúng ta sẽ cùng nhau tạo nên những kỷ niệm khó quên.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider w-[5%]">STT</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider w-[40%]">Thời gian</th>
                    <th className="px-2 py-2 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider w-[55%]">Nội dung</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timelineItems.map((item) => (
                    <tr
                      key={item.id}
                      className={`transition-all duration-300 ${activeItem === item.id
                        ? 'bg-indigo-50 transform scale-[1.01]'
                        : 'hover:bg-gray-50'
                        }`}
                      onMouseEnter={() => setActiveItem(item.id)}
                      onMouseLeave={() => setActiveItem(null)}
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-base font-medium text-indigo-600 w-[5%]">{item.id}</td>
                      <td className="p-2 w-[40%]">
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-amber-500" />
                            <span className="text-base font-medium text-amber-600">
                              {item.time}
                            </span>
                          </div>
                          {item.location && (
                            <div className="mt-2 text-sm text-gray-500">
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {item.location}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 w-[55%]">
                        <div className="text-base font-semibold text-indigo-900 bg-indigo-50 px-3 py-2 rounded-md">
                          {item.content}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Đăng Ký Tham Gia
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;

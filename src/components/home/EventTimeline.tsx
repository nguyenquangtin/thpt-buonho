import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

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
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  return (
    <section id="timeline" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Chương Trình Chi Tiết
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cùng xem lại lịch trình chi tiết của ngày hội ngộ. Từ những khoảnh khắc trang trọng đến những phút giây thân mật,
            chúng ta sẽ cùng nhau tạo nên những kỷ niệm khó quên.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm">
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'table'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Bảng
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'cards'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Thẻ
            </button>
          </div>
        </div>

        {viewMode === 'table' ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nội dung</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thực hiện</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa điểm</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {timelineItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.content}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.responsible}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {item.id}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {item.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.content}</h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{item.responsible}</span>
                  </div>

                  {item.location && (
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventTimeline;

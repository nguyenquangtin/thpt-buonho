import React from 'react';

interface AgendaItem {
  id: string;
  content: string;
  time: string;
  responsible: string;
}

const agendaItems: AgendaItem[] = [
  {
    id: "01",
    content: "Đón tiếp đại biểu; Ổn định tổ chức",
    time: "7h-7h30",
    responsible: "BTC-Ban tiếp khách"
  },
  {
    id: "02",
    content: "Văn nghệ chào mừng",
    time: "7h30-8h00",
    responsible: "Các lớp được chọn"
  },
  {
    id: "03",
    content: "Chào cờ - Quốc ca",
    time: "8h00-8h10",
    responsible: "Thầy & Trò"
  },
  {
    id: "04",
    content: "Tuyên bố lí do, giới thiệu đại biểu",
    time: "8h10-8h20",
    responsible: "BTC-Bạn Quỳnh"
  },
  {
    id: "05",
    content: "Phát biểu khai mạc",
    time: "8h10-8h20",
    responsible: "BTC-Bạn Khánh"
  },
  {
    id: "06",
    content: "Phát biểu cảm nghĩ của đại diện học sinh khóa 2002-2005",
    time: "8h20-8h30",
    responsible: "BTC-Bạn Thu"
  },
  {
    id: "07",
    content: "Chia sẻ kỷ niệm đẹp thời học trò",
    time: "8h30-8h40",
    responsible: "BTC-bạn..."
  },
  {
    id: "08",
    content: "Tặng quà tri ân cho các thầy cô giáo",
    time: "8h40-9h",
    responsible: "Bạn Quỳnh – Thầy cô - 12 lớp trưởng"
  },
  {
    id: "09",
    content: "Phát biểu của đại diện thầy cô giáo",
    time: "9h-9h10",
    responsible: "Thầy..."
  },
  {
    id: "10",
    content: "Tặng quà cho trường (nếu có)",
    time: "9h-9h20",
    responsible: "BTC"
  },
  {
    id: "11",
    content: "Thông qua Ban liên lạc của hội khóa",
    time: "9h20-9h30",
    responsible: "Bạn Duy"
  },
  {
    id: "12",
    content: "Chụp hình lưu niệm",
    time: "9h30-10h",
    responsible: "Nhiếp ảnh – 12 lớp"
  },
  {
    id: "13",
    content: "Sinh hoạt tại các lớp",
    time: "10h-10h45",
    responsible: "12 lớp"
  },
  {
    id: "14",
    content: "Tiệc liên hoan",
    time: "11h-13h",
    responsible: "Thầy cô - 12 lớp"
  },
  {
    id: "15",
    content: "Họp ban liên lạc, rút kinh nghiệm",
    time: "13h30",
    responsible: "BTC-Ban liên lạc-mời Thầy..."
  }
];

const EventAgenda: React.FC = () => {
  return (
    <section id="agenda" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Chương trình chi tiết</h2>
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {agendaItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.content}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.responsible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;

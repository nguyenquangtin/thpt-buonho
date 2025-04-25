import React from 'react';
import { Phone } from 'lucide-react';

const EventOrganizers: React.FC = () => {
  const organizers = [
    {
      id: 1,
      name: 'Trần Quốc Duy',
      role: 'Ban Tổ Chức - 12B',
      info: 'Trung tâm Y tế huyện Krông Búk',
      phone: '0916777758',
      image: '/images/organizers/quoc_duy.jpg'
    },
    {
      id: 2,
      name: 'Mai Thị Như Quỳnh',
      role: 'Ban Tổ Chức - 12D',
      info: 'Trường THCS Nguyễn Công Trứ, xã Eangai, huyện Krông Búk',
      phone: '0918728088',
      image: '/images/organizers/nhu_quynh.png'
    },
    {
      id: 3,
      name: 'Nguyễn Quốc Khánh',
      role: 'Ban Tổ Chức - 12K',
      info: 'Nông dân chuyên nghiệp, Thôn 4, Tân Lập, Krông Buk, Đăk Lăk',
      phone: '0916444439',
      image: '/images/organizers/quoc_khanh.jpg'
    },
    {
      id: 4,
      name: 'Phan Thị Nguyên Thu',
      role: 'Ban Tổ Chức - 12L',
      info: 'Công Ty TNHH Mediworld- Đào tạo Thẩm Mỹ ứng dụng Công nghệ sinh học và Y Sinh.',
      phone: '0983881008',
      image: '/images/organizers/nguyen_thu.png'
    },
    {
      id: 5,
      name: 'Lê Tấn Dũng',
      role: 'Ban Tổ Chức - 12B',
      info: 'Thiết kế - In Ấn - Quảng Cáo HD - 57 Nguyễn Chí Thanh - Buôn Hồ',
      phone: '0947 83 96 96',
      image: '/images/organizers/tan_dung.jpg'
    },
    {
      id: 6,
      name: 'Nguyễn Thị Kiều Hoa',
      role: 'Ban Liên Lạc - 12I',
      info: 'Trung tâm GDNN - GDTX Buôn Hồ',
      phone: '0764656255',
      image: '/images/organizers/kieu_hoa.png'
    },
    {
      id: 7,
      name: 'Trịnh Xuân Khoa',
      role: 'Ban Liên Lạc - 12G',
      info: 'TP. Thủ Đức',
      phone: '0908117237',
      image: '/images/organizers/xuan_khoa.jpg'
    },
    {
      id: 8,
      name: 'H Nuết Kbuôr',
      role: 'Ban Liên Lạc - 12A',
      info: 'Trường THPT Hai Bà Trưng',
      phone: '0946784143',
      image: '/images/organizers/h_nuet_kbuor.jpg'
    },
    {
      id: 9,
      name: 'Nguyễn Hữu Diệu',
      role: 'Ban Liên Lạc - 12F',
      info: 'Tp Buôn Ma Thuột',
      phone: '0979050787',
      image: '/images/organizers/huu_dieu.jpg'
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Ban Tổ Chức
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gặp gỡ đội ngũ tận tâm đang làm việc để mang đến cho bạn một buổi hội ngộ đáng nhớ và thú vị.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {organizers.map((organizer) => (
            <div
              key={organizer.id}
              className="bg-indigo-50 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-indigo-900 mb-1">{organizer.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{organizer.role}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    {organizer.info}
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-indigo-600" />
                    <a href={`tel:${organizer.phone}`} className="hover:text-indigo-700">
                      {organizer.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOrganizers;

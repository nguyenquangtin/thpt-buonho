import React from 'react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: 2001,
      title: 'Năm học đầu tiên',
      description: 'Chúng ta bắt đầu hành trình học tập tại trường THPT Buôn Hồ.',
      icon: '🏫',
    },
    {
      year: 2003,
      title: 'Năm học thứ ba',
      description: 'Lớp chúng ta giành giải thưởng tinh thần và thống trị các môn thể thao.',
      icon: '🏆',
    },
    {
      year: 2005,
      title: 'Tốt nghiệp',
      description: 'Chúng ta tung mũ tốt nghiệp và bắt đầu chinh phục thế giới.',
      icon: '🎓',
    },
    {
      year: 2010,
      title: 'Hội ngộ 5 năm',
      description: 'Buổi hội ngộ đầu tiên khi chúng ta đang tìm đường cho cuộc sống.',
      icon: '🎉',
    },
    {
      year: 2015,
      title: 'Hội ngộ 10 năm',
      description: 'Kỷ niệm một thập kỷ thành tựu và gia đình đang phát triển.',
      icon: '👪',
    },
    {
      year: 2025,
      title: 'Hội ngộ 20 năm',
      description: 'Hai thập kỷ kỷ niệm, trưởng thành và tình bạn.',
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Hành trình của chúng ta
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Từ những học sinh năm nhất đến những người trưởng thành thành đạt, đây là câu chuyện của lớp chúng ta qua những năm tháng.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300"></div>

          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-xl ${index % 2 === 0 ? 'mr-4' : 'ml-4'
                      }`}
                  >
                    <span className="block text-amber-500 text-2xl font-bold mb-2">{event.year}</span>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white text-xl border-4 border-white shadow-md">
                  {event.icon}
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

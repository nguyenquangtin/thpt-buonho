import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Liên Hệ
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bạn có câu hỏi về buổi hội ngộ? Muốn tham gia tổ chức? Hãy liên hệ với ban tổ chức.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h3>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Họ và Tên</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="nguyenvana@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Tiêu Đề</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Câu hỏi về buổi hội ngộ"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Nội Dung</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Contact info and FAQ */}
          <div>
            <div className="bg-indigo-900 text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Thông Tin Liên Hệ</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="opacity-80">reunion2025@buonhot.net</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Điện Thoại</p>
                    <p className="opacity-80">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Mạng Xã Hội</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
                      <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Câu Hỏi Thường Gặp</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Phí đăng ký là bao nhiêu?</h4>
                  <p className="text-gray-600">Phí đăng ký sớm là 1,000,000 VNĐ.</p>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Có quy định về trang phục cho các sự kiện không?</h4>
                  <p className="text-gray-600">Buổi tiếp đón và tham quan trường là trang phục thường ngày. Bữa tiệc tối là trang phục lịch sự. Buổi dã ngoại gia đình là trang phục thể thao/casual.</p>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Tôi có thể mang theo vợ/chồng/bạn đời không?</h4>
                  <p className="text-gray-600">Có! Vợ/chồng/bạn đời được chào đón tham gia tất cả các sự kiện. Có thêm phí XX cho khách không phải cựu học sinh.</p>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Làm thế nào tôi có thể giúp tổ chức buổi hội ngộ?</h4>
                  <p className="text-gray-600">Chúng tôi rất hoan nghênh tình nguyện viên! Vui lòng sử dụng biểu mẫu liên hệ để cho chúng tôi biết bạn quan tâm đến việc giúp đỡ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

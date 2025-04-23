import React from 'react';
import { School, Heart } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <School className="h-8 w-8" />
              <span className="text-xl font-bold">THPT Krông Buk 2005</span>
            </div>
            <p className="opacity-80 mb-4">
              Kỷ niệm 20 năm tình bạn, kỷ niệm và những thành tựu kể từ ngày chúng ta tốt nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Trang chủ</Link></li>
              <li><Link href="#about" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Thông tin</Link></li>
              <li><Link href="#events" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Sự kiện</Link></li>
              <li><Link href="#gallery" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Hình ảnh</Link></li>
              <li><Link href="#alumni" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Cựu học sinh</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Thông tin hội ngộ</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Đăng ký</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Lịch trình</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Chỗ ở</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Thông tin di chuyển</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-amber-400 transition-colors">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Cập nhật thông tin</h3>
            <p className="opacity-80 mb-4">
              Tham gia danh sách email của chúng tôi để nhận tin tức và cập nhật mới nhất về buổi hội ngộ.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 text-center">
          <p className="opacity-80">
            &copy; 2025 THPT Krông Buk Khóa 2005. Tất cả quyền được bảo lưu.
          </p>
          <p className="mt-2 flex items-center justify-center">
            <span>Được tạo bởi</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>Ban chấp hành niên khóa 2005 - THPT Krông Buk.</span>
            <span className="ml-2">Code by ☕️ + <a href="https://nguyenquangtin.com" className="text-amber-400 hover:text-amber-500 transition-colors">Tony</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

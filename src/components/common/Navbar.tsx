import React, { useState, useEffect } from 'react';
import { School, Menu, X } from 'lucide-react';
import { Link } from '../ui/Link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '#home' },
    { name: 'Thông tin', path: '#about' },
    { name: 'Lịch trình', path: '#timeline' },
    { name: 'BTC', path: '#organizers' },
    { name: 'Hình ảnh', path: '#gallery' },
    { name: 'Cựu Học Sinh', path: '#alumni' },
    // { name: 'Kỷ Niệm', path: '#memories' },
    { name: 'Liên Hệ', path: '#organizers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-indigo-900 text-white shadow-lg py-2'
        : 'bg-transparent text-white py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8" />
            <span className="text-xl font-bold">THPT Krông Buk</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-amber-400 transition-colors ${isScrolled ? 'text-white' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-full transition-colors font-medium"
        >
          Đăng ký ngay
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900 text-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block py-2 hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-full transition-colors font-medium w-full mt-4"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

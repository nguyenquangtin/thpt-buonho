export interface Alumnus {
  id: string;
  name: string;
  graduationYear: number;
  class: string;
  image: string;
  profession: string;
  location: string;
  bio: string; // Can contain HTML content
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface MemoryPost {
  id: string;
  alumniId: string;
  alumniName: string;
  alumniImage: string;
  content: string;
  image?: string;
  date: string;
  likes: number;
  comments: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  year: number;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

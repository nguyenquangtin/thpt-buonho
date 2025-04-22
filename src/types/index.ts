export interface Alumnus {
  id: string;
  name: string;
  graduationYear: number;
  image: string;
  profession: string;
  location: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
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
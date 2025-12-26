
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  category: 'grooming' | 'store' | 'pets';
}

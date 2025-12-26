import { Service, Review, GalleryItem } from './types.ts';

export const BUSINESS_INFO = {
  name: "PETS Veterinary",
  subBrand: "London Pet Supplies",
  phone: "+44 7896 177961",
  address: "220 Jamaica Rd, London SE16 4BD, United Kingdom",
  instagram: "https://instagram.com",
  rating: 4.9,
  reviewCount: 29,
  hours: "Daily: 11:00 AM - 7:00 PM",
  specialNotes: "Public holidays may affect hours",
  tags: ["Women-owned", "LGBTQ+ friendly"]
};

export const SERVICES: Service[] = [
  {
    id: "grooming",
    title: "Professional Grooming",
    description: "Tailored grooming sessions for all breeds. We focus on patience and comfort to ensure your pet leaves looking and feeling their best.",
    icon: "✂️",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "full-pkg",
    title: "Full Care Packages",
    description: "Our comprehensive wash, cut, and styling packages include nail clipping, ear cleaning, and a refreshing scent.",
    icon: "🛁",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "supplies",
    title: "Premium Supplies",
    description: "A curated selection of high-quality pet food, accessories, and toys sourced from the best brands in the UK.",
    icon: "🦴",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "advice",
    title: "Expert Assistance",
    description: "Friendly, knowledgeable in-store staff ready to help you find exactly what your furry friend needs.",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1556740734-7f9583b77e99?auto=format&fit=crop&q=80&w=800"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Sarah J.",
    rating: 5,
    text: "The groomers were very friendly and patient with my dog. Highly recommend!",
    date: "2 months ago"
  },
  {
    id: 2,
    author: "David L.",
    rating: 5,
    text: "Megan does all 3 of my dogs—very reliable and professional service every time.",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "Priya K.",
    rating: 5,
    text: "She has everything you could possibly want for your pet. Great selection of food and toys.",
    date: "3 weeks ago"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600", alt: "Groomed golden retriever", category: "grooming" },
  { id: 2, url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600", alt: "Store shelves with accessories", category: "store" },
  { id: 3, url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600", alt: "Happy puppy after grooming", category: "pets" },
  { id: 4, url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600", alt: "Interior of the shop", category: "store" },
  { id: 5, url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600", alt: "Specialty pet food section", category: "store" },
  { id: 6, url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600", alt: "Poodle styling", category: "grooming" }
];
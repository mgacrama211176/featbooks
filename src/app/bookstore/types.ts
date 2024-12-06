// If this file doesn't exist, you'll need to create it
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string[];
  price: number;
  rating: number;
  image: string;
  description?: string;
  synopsis?: string;
  publisher: string;
  publishedDate: string;
  pages: number;
  language: string;
}

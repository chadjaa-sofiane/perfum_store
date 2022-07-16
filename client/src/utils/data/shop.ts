export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  available: boolean;
  [key: string]: any;
};

export const data: Product[] = [
  {
    id: 1,
    name: "Perfume 1",
    price: 10,
    image: "https://picsum.photos/200/300",
    count: 1,
    category: "perfume",
    description: "This is a perfume",
    available: true,
  },
  {
    id: 2,
    name: "Perfume 2",
    price: 20,
    image: "https://picsum.photos/200/300",
    count: 1,
    category: "perfume",
    description: "This is a perfume",
    available: false,
  },
  {
    id: 3,
    name: "Perfume 3",
    price: 30,
    image: "https://picsum.photos/200/300",
    count: 1,
    category: "perfume",
    description: "This is a perfume",
    available: true,
  },
  {
    id: 4,
    name: "Perfume 4",
    price: 40,
    image: "https://picsum.photos/200/300",
    count: 1,
    category: "perfume",
    description: "This is a perfume",
    available: true,
  },
];

export const CATEGORIES = ["Perfume", "Skin Care", "Body Care", "deodrant"];

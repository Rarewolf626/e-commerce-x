const API_URL = "https://api-prueba-w4t0.onrender.com/productos";

export async function getDataProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// export const data = [
// {
//   id: 1,
//   name: "Hoodie Anime",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Sudaderas",
//   price: 180,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
// },
//   {
//     id: 2,
//     name: "Sudadera Nike",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Sudaderas",
//     price: 100,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
//   },
// {
//   id: 3,
//   name: "Hoodie Anime",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Sudaderas",
//   price: 150,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1660249137/e-commerce-x/hoddie_anime_swzi9p.webp",
// },
// {
//   id: 4,
//   name: "Short Adidas",
//   price: 160,
//   sizes: ["S", "M", "L", "XL"],
//   category: "Shorts",
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
// },
// {
//   id: 5,
//   name: "Camiseta Puma",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Camisetas",
//   price: 180,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
// },
// {
//   id: 6,
//   name: "Sudadera Nike",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Sudaderas",
//   price: 100,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
// },
// {
//   id: 7,
//   name: "Pantalón Azul",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Pantalones",
//   price: 150,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
// },
// {
//   id: 8,
//   name: "Short Adidas",
//   sizes: ["S", "M", "L", "XL"],
//   category: "Shorts",
//   price: 160,
//   quantity: 1,
//   imageSrc:
//     "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
// },
//   {
//     id: 9,
//     name: "Camiseta Puma",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Camisetas",
//     price: 180,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
//   },
//   {
//     id: 10,
//     name: "Sudadera Nike",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Sudaderas",
//     price: 100,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
//   },
//   {
//     id: 11,
//     name: "Tennis Nike",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Tennis",
//     price: 150,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
//   },
//   {
//     id: 12,
//     name: "Short Adidas",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Shorts",
//     price: 160,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
//   },
//   {
//     id: 13,
//     name: "Camiseta Real Madrid",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Camisetas",
//     price: 160,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
//   },
//   {
//     id: 14,
//     name: "Short Nike",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Shorts",
//     price: 160,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
//   },
//   {
//     id: 15,
//     name: "Tennis Puma",
//     sizes: ["S", "M", "L", "XL"],
//     category: "Tennis",
//     price: 160,
//     quantity: 1,
//     imageSrc:
//       "https://res.cloudinary.com/daobmfotr/image/upload/v1659041231/e-commerce-x/madrid_pehnxn.webp",
//   },
// ];

import ProductCard from './ProductCard';

const products = [
  {
    title: "Cover Block 20/25/38 mm Multy",
    description: "Our versatile Cover Block 20/25/38 mm Multy is designed to provide optimal support and spacing for concrete reinforcement. Made from high-quality materials, it ensures durability and reliability in various construction applications.",
    images: [
      "/20 multy/IMG_7968.jpg",
      "/20 multy/IMG_7969.jpg",
      "/20 multy/IMG_7970.jpg",
      "/20 multy/IMG_7971.jpg",
      "/20 multy/IMG_7972.JPG",
      "/20 multy/IMG_7973.JPG"
    ],
    specifications: [
      "Size: 20/25/38 mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 20mm Round",
    description: "The Cover Block 20mm Round is perfect for maintaining the required spacing between rebar and formwork. Its round shape ensures even distribution of load and prevents concrete from seeping through, providing a smooth finish.",
    images: [
      "/20 round/IMG_7974.JPG",
      "/20 round/IMG_7975.jpg",
      "/20 round/IMG_7976.jpg"
    ],
    specifications: [
      "Size: 20mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 25mm Round",
    description: "The Cover Block 25mm Round is engineered to provide excellent support for rebar in concrete structures. Its robust design ensures stability and prevents displacement during concrete pouring, making it ideal for various construction projects.",
    images: [
      "/25 round/IMG_7977.JPG",
      "/25 round/IMG_7978.jpg",
      "/25 round/IMG_7979.jpg"
    ],
    specifications: [
      "Size: 25mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 30mm Round",
    description: "Our Cover Block 30mm Round is designed to ensure precise spacing and alignment of rebar in concrete structures. Its durable construction and easy installation make it a reliable choice for achieving high-quality concrete finishes.",
    images: [
      "/30 round/IMG_7980.JPG",
      "/30 round/IMG_7981.JPG",
      "/30 round/IMG_7982.jpg"
    ],
    specifications: [
      "Size: 30mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 40mm Round",
    description: "The Cover Block 40mm Round is ideal for maintaining the correct spacing between rebar and formwork. Its robust design ensures stability and prevents displacement during concrete pouring, making it suitable for various construction projects.",
    images: [
      "/40 round/IMG_7983.JPG",
      "/40 round/IMG_7984.JPG",
      "/40 round/IMG_7985.jpg",
    ],
    specifications: [
      "Size: 40mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 50mm Round",
    description: "The Cover Block 50mm Round is ideal for maintaining the correct spacing between rebar and formwork. Its robust design ensures stability and prevents displacement during concrete pouring, making it suitable for various construction projects.",
    images: [
      "/50 round/IMG_7990.JPG",
      "/50 round/IMG_7991.JPG",
      "/50 round/IMG_7992.jpg"
    ],
    specifications: [
      "Size: 50mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 40/50mm Square",
    description: "Our Cover Block 40/50mm Square is designed to provide optimal support and spacing for concrete reinforcement. Its durable construction ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/40 square/IMG_7986.JPG",
      "/40 square/IMG_7987.JPG",
      "/40 square/IMG_7988.jpg",
      "/40 square/IMG_7989.JPG"
    ],
    specifications: [
      "Size: 40/50mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Cover Block 75mm Square",
    description: "Our Cover Block 75mm Square is engineered to provide excellent support for rebar in concrete structures. Its robust design ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/75 square/IMG_7993.jpg",
      "/75 square/IMG_7994.JPG",
      "/75 square/IMG_7995.jpg"
    ],
    specifications: [
      "Size: 75mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Ring Cover 25mm",
    description: "Our Ring Cover 25mm is designed to provide optimal support and spacing for concrete reinforcement. Its durable construction ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/25 ring cover/IMG_7996.JPG",
      "/25 ring cover/IMG_7997.JPG",
      "/25 ring cover/IMG_7998.JPG"
    ],
    specifications: [
      "Size: 25mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Ring Cover 40mm",
    description: "Our Ring Cover 40mm is designed to provide optimal support and spacing for concrete reinforcement. Its durable construction ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/40 ring cover/IMG_7999.jpg",
      "/40 ring cover/IMG_8001.jpg",
      "/40 ring cover/IMG_8002.jpg"
    ],
    specifications: [
      "Size: 40mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Ring Cover 50mm",
    description: "Our Ring Cover 50mm is designed to provide optimal support and spacing for concrete reinforcement. Its durable construction ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/50 ring cover/IMG_8003.jpg",
      "/50 ring cover/IMG_8004.jpg",
      "/50 ring cover/IMG_8005.jpg"
    ],
    specifications: [
      "Size: 50mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  {
    title: "Ring Cover 75mm",
    description: "Our Ring Cover 75mm is designed to provide optimal support and spacing for concrete reinforcement. Its durable construction ensures stability and prevents displacement during concrete pouring.",
    images: [
      "/75 ring cover/571.jpeg",
      "/75 ring cover/download.jpeg"
    ],
    specifications: [
      "Size: 75mm",
      "Material: High-quality",
      "Application: Various construction projects"
    ]
  },
  // ... Add 11 more products with similar structure
];

export default function Products() {
  return (
    <div id='products' className="bg-[#E5E1DA]/10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Simulated product data (replace with real data fetching later)
const products = [
  {
    slug: 'organic-tomato',
    name: 'Organic Tomato',
    description: 'Freshly picked organic tomatoes straight from the farm.',
    price: 79,
    image: '/assets/images/tomato.jpg',
  },
  {
    slug: 'fresh-salmon',
    name: 'Fresh Salmon',
    description: 'Premium quality salmon, sustainably sourced.',
    price: 399,
    image: '/assets/images/salmon.jpg',
  },
];

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 text-lg">{product.description}</p>
        <p className="text-xl font-semibold text-primary">₹ {product.price}</p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </main>
  );
}

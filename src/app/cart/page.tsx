"use client";

import Image from "next/image";

const cartItems = [
  {
    id: 1,
    name: "Organic Tomato",
    price: 79,
    quantity: 2,
    image: "/assets/images/tomato.jpg",
  },
  {
    id: 2,
    name: "Fresh Salmon",
    price: 399,
    quantity: 1,
    image: "/assets/images/salmon.jpg",
  },
];

export default function CartPage() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div className="flex-1 w-full">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-700">Price: ₹{item.price}</p>
              </div>
              <div className="text-lg font-bold text-primary">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: ₹{total}
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg self-end hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </main>
  );
}

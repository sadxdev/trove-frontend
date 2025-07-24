'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  { name: 'Essentials' },
  { name: 'Meat & Seafood' },
  { name: 'Breads & Bakery' },
  { name: 'Pages' },
  { name: 'On Sale', highlight: true },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/assets/images/logo.avif" alt="Logo" width={120} height={40} />
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-gray-900">All Categories</button>
          </div>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="ml-4 border rounded-full px-4 py-2 w-72 text-sm"
          />
        </div>

        {/* Center menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative text-sm font-medium cursor-pointer ${
                item.highlight ? 'text-red-500' : 'text-gray-800 hover:text-black'
              }`}
            >
              {item.name}
              {hoveredItem === item.name && (
                <div className="absolute left-0 top-full mt-2 bg-white border shadow-lg w-[600px] p-6 z-10">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Vegetables</h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          <a href="#" className="hover:underline">
                            Tomatoes
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Onions
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Leafy Greens
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fruits</h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          <a href="#" className="hover:underline">
                            Apples
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Bananas
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Grapes
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Image
                        src="/banner-veg.jpg"
                        alt="Banner"
                        width={180}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-sm">📍</button>
          <button className="text-sm">👤</button>
          <div className="relative">
            <button className="text-sm">🛒</button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              2
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { useEffect, useState } from "react";

const announcements = [
  "✌🏼 Free Express Shipping on orders $120!",
  "🔥 Get 10% off on first order!",
  "🚚 Same-day delivery available in select areas!",
];

export default function AnnouncementBar() {
  const [atTop, setAtTop] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    setCurrentMessage((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentMessage((prev) =>
      prev === announcements.length - 1 ? 0 : prev + 1,
    );
  };

  if (!atTop) return null;

  return (
    <div className="w-full bg-black text-white text-sm py-2 px-4 flex items-center justify-center gap-4">
      <button
        onClick={handlePrev}
        className="transition hover:text-gray-300 text-white text-lg"
      >
        &lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
      <span className="text-center">{announcements[currentMessage]}</span>
      <button
        onClick={handleNext}
        className="transition hover:text-gray-300 text-white text-lg"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </button>
    </div>
  );
}

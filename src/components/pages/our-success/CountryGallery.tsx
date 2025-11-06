"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageData {
  url: string;
  type: string;
}

interface Story {
  category: string;
  categoryImage: string;
  image: ImageData[];
}

const stories: Story[] = [
  {
    category: "Romania",
    categoryImage: "/images/dubai.jpg",
    image: [
      { url: "/images/visa.png", type: "image/png" },
      { url: "/images/visa.png", type: "image/png" },
      { url: "/images/visa.png", type: "image/png" },
    ],
  },
  {
    category: "Serbia",
    categoryImage: "/images/dubai.jpg",
    image: [
      { url: "/images/serbia1.jpg", type: "image/jpeg" },
      { url: "/images/serbia2.jpg", type: "image/jpeg" },
    ],
  },
  {
    category: "Croatia",
    categoryImage: "/images/dubai.jpg",
    image: [
      { url: "/images/croatia1.jpg", type: "image/jpeg" },
      { url: "/images/croatia2.jpg", type: "image/jpeg" },
    ],
  },
  {
    category: "Bosnia",
    categoryImage: "/images/dubai.jpg",
    image: [
      { url: "/images/bosnia1.jpg", type: "image/jpeg" },
      { url: "/images/bosnia2.jpg", type: "image/jpeg" },
    ],
  },
  {
    category: "Malta",
    categoryImage: "/images/dubai.jpg",
    image: [
      { url: "/images/malta1.jpg", type: "image/jpeg" },
      { url: "/images/malta2.jpg", type: "image/jpeg" },
    ],
  },
];

export default function CountryGallery() {
  const [selectedCountry, setSelectedCountry] = useState<Story | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (story: Story) => {
    setSelectedCountry(story);
    setCurrentIndex(0);
  };

  const closeModal = () => setSelectedCountry(null);

  const nextImage = () => {
    if (!selectedCountry) return;
    setCurrentIndex((prev) => (prev + 1) % selectedCountry.image.length);
  };

  const prevImage = () => {
    if (!selectedCountry) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedCountry.image.length) % selectedCountry.image.length
    );
  };

  return (
    <div className="min-h-screen p-8 bg-secondary">
      {/* Country Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {stories.map((story) => (
          <motion.div
            key={story.category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openModal(story)}
            className="relative overflow-hidden shadow-md cursor-pointer rounded-xl">
            <Image
              src={story.categoryImage}
              alt={story.category}
              width={400}
              height={500}
              className="object-cover w-full h-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-lg font-bold text-white">{story.category}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {/* Close button */}
            <button
              title="button"
              onClick={closeModal}
              className="absolute text-white top-6 right-6 hover:text-gray-300">
              <X size={36} />
            </button>

            {/* Country title */}
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="mb-6 text-3xl font-bold text-white">
              {selectedCountry.category}
            </motion.h2>

            {/* Main Image Slider */}
            <div className="relative flex items-center justify-center w-full max-w-7xl">
              <button
                title="button"
                onClick={prevImage}
                className="absolute left-0 p-3 text-white transition-transform hover:scale-110">
                <ChevronLeft size={40} />
              </button>

              <div className="max-w-3xl">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden shadow-lg rounded-xl">
                  <Image
                    src={selectedCountry.image[currentIndex].url}
                    alt={`${selectedCountry.category} ${currentIndex + 1}`}
                    width={900}
                    height={600}
                    className="object-contain max-h-[70vh] w-full"
                  />
                </motion.div>
              </div>

              <button
                title="button"
                onClick={nextImage}
                className="absolute right-0 p-3 text-white transition-transform hover:scale-110">
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Thumbnail Slider */}
            <div className="flex max-w-3xl gap-3 mt-6 overflow-x-auto">
              {selectedCountry.image.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                    currentIndex === index
                      ? "border-white"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}>
                  <Image
                    src={img.url}
                    alt={`${selectedCountry.category} thumb ${index + 1}`}
                    width={100}
                    height={70}
                    className="object-cover w-24 h-16"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

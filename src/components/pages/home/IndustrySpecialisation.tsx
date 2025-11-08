"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const IndustrySpecialisation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  const t = useTranslations("industriesspecialization");

  const industries = [
    {
      title: "Agriculture & Farming",
      image: "/industries/agriculture.avif",
      icon: "🌱",
    },
    {
      title: "Automotive Services",
      image: "/industries/automotive.avif",
      icon: "🚗",
    },
    {
      title: "Bakery & Food Production",
      image: "/industries/bakery.avif",
      icon: "🍞",
    },
    {
      title: "Healthcare & Care Homes",
      image: "/industries/healthcare.avif",
      icon: "🏥",
    },
    {
      title: "Commercial Cleaning",
      image: "/industries/cleaning.avif",
      icon: "✨",
    },
    {
      title: "Construction & Building",
      image: "/industries/construction.avif",
      icon: "🏗️",
    },
    {
      title: "Logistics & Delivery",
      image: "/industries/delivery.avif",
      icon: "🚚",
    },
    {
      title: "Technical Services",
      image: "/industries/technical.avif",
      icon: "🔧",
    },
    {
      title: "Hospitality & Tourism",
      image: "/industries/hospitality.avif",
      icon: "🏨",
    },
    { title: "Dairy Processing", image: "/industries/dairy.avif", icon: "🥛" },
    {
      title: "Manufacturing",
      image: "/industries/manufacturing.avif",
      icon: "🏭",
    },
    {
      title: "Textiles & Garment",
      image: "/industries/textiles.avif",
      icon: "👕",
    },
    {
      title: "Mining & Resources",
      image: "/industries/mining.avif",
      icon: "⛏️",
    },
    { title: "Oil & Gas", image: "/industries/oil-gas.avif", icon: "🛢️" },
    { title: "Packaging", image: "/industries/packaging.avif", icon: "📦" },
    {
      title: "Railway Transport",
      image: "/industries/railway.avif",
      icon: "🚆",
    },
    {
      title: "Restaurant Service",
      image: "/industries/restaurant.avif",
      icon: "🍽️",
    },
    {
      title: "Beauty & Hairdressing",
      image: "/industries/beauty.avif",
      icon: "💇",
    },
    { title: "Sugar Processing", image: "/industries/sugar.avif", icon: "🍬" },
    {
      title: "Butchery & Meat",
      image: "/industries/butchery.avif",
      icon: "🥩",
    },
    {
      title: "Warehouse & Logistics",
      image: "/industries/warehouse.avif",
      icon: "📦",
    },
    { title: "Welding & Metal", image: "/industries/welding.avif", icon: "🔩" },
    {
      title: "Woodwork & Furniture",
      image: "/industries/woodwork.avif",
      icon: "🪑",
    },
  ];

  const handleNext = () => {
    if (selectedIndustry !== null) {
      setSelectedIndustry((prev) =>
        prev === industries.length - 1 ? 0 : prev! + 1
      );
    }
  };

  const handlePrevious = () => {
    if (selectedIndustry !== null) {
      setSelectedIndustry((prev) =>
        prev === 0 ? industries.length - 1 : prev! - 1
      );
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
    
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            {t("subtitle")}
          </motion.p>
        </div>

     
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative aspect-square group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndustry(index)}
            >
              
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />

                
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"
                  initial={false}
                  animate={{
                    backgroundColor:
                      hoveredIndex === index
                        ? "rgba(0,0,0,0.6)"
                        : "rgba(0,0,0,0)",
                  }}
                />

              
                <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg">{industry.icon}</span>
                </div>

              
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {industry.title}
                  </h3>
                </div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#EF3D54] text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </motion.div>
              </div>

           
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-[#EF3D54] opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

     
        <AnimatePresence>
          {selectedIndustry !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedIndustry(null)}
            >
              <motion.div
                key={selectedIndustry}
                initial={{ scale: 0.5, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                
                <div className="grid md:grid-cols-2 h-full">
                  
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={industries[selectedIndustry].image}
                      alt={industries[selectedIndustry].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">
                        {industries[selectedIndustry].icon}
                      </span>
                    </div>

                 
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {selectedIndustry + 1} / {industries.length}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {industries[selectedIndustry].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Discover our specialized recruitment solutions for the{" "}
                      {industries[selectedIndustry].title.toLowerCase()}{" "}
                      industry. We provide expert staffing services tailored to
                      your unique needs with qualified professionals ready to
                      support your business growth.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href={"/areas-of-expertise"}
                        className="flex-1 bg-[#EF3D54] text-white py-3 rounded-lg font-semibold hover:bg-[#EF3D54]/90 transition-colors text-center"
                      >
                        Learn More
                      </Link>
                      <button
                        onClick={() => setSelectedIndustry(null)}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={"/areas-of-expertise"}
            className="bg-[#EF3D54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#EF3D54]/90 transition-all duration-300 hover:scale-105"
          >
            View All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySpecialisation;

"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/animation/PageTransition";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaPinterest, FaTiktok } from "react-icons/fa";

const images = ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-8 bg-gray-300 rounded w-48 animate-pulse"></div>
              <div className="h-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 ">
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1.05 : 1,
              }}
              transition={{
                opacity: { duration: 2, ease: "easeInOut" },
                scale: { duration: 8, ease: "easeInOut" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 z-5">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 10) % 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 px-4 mx-auto py-10">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 lg:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block"
                  >
                    {t("title")}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block text-[#EF3D54] mt-2 lg:mt-4"
                  >
                    {t("subtitle")}
                  </motion.span>
                </h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "140px" }}
                  transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-[#EF3D54] to-pink-500 rounded-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative"
              >
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 max-w-2xl backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                  {t("description")}
                </p>
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#EF3D54]/10 rounded-2xl blur-xl -z-10"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="flex items-center gap-3 px-8 py-6 text-lg font-semibold text-white bg-[#EF3D54] rounded-xl hover:bg-[#EF3D54]/90 transition-all duration-300 shadow-lg shadow-[#EF3D54]/20"
                  >
                    <span>{t("button")}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <div className="flex gap-3">
                  {[
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/WeEmpowerment",
                      color: "hover:bg-blue-500/80",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/empowerment.group25/",
                      color: "hover:bg-pink-500/80",
                    },
                    {
                      icon: FaTiktok,
                      href: "https://www.tiktok.com/@empowerment.group25?lang=en",
                      color: "hover:bg-black/80",
                    },
                    {
                      icon: FaPinterest,
                      href: "https://www.pinterest.com/empowermentgroup25/",
                      color: "hover:bg-red-500/80",
                    },
                    {
                      icon: Youtube,
                      href: "https://www.youtube.com/@EmpowermentGroupLimited",
                      color: "hover:bg-red-600/80",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 3,
                        delay: index * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <Link
                        href={social.href}
                        className={`flex items-center justify-center w-12 h-12 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 ${social.color} hover:shadow-lg hover:shadow-white/20`}
                        target="_blank"
                      >
                        {social.icon === FaTiktok ||
                        social.icon === FaPinterest ? (
                          <social.icon className="w-5 h-5 text-white" />
                        ) : (
                          <social.icon className="w-5 h-5 text-white" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >

              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              >
                <div className="w-full h-64 lg:h-80 xl:h-96 relative">
                  {images.map((image, index) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: index === 0 ? 1 : 0 }}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                      }}
                      transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  key={currentImageIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-1 bg-[#EF3D54]"
                />
              </motion.div>

              <div className="flex justify-center gap-3 mt-6">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-[#EF3D54]"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    style={{
                      width: currentImageIndex === index ? "32px" : "12px",
                      height: "12px",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {currentImageIndex === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-[#EF3D54] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;

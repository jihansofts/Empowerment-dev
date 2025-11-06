"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  // Twitter,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import AnimateInView from "@/components/animation/AnimateInView";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/components/animation/variants";
import PageTransition from "@/components/animation/PageTransition";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaPinterest, FaTiktok } from "react-icons/fa";

const images = ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"];

const containerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const t = useTranslations("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  if (!mounted) return null;

  return (
    <PageTransition>
      <motion.section
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative min-h-[80vh] flex items-center bg-white py-6 md:py-12 pb-4">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            <AnimateInView
              variants={fadeInRight}
              delay={0.6}
              className="relative order-1 mt-0 mb-8 md:mb-0 md:mt-0 md:order-2">
              <div className="absolute w-full h-full transform -right-8 top-8 rounded-2xl bg-primary/20 blur-lg" />
              <Carousel
                setApi={setApi}
                className="relative w-full overflow-hidden rounded-2xl shadow-[2px_4px_16px_rgba(0,0,0,0.15)]"
                opts={{
                  loop: true,
                  align: "center",
                  skipSnaps: false,
                  dragFree: false,
                }}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      {/* Adjusted image heights for better proportions */}
                      <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px]">
                        <Image
                          src={image}
                          alt={`Carousel Image ${index + 1}`}
                          fill
                          priority
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute flex items-center gap-2 -translate-x-1/2 bottom-4 left-1/2">
                  {images.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                        activeIndex === index ? "bg-black" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </AnimateInView>

            {/* Content section */}
            <AnimateInView
              variants={fadeInLeft}
              delay={0.6}
              className="order-2 space-y-2 md:space-y-8 md:order-1">
              <AnimateInView variants={fadeInUp} delay={0.7}>
                <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-5xl lg:text-6xl">
                  {t("title")}
                  <span className="block text-primary mt-0.5 md:mt-2">
                    {t("subtitle")}
                  </span>
                </h1>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} delay={0.8}>
                <p className="max-w-lg text-sm text-gray-600 sm:text-base md:text-xl">
                  {t("description")}
                </p>
              </AnimateInView>

              <AnimateInView variants={fadeInUp} delay={0.9}>
                <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row md:pt-4">
                  <div className="flex flex-row items-center justify-between w-full gap-3 sm:w-auto md:gap-4">
                    <Button
                      size="lg"
                      className="relative flex items-center justify-center w-auto gap-2 px-4 py-3 overflow-hidden text-sm text-white transition-all duration-300 ease-in-out transform bg-black rounded-full sm:text-base md:text-xl hover:bg-primary/90 md:gap-3 sm:py-4 md:py-6 sm:px-6 md:px-8 hover:scale-105 group">
                      <span className="relative z-10">{t("button")}</span>
                      <span className="bg-white p-1 sm:p-1.5 md:p-2 rounded-full relative z-10">
                        <ArrowRight className="w-3 h-3 text-black sm:h-4 sm:w-4 md:h-6 md:w-6" />
                      </span>
                      <div className="absolute inset-0 transition-transform duration-300 ease-out origin-right transform scale-0 bg-primary group-hover:scale-100" />
                    </Button>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.facebook.com/WeEmpowerment"
                        className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                        target="_blank">
                        <Facebook className="w-6 h-6 text-gray-700" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/empowerment.group25/"
                        className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200">
                        <Instagram className="w-6 h-6 text-gray-700" />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@empowerment.group25?lang=en"
                        className="flex justify-center p-3 transition-colors bg-gray-100 jus ju rounded-xl hover:bg-gray-200">
                        <FaTiktok className="w-6 h-6 text-gray-700 " />
                      </Link>
                      <Link
                        href="https://www.pinterest.com/empowermentgroup25/"
                        className="flex justify-center p-3 transition-colors bg-gray-100 justi rounded-xl hover:bg-gray-200"
                        target="_blank">
                        <FaPinterest className="w-6 h-6 text-gray-700 " />
                      </Link>
                      {/* <a
                    href="https://x.com/empowerment4492"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Twitter className="w-6 h-6 text-gray-700" />
                  </a> */}
                      <Link
                        href="https://www.youtube.com/@EmpowermentGroupLimited"
                        className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                        target="_blank">
                        <Youtube className="w-6 h-6 text-gray-700" />
                      </Link>
                      {/* <a
                    href="https://www.linkedin.com/company/empowerment-group-limited"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </AnimateInView>
            </AnimateInView>
          </div>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Hero;

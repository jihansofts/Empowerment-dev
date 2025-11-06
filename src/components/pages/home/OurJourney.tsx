"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  journeyTitleVariants,
  journeySubtitleVariants,
} from "@/components/animation/contentVariants";
import { useTranslations } from "next-intl";

const OurJourney: React.FC = () => {
  const t = useTranslations("ourjourney");
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timelineData = [
    {
      year: t("timeyear1"),
      title: t("timetitle1"),
      description: t("timedec1"),
      image: "/images/1985.jpg",
    },
    {
      year: t("timeyear2"),
      title: t("timetitle2"),
      description: t("timedec2"),
      image: "/images/1990.jpg",
    },
    {
      year: t("timeyear3"),
      title: t("timetitle3"),
      description: t("timedec3"),
      image: "/images/2000.jpg",
    },
    {
      year: t("timeyear4"),
      title: t("timetitle4"),
      description: t("timedec4"),
      image: "/images/2010.jpg",
    },
    {
      year: t("timeyear5"),
      title: t("timetitle5"),
      description: t("timedec5"),
      image: "/images/2020.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return undefined;

    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const isActive = (index: number) => {
    if (isMobile) return index <= currentIndex;

    if (currentIndex >= timelineData.length - 2) {
      return index <= currentIndex || index >= timelineData.length - 2;
    }
    return index <= currentIndex;
  };

  const getLineWidth = (index: number) => {
    if (!isActive(index)) return "0%";
    return index === timelineData.length - 1
      ? "calc(100% + 44px)"
      : "calc(100% + 50px)";
  };

  return (
    <section
      id="journey"
      className="py-8 sm:py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
          <motion.h2
            variants={journeyTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            {t("title")}
          </motion.h2>
          <motion.p
            variants={journeySubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-600 text-base sm:text-lg md:text-xl">
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-full md:max-w-4xl lg:max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: false,
              dragFree: false,
              containScroll: "keepSnaps",
              breakpoints: {
                "(min-width: 768px)": {
                  containScroll: "keepSnaps",
                },
              },
            }}>
            <CarouselContent className="-ml-1 md:-ml-2">
              {timelineData.map((item, index) => (
                <CarouselItem
                  key={item.year}
                  className={`pl-1 md:pl-2 ${
                    isMobile
                      ? "basis-[280px] sm:basis-[320px]"
                      : "basis-[380px]"
                  }`}>
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="mb-4">
                      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 380px"
                          className="object-cover"
                          priority={index === currentIndex}
                          draggable="false"
                        />
                      </div>
                    </div>

                    {/* Timeline Line - Updated */}
                    <div className="relative h-[2px] w-full my-4">
                      <div
                        className="absolute h-full bg-gray-200"
                        style={{
                          left: "0",
                          right: "-48px",
                          width: "auto",
                        }}
                      />

                      {/* Dashed inactive line - continuous */}
                      <div
                        className={`absolute h-full transition-all duration-300 ${
                          isActive(index) ? "opacity-0" : "opacity-100"
                        }`}
                        style={{
                          left: "0",
                          right: "-48px",
                          width: "auto",
                          background: `repeating-linear-gradient(
                            90deg,
                            #D1D5DB 0px,
                            #D1D5DB 4px,
                            transparent 4px,
                            transparent 8px
                          )`,
                        }}
                      />

                      {/* Active solid line */}
                      <motion.div
                        className="absolute h-full bg-black"
                        initial={false}
                        animate={{
                          width: getLineWidth(index),
                        }}
                        style={{
                          left: "0",
                          transformOrigin: "left",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="text-left mt-4">
                      <div
                        className={`text-base sm:text-lg font-bold mb-2 transition-colors duration-300 ${
                          isActive(index) ? "text-black" : "text-gray-400"
                        }`}>
                        {item.year}
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-bold mb-1 transition-colors duration-300 ${
                          isActive(index) ? "text-black" : "text-gray-400"
                        }`}>
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm transition-colors duration-300 ${
                          isActive(index) ? "text-black" : "text-gray-400"
                        }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 sm:-left-6 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 transition-all h-10 w-10 sm:h-12 sm:w-12" />
            <CarouselNext className="absolute -right-4 sm:-right-6 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 transition-all h-10 w-10 sm:h-12 sm:w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

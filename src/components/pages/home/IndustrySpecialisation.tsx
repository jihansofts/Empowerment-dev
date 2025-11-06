"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Building2,
  CircuitBoard,
  Users,
  Radio,
  Landmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  headingVariants,
  paragraphVariants,
} from "@/components/animation/contentVariants";
import { useTranslations } from "next-intl";

const CircularProgress = ({ onComplete }: { onComplete: () => void }) => (
  <svg className="absolute inset-0 w-full h-full -rotate-90">
    <circle
      cx="50%"
      cy="50%"
      r="48%"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-primary"
      pathLength="1"
      strokeDasharray="1"
      strokeDashoffset="1"
      style={{
        animation: "progress 3s linear forwards",
      }}
      onAnimationEnd={onComplete}
    />
  </svg>
);

const IndustrySpecialisation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const t = useTranslations("industriesspecialization");
  const industries = [
    // {
    //   title: "Media & Entertainment",
    //   icon: Car,
    //   description: "Connecting top talent to the dynamic world of media.",
    // },
    {
      title: t("industries1.title"),
      icon: Radio,
      description: t("industries1.desc"),
    },
    {
      title: t("industries2.title"),
      icon: Landmark,
      description: t("industries2.desc"),
    },
    {
      title: t("industries3.title"),
      icon: Building2,
      description: t("industries3.desc"),
    },
    {
      title: t("industries4.title"),
      icon: CircuitBoard,
      description: t("industries4.desc"),
    },
    {
      title: t("industries5.title"),
      icon: Users,
      description: t("industries5.desc"),
    },
  ];
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleProgressComplete = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(
        (prev) => (prev - 1 + industries.length) % industries.length
      );
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(dragDistance) > 50 || Math.abs(velocity) > 500) {
      if ((dragDistance < 0 || velocity < -500) && !isAnimating) {
        handleNext();
      } else if ((dragDistance > 0 || velocity > 500) && !isAnimating) {
        handlePrev();
      }
    }
  };

  if (!isClient) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Updated header spacing */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            variants={headingVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            {t("title")}
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Updated carousel container */}
        <div className="flex justify-center items-center relative max-w-[320px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto">
          {/* Previous Button - Adjusted positioning */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 xs:left-0 z-20 p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
            disabled={isAnimating}>
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
          </button>

          {/* Updated carousel viewport */}
          <motion.div
            className="relative w-[280px] xs:w-[350px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden flex items-center cursor-grab active:cursor-grabbing select-none"
            drag="x"
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            dragConstraints={{ left: -50, right: 50 }}
            dragElastic={0.1}
            onDragEnd={handleDrag}
            whileTap={{ cursor: "grabbing" }}
            whileDrag={{ scale: 0.98 }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {industries.map((industry, index) => {
                const position = index - activeIndex;
                return (
                  <motion.div
                    key={index}
                    initial={{
                      x: position > 0 ? 800 : -800,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      x:
                        position * (window.innerWidth < 640 ? 200 : 280) -
                        (window.innerWidth < 640 ? 70 : 100),
                      opacity: Math.abs(position) <= 1 ? 1 : 0.3,
                      scale: position === 0 ? 1 : 0.75,
                      zIndex: position === 0 ? 10 : 0,
                    }}
                    exit={{
                      x: position < 0 ? -800 : 800,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.4,
                    }}
                    onAnimationComplete={handleAnimationComplete}
                    className="absolute pointer-events-none"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}>
                    <div className="flex flex-col items-center">
                      {/* Updated icon container sizing */}
                      <div
                        className={`w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center p-4 sm:p-6 relative shadow-lg transition-all duration-300 
                        ${position === 0 ? "bg-blue-50" : "bg-white"}`}>
                        <industry.icon
                          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300
                          ${position === 0 ? "text-primary" : "text-gray-400"}`}
                        />
                        {position === 0 && (
                          <CircularProgress
                            onComplete={handleProgressComplete}
                          />
                        )}
                      </div>

                      {/* Updated text content sizing */}
                      {position === 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-4 sm:mt-6 text-center w-36 sm:w-44 md:w-48">
                          <h3 className="text-base sm:text-lg font-medium text-primary mb-1 sm:mb-2">
                            {industry.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-primary/70">
                            {industry.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Next Button - Adjusted positioning */}
          <button
            onClick={handleNext}
            className="absolute -right-2 xs:right-0 z-20 p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
            disabled={isAnimating}>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySpecialisation;

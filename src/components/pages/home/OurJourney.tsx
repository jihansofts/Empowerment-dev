"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const OurJourney: React.FC = () => {
  const t = useTranslations("ourjourney");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rotateValue = useMotionValue(0);

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
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    animate(rotateValue, 360, {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    });
  }, [rotateValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === timelineData.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 overflow-hidden bg-white sm:py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ rotate: rotateValue }}
          className="absolute w-40 h-40 -top-12 -left-12 sm:w-48 sm:h-48 md:w-60 md:h-60 opacity-5">
          <Image
            src="/logo/round.png"
            alt="Rotating Logo"
            width={240}
            height={240}
            className="object-contain w-full h-full"
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotateValue }}
          className="absolute w-32 h-32 -top-12 -right-12 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-5">
          <Image
            src="/logo/round.png"
            alt="Rotating Logo"
            width={192}
            height={192}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl sm:mb-4">
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl px-4 mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index <= activeIndex;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col ${
                    isMobile
                      ? "items-center"
                      : isLeft
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                  } gap-6 sm:gap-8 md:gap-12`}>
                  <div
                    className={`${isMobile ? "w-full" : "lg:w-1/2"} order-2 lg:order-1`}>
                    <motion.div
                      className={`bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 ${
                        isActive ? "opacity-100" : "opacity-70"
                      } transition-all duration-500`}>
                      <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EF3D54] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-white sm:text-sm">
                            {item.year}
                          </span>
                        </div>

                        <motion.div
                          style={{ rotate: rotateValue }}
                          className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 opacity-70">
                          <Image
                            src="/logo/round.png"
                            alt="Timeline Round"
                            width={32}
                            height={32}
                            className="object-contain w-full h-full"
                          />
                        </motion.div>

                        <div className="flex-1" />
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div
                    className={`${isMobile ? "w-full" : "lg:w-1/2"} relative order-1 lg:order-2`}>
                    <motion.div
                      style={{ rotate: rotateValue }}
                      className={`absolute ${
                        isMobile
                          ? "-bottom-3 -right-3 sm:-bottom-4 sm:-right-4"
                          : isLeft
                            ? "-top-4 -left-4 lg:-top-12 lg:-left-12"
                            : "-top-4 -right-4 lg:-top-12 lg:-right-12"
                      } w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 z-10`}
                      animate={{
                        y: isMobile ? [0, 5, 0] : [0, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      <Image
                        src="/logo/round.png"
                        alt="Decorative Round"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full drop-shadow-lg"
                      />
                    </motion.div>

                    <motion.div
                      className={`relative rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 ${
                        isActive
                          ? "scale-100 shadow-md sm:shadow-lg"
                          : "scale-95"
                      } transition-all duration-500`}
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}>
                      <div className="aspect-video sm:aspect-[4/3] relative z-20">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>

                      <div className="absolute px-2 py-1 text-xs font-semibold text-white rounded-full top-3 left-3 bg-black/80 sm:px-3 sm:py-1 sm:text-sm">
                        {item.year}
                      </div>
                    </motion.div>

                    {!isMobile && (
                      <motion.div
                        style={{ rotate: rotateValue }}
                        className={`absolute ${
                          isLeft
                            ? "-bottom-10 -right-10"
                            : "-bottom-10 -left-10"
                        } w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-32 lg:h-32 opacity-60 z-10`}
                        animate={{
                          y: [0, 5, 0],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}>
                        <Image
                          src="/logo/round.png"
                          alt="Decorative Round"
                          width={48}
                          height={48}
                          className="object-contain w-full h-full"
                        />
                      </motion.div>
                    )}
                  </div>

                  {index < timelineData.length - 1 && (
                    <>
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-0.5 w-16 bg-gray-300 top-1/2 -translate-y-1/2">
                        <motion.div
                          className="h-full bg-[#EF3D54]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActive ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>

                      <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#EF3D54] rounded-full -bottom-6 sm:-bottom-8">
                        <motion.div
                          animate={{
                            scale: isActive ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: isActive ? Infinity : 0,
                          }}
                          className="w-full h-full bg-[#EF3D54] rounded-full"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-12 sm:gap-3 sm:mt-16">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index <= activeIndex
                  ? "bg-[#EF3D54]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                width: index <= activeIndex ? "24px" : "12px",
                height: "12px",
              }}>
              <span className="sr-only">Go to {timelineData[index].year}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:hidden">
          {timelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                index <= activeIndex ? "text-[#EF3D54]" : "text-gray-400"
              }`}>
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  headingVariants,
  paragraphVariants,
} from "@/components/animation/contentVariants";
import { useTranslations } from "next-intl";

const CountStatscard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const t = useTranslations("countstats");

  useEffect(() => {
    if (!containerRef.current || !isInView) return;
    // 👇 Set your starting year here
    const startYear = 2010;
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear; // Auto calculate years (e.g., 15)

    animate(0, years, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count1")!.textContent =
            `${Math.floor(value)}+`;
        }
      },
    });

    animate(0, 2500, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count2")!.textContent =
            `${Math.floor(value)}+`;
        }
      },
    });

    animate(0, 150, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count3")!.textContent =
            `${Math.floor(value)}+`;
        }
      },
    });

    animate(0, 98, {
      duration: 2,
      onUpdate: (value) => {
        if (containerRef.current) {
          containerRef.current.querySelector("#count4")!.textContent =
            `${Math.floor(value)}%`;
        }
      },
    });
  }, [isInView]);

  return (
    <section className="relative px-4 pt-8 md:px-6 md:pt-12 lg:pt-24">
      {/* Background */}
      <div className="relative py-8 md:py-12 lg:py-24">
        <motion.div
          className="text-center max-w-[90%] md:max-w-3xl mx-auto mt-8 md:mt-12 lg:mt-16 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          <motion.h2
            className="mb-4 text-3xl font-bold sm:text-2xl md:text-4xl"
            variants={headingVariants}>
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 sm:text-lg"
            variants={paragraphVariants}>
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="py-12 md:py-16 lg:py-24" ref={containerRef}>
          <div className="grid w-full max-w-5xl grid-cols-2 gap-4 px-4 mx-auto md:grid-cols-4 md:gap-8">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="flex flex-col items-center justify-center p-4 text-center transition-shadow bg-white rounded-full aspect-square sm:p-6 md:p-8 hover:shadow-lg">
                    <motion.p
                      id={`count${index + 1}`}
                      className="mb-1 text-2xl font-bold sm:text-3xl md:text-4xl text-primary sm:mb-2"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                      }}>
                      0+
                    </motion.p>
                    <p className="text-xs text-gray-600 sm:text-sm md:text-base">
                      {index === 0 && t("count1")}
                      {index === 1 && t("count2")}
                      {index === 2 && t("count3")}
                      {index === 3 && t("count4")}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountStatscard;

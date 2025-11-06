"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  headingVariants,
  paragraphVariants,
  imageVariants,
} from "@/components/animation/contentVariants";
import { useTranslations } from "next-intl";

const OurPeople = () => {
  const t = useTranslations("ourpeople");
  return (
    <section className="py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <motion.h2
            variants={headingVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {t("title")}
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600">
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Image Container */}
        <motion.div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/teams.jpg"
              alt="Our Team"
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw"
              className="object-cover object-center"
              priority
              quality={90}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPeople;

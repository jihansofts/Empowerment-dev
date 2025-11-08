"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  bannerHeadingVariants,
  bannerSubtitleVariants,
} from "@/components/animation/contentVariants";
import { fadeInUp } from "../animation/variants";
interface CommonBannerProps {
  title: string;
  text?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CommonBanner = ({
  title,
  text,
  subtitle,
  buttonText = "",
  buttonLink = "#",
}: CommonBannerProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/90 to-primary mt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/2 translate-y-1/2 bg-black rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={bannerHeadingVariants} // Use the fixed variant
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </motion.h1>

          {text && (
            <motion.p
              variants={bannerSubtitleVariants} // Use the fixed variant
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/80">
              {text}
            </motion.p>
          )}

          {subtitle && (
            <motion.p
              variants={bannerSubtitleVariants} // Use the fixed variant
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
              {subtitle}
            </motion.p>
          )}

          {buttonText && (
            <motion.div
              variants={bannerSubtitleVariants} // Use the fixed variant
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <Button
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-white text-black overflow-hidden text-base px-6 py-5 rounded-full flex items-center gap-3 mx-auto group w-fit min-w-[160px]"
                asChild>
                <a href={buttonLink}>
                  <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform translate-x-full bg-black group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {buttonText}
                  </span>
                  <div className="relative z-10 p-2.5 rounded-full bg-white transition-colors duration-300 overflow-hidden group-hover:bg-black">
                    <ArrowRight
                      className={`w-5 h-5 text-black absolute inset-0 m-auto transition-all duration-300 ${
                        isHovered
                          ? "translate-x-8 opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    />
                    <ArrowRight
                      className={`w-5 h-5 text-white absolute inset-0 m-auto transition-all duration-300 ${
                        isHovered
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                    />
                  </div>
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default CommonBanner;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { bannerVariants } from "@/components/animation/contentVariants";
import { fadeInUp } from "@/components/animation/variants";

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
      className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/90 to-primary mt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={bannerVariants.heading}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          {text && (
            <motion.p
              variants={bannerVariants.subtitle}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
            >
              {text}
            </motion.p>
          )}

          {subtitle && (
            <motion.p
              variants={bannerVariants.subtitle}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Only render button if buttonText is not empty */}
          {buttonText && (
            <motion.div
              variants={bannerVariants.subtitle}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative bg-white text-black overflow-hidden
                         text-base px-6 py-5 rounded-full 
                         flex items-center gap-3 mx-auto group
                         w-fit min-w-[160px]"
                asChild
              >
                <a href={buttonLink}>
                  {/* Sliding background */}
                  <div
                    className="absolute inset-0 bg-black transform 
                            transition-transform duration-500 ease-in-out
                            translate-x-full group-hover:translate-x-0"
                  />

                  {/* Button content */}
                  <span
                    className="relative z-10 group-hover:text-white 
                             transition-colors duration-300"
                  >
                    {buttonText}
                  </span>

                  <div
                    className="relative z-10 p-2.5 rounded-full bg-white 
                            transition-colors duration-300 overflow-hidden
                            group-hover:bg-black"
                  >
                    <ArrowRight
                      className={`w-5 h-5 text-black
                             absolute inset-0 m-auto transition-all duration-300
                             ${isHovered ? "translate-x-8 opacity-0" : "translate-x-0 opacity-100"}`}
                    />
                    <ArrowRight
                      className={`w-5 h-5 text-white
                               absolute inset-0 m-auto transition-all duration-300
                               ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
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

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInBottom,
  staggerContainer,
  fadeInItem,
} from "@/components/animation/variants";
import AnimateInView from "@/components/animation/AnimateInView";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface WhatWeDoProps {
  services: ServiceCardProps[];
  title?: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      variants={fadeInItem}
      className="group bg-white p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  services,
  title = "",
  description = "",
}) => {
  const firstRow = services.slice(0, 2);
  const secondRow = services.slice(2);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateInView variants={fadeInBottom}>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">
              {description}
            </p>
          </div>
        </AnimateInView>

        <div className="max-w-6xl mx-auto">
          {/* First Row - 2 items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {firstRow.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>

          {/* Second Row - 3 items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondRow.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

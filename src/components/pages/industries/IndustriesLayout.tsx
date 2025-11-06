"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PageTransition from "@/components/animation/PageTransition";
import {
  organizationContainerVariants,
  organizationItemVariants,
} from "@/components/animation/variants";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useTranslations } from "next-intl";

interface CommonLayoutProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
}

const CommonLayout = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: CommonLayoutProps) => {
  const t = useTranslations("industries");
  useScrollTop();
  return (
    <PageTransition>
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={organizationContainerVariants}
        className="bg-primary text-white">
        <div className="container mx-auto px-4 md:px-5 lg:px-7 max-w-8xl py-4 md:py-6">
          <motion.div variants={organizationItemVariants}>
            <Breadcrumb className="mb-4 md:mb-6">
              <BreadcrumbList className="text-xs md:text-sm">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="text-white/80 hover:text-white">
                    {t("menu1")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white font-medium">
                  {t("menu2")}
                </BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Centered Title */}
          <motion.h1
            variants={organizationItemVariants}
            className="text-2xl md:text-4xl font-bold text-center">
            {title}
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.section
        variants={organizationContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Column (Text) */}
            <motion.div
              variants={organizationItemVariants}
              className="space-y-4 md:space-y-6 order-2 lg:order-1">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={organizationItemVariants}
                  className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Right Column (Image) */}
            <motion.div
              variants={organizationItemVariants}
              className="relative w-full h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default CommonLayout;

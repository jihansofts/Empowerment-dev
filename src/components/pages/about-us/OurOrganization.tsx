"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import {
  organizationContainerVariants,
  organizationItemVariants,
} from "@/components/animation/variants";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("ourorganization");
  return (
    <>
      <PageTransition>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={organizationContainerVariants}
          className="min-h-screen relative pt-4 pb-4 md:pt-8 md:pb-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {/* Breadcrumbs with animation */}
            <motion.div variants={organizationItemVariants}>
              <Breadcrumb className="mb-8 md:mb-12">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="text-gray-600 hover:text-primary">
                      {t("menu1")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-gray-400" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-900 font-medium">
                      {t("menu2")}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <motion.div
                variants={organizationItemVariants}
                className="relative w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden order-1">
                <Image
                  src="/images/h2.jpg"
                  alt="About Empowerment Group"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </motion.div>

              {/* Right Column */}
              <motion.div
                variants={organizationItemVariants}
                className="space-y-4 md:space-y-6 order-2">
                <motion.h1
                  variants={organizationItemVariants}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  {t("title")}
                </motion.h1>

                <motion.div
                  variants={organizationItemVariants}
                  className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600">
                  <p className="leading-relaxed">{t("subtitle")}</p>

                  <p className="leading-relaxed">{t("desc")}</p>
                </motion.div>

                <motion.div
                  variants={organizationItemVariants}
                  className="flex flex-col xs:flex-row gap-4 sm:gap-6 pt-4 md:pt-6">
                  <Button
                    asChild
                    className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white 
                         px-6 py-3 rounded-full w-full xs:w-auto text-base group">
                    <Link
                      href="/about-us#ourculture"
                      className="flex items-center justify-center gap-2">
                      {t("btnText")}
                      <span className="relative transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </PageTransition>
    </>
  );
};

export default AboutPage;

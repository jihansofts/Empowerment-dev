"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { serviceDescriptionVariants } from "@/components/animation/contentVariants";
import { useTranslations } from "next-intl";

const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const b = useTranslations("ourservices");
  return (
    <Card
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <CardContent className="p-0 relative">
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
            {description}
          </p>

          <div className="relative w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10">
            <Button
              variant="ghost"
              className={`absolute w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-white group-hover:bg-black 
                flex items-center justify-center transition-all duration-300 
                group-hover:w-[90px] sm:group-hover:w-28 md:group-hover:w-36`}>
              <span
                className={`absolute text-[10px] sm:text-sm whitespace-nowrap
                text-black group-hover:text-white transition-all duration-300
                ${isHovered ? "opacity-100 translate-x-0 left-3" : "opacity-0 -translate-x-4 pointer-events-none"}`}>
                {b("btnText")}
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black group-hover:text-white transition-all duration-300
                ${isHovered ? "translate-x-[30px] sm:translate-x-6 md:translate-x-10" : "translate-x-0"}`}
              />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const OurServices = () => {
  const t = useTranslations("ourservices");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const services = [
    {
      title: t("services1.title"),
      description: t("services1.desc"),
      image: "/images/service1.jpg",
    },
    {
      title: t("services2.title"),
      description: t("services2.desc"),
      image: "/images/service2.jpg",
    },
    {
      title: t("services3.title"),
      description: t("services3.desc"),
      image: "/images/service3.jpg",
    },
    {
      title: t("services4.title"),
      description: t("services4.desc"),
      image: "/images/service4.jpg",
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="allservices"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-gray-50" />
        <div className="h-1/2 bg-primary/100" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </motion.h2>
          <motion.p
            variants={serviceDescriptionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              startIndex: 1,
            }}
            className="w-full max-w-[95%] sm:max-w-[90%] mx-auto">
            <CarouselContent className="-ml-2 sm:-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation and Timeline  */}
            <div className="absolute -bottom-12 sm:-bottom-20 md:-bottom-32 left-1/2 -translate-x-1/2 w-full max-w-[200px] xs:max-w-[280px] sm:max-w-md mt-6 sm:mt-8 md:mt-10">
              <div className="relative flex items-center justify-between py-2 sm:py-8 md:py-12">
                <CarouselPrevious className="relative z-10 bg-white hover:bg-white/90 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20" />

                <div className="absolute left-[16px] xs:left-[28px] sm:left-[40px] md:left-[60px] right-[16px] xs:right-[28px] sm:right-[40px] md:right-[60px] top-[35%] -translate-y-1/2">
                  <div className="h-[2px] w-full bg-gray-300">
                    <div
                      className="absolute h-full bg-black transition-all duration-300"
                      style={{
                        width: `${((current + 1) / services.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <CarouselNext className="relative z-10 bg-white hover:bg-white/90 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

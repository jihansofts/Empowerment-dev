"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInBottom } from "@/components/animation/variants";
import AnimateInView from "@/components/animation/AnimateInView";
import type { CarouselApi } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

interface MethodologyItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface SearchMethodologyProps {
  methodologies: MethodologyItem[];
  title?: string;
  description?: string;
}

const SearchMethodology: React.FC<SearchMethodologyProps> = ({
  methodologies,
}) => {
  const t = useTranslations("leadershipservices");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateInView variants={fadeInBottom}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("methodologytitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              {t("methodologydesc")}
            </p>
          </div>
        </AnimateInView>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
              dragFree: true,
            }}>
            <CarouselContent className="-ml-4">
              {methodologies.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Timeline and Navigation Controls */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <CarouselPrevious variant="outline" className="static" />

              <div className="flex items-center -mt-8">
                <div className="h-[2px] w-[200px] bg-gray-200 relative">
                  {methodologies.map((_, index) => (
                    <div
                      key={index}
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 left-[${index * (100 / (methodologies.length - 1))}%]
                        ${current === index ? "bg-primary scale-150" : "bg-gray-400"}`}
                    />
                  ))}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary transition-all duration-300"
                    style={{
                      left: "0%",
                      width: `${(current / (methodologies.length - 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <CarouselNext variant="outline" className="static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SearchMethodology;

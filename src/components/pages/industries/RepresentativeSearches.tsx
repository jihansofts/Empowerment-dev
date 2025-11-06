"use client";

import { motion } from "framer-motion";
import { fadeInBottom } from "@/components/animation/variants";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface RepresentativeSearch {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

interface RepresentativeSearchesProps {
  searches: RepresentativeSearch[];
  description?: string;
}

const RepresentativeSearches: React.FC<RepresentativeSearchesProps> = ({
  searches,
  description,
}) => {
  const t = useTranslations("buildingmaterials");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInBottom}
      className="max-w-4xl mx-auto px-0 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
        {t("representativetitle")}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
        {description}
      </p>
      <div className="space-y-4 sm:space-y-6">
        {searches.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInBottom}
              className="flex items-start gap-3 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl border hover:shadow-md transition-all duration-300 mx-4 sm:mx-0">
              <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border">
                <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RepresentativeSearches;

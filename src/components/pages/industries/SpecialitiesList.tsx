"use client";

import { motion } from "framer-motion";
import { fadeInBottom } from "@/components/animation/variants";
import { useTranslations } from "next-intl";

interface SpecialitiesListProps {
  specialities: string[];
}

const SpecialitiesList: React.FC<SpecialitiesListProps> = ({
  specialities,
}) => {
  const t = useTranslations("buildingmaterials");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInBottom}
      className="max-w-4xl mx-auto">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          {t("specialitytitle")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
          {specialities.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SpecialitiesList;

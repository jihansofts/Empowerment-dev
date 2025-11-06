"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const drawerVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 25,
      damping: 35,
      mass: 1,
      duration: 0.8,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 22,
      mass: 1,
      duration: 0.6,
    },
  },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("contactpop");

  return (
    <div className="fixed bottom-0 right-0 z-[9999]">
      <AnimatePresence mode="wait">
        <div className="w-[150px] xs:w-[200px] sm:w-[220px]">
          {isOpen ? (
            <motion.div
              variants={drawerVariants}
              initial="initial"
              animate="animate"
              className="bg-white rounded-t-lg shadow-lg">
              {/* Header */}
              <div
                className="flex items-center justify-between p-2 sm:p-3 cursor-pointer bg-black text-white rounded-t-lg" // Added smaller padding for mobile
                onClick={() => setIsOpen(false)}>
                <h3 className="text-xs sm:text-sm font-semibold">
                  {t("title")}
                </h3>
                <div className="bg-white/10 rounded-full p-1 sm:p-1.5 hover:bg-white/20 transition-colors">
                  <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </div>
              </div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {/* Corporates Section */}
                <div>
                  <h4 className="font-medium mb-1 text-black text-xs sm:text-sm">
                    {t("subtitle1")}
                  </h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs mb-1.5">
                    {t("desc1")}
                  </p>
                  <div className="space-y-0.5 text-[10px] sm:text-xs text-gray-800">
                    <p>{t("phone")}: +40784805998</p>
                    <p>{t("email")}: info@empowerment.group</p>
                  </div>
                </div>

                {/* Candidates Section */}
                <div>
                  <h4 className="font-medium mb-1 text-black text-xs sm:text-sm">
                    {t("subtitle2")}
                  </h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs mb-1.5">
                    {t("desc2")}
                  </p>
                  <Link
                    href="/contact-us"
                    className="text-blue-600 hover:text-blue-700 text-[10px] sm:text-xs">
                    {t("btnText")}
                  </Link>
                </div>

                {/* Warning Section */}
                <div className="text-[10px] sm:text-xs text-red-600 pt-2 border-t border-gray-200">
                  <strong>Beware:</strong> {t("desc3")}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 0.8,
                duration: 0.4,
              }}
              className="bg-black text-white p-2 sm:p-3 cursor-pointer flex items-center justify-between hover:bg-black/90 rounded-t-lg" // Changed rounded-lg to rounded-t-lg
              onClick={() => setIsOpen(true)}>
              <span className="text-xs sm:text-sm font-semibold">
                {t("title")}
              </span>
              <div className="bg-white/10 rounded-full p-1 sm:p-1.5 hover:bg-white/20 transition-colors">
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;

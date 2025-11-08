"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("industries");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const t = useTranslations("nav");
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, isOpen]);

  const toggleSubmenu = (menu: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu]
    );
  };

  if (!isMobile) return null;

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="md:hidden fixed top-[1.25rem] right-4 z-50 bg-white shadow-md hover:bg-gray-50 h-10 w-10"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="p-6 space-y-8">
                <div className="mb-6">
                  <button
                    onClick={() => toggleSubmenu("about")}
                    className="flex items-center justify-between w-full p-2 text-lg font-bold"
                  >
                    <span>About</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedMenus.includes("about") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedMenus.includes("about") ? "auto" : 0,
                      opacity: expandedMenus.includes("about") ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="py-2 pl-4 space-y-2">
                      <li>
                        <Link
                          href="/about-us"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Our Organization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us#journey"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Our Journey
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us#ourculture"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Our Culture
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
                <div className="mb-6">
                  <button
                    onClick={() => toggleSubmenu("services")}
                    className="flex items-center justify-between w-full p-2 text-lg font-bold"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedMenus.includes("services") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedMenus.includes("services") ? "auto" : 0,
                      opacity: expandedMenus.includes("services") ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="py-2 pl-4 space-y-2">
                      <li>
                        <Link
                          className="block p-2 text-base font-medium rounded-md hover:bg-accent"
                          href="/services/recruitment-solutions"
                        >
                          {t("board")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block p-2 font-medium rounded-md hover:bg-accent"
                          href="/services/executive-search"
                        >
                          {t("executive")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block p-2 font-medium rounded-md hover:bg-accent"
                          href="/services/hr-consulting"
                        >
                          {t("leadership")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block p-2 font-medium rounded-md hover:bg-accent"
                          href="/services/talent-assessment"
                        >
                          {t("telant")}
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
                <div className="mb-6">
                  <button
                    onClick={() => toggleSubmenu("partner")}
                    className="flex items-center justify-between w-full p-2 text-lg font-bold"
                  >
                    <span>Partner With Us</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedMenus.includes("partner") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedMenus.includes("partner") ? "auto" : 0,
                      opacity: expandedMenus.includes("partner") ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="py-2 pl-4 space-y-2">
                      <li>
                        <Link
                          href="/partner-with/become-agent"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Become an Agent
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/partner-with/our-success"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Our Success Stories
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Expertise Section */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSubmenu("expertise")}
                    className="flex items-center justify-between w-full p-2 text-lg font-bold"
                  >
                    <span>Expertise</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedMenus.includes("expertise") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedMenus.includes("expertise") ? "auto" : 0,
                      opacity: expandedMenus.includes("expertise") ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-4 mb-4 border-b">
                      <button
                        className={`pb-2 font-medium transition-colors relative ${
                          activeTab === "industries"
                            ? "text-primary border-b-2 border-primary -mb-[2px]"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("industries")}
                      >
                        Industries
                      </button>
                    </div>
                    <ul className="py-2 pl-4 space-y-2">
                      <li>
                        <Link
                          href="/expertise/building-materials"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Building Materials
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/expertise/education"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/expertise/industrial"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Industrial
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/expertise/development"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/expertise/real-estate"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Real Estate
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/expertise/technology"
                          className="block p-2 rounded-md hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          Technology
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;

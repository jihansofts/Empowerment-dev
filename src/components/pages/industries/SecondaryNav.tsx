"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SearchMethodology from "../services/SearchMethodology";
import SpecialitiesList from "./SpecialitiesList";
import RepresentativeSearches from "./RepresentativeSearches";
import { LucideIcon } from "lucide-react";
// import { useTranslations } from "next-intl";

interface RepresentativeSearch {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

interface MethodologyItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface SecondaryNavProps {
  specialities: string[];
  methodologies: MethodologyItem[];
  representativeSearches: RepresentativeSearch[];
}

const SecondaryNav: React.FC<SecondaryNavProps> = ({
  specialities,
  methodologies,
  representativeSearches,
}) => {
  // const t = useTranslations("secondarynav");
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("specialities");

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById("secondary-nav");
      if (navElement) {
        const sticky = navElement.offsetTop;
        setIsSticky(window.scrollY > sticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="secondary-nav"
        className={cn(
          "bg-white border-b z-40 sticky top-16 sm:top-20 left-0 right-0 transition-all duration-300 overflow-x-auto",
          isSticky ? "shadow-md" : ""
        )}>
        <div className="container mx-auto px-2 sm:px-4">
          <ul className="flex items-center min-w-max sm:justify-center space-x-4 sm:space-x-8">
            {[
              "Specialities",
              "Search Methodology",
              "Representative Searches",
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    setActiveSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className={cn(
                    "py-3 sm:py-4 px-1 sm:px-2 relative text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                    activeSection === item.toLowerCase().replace(" ", "-")
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  )}>
                  {item}
                  {activeSection === item.toLowerCase().replace(" ", "-") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="space-y-12 sm:space-y-24 py-8 sm:py-16 px-4 sm:px-0">
        {activeSection === "specialities" && (
          <SpecialitiesList specialities={specialities} />
        )}

        {activeSection === "search-methodology" && (
          <SearchMethodology methodologies={methodologies} />
        )}

        {activeSection === "representative-searches" && (
          <RepresentativeSearches searches={representativeSearches} />
        )}
      </div>
    </>
  );
};

export default SecondaryNav;

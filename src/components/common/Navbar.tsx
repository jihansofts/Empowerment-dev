"use client";

import React, { HTMLAttributes, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "../LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
// import { ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const Navbar: React.FC<HTMLAttributes<HTMLElement>> = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations("nav");

  // Reset active menu when pathname changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Empowerment Group"
                  width={120}
                  height={32}
                  priority
                  className="w-auto h-6 sm:h-8 md:h-10" // Smaller on mobile
                />
              </Link>
            </div>

            {!isMobile && (
              <div className="hidden md:block h-8 w-[2px] bg-gray-300" />
            )}

            {/* Main Navigation */}
            {!isMobile && (
              <div className="hidden md:block">
                <NavigationMenu
                  value={activeMenu}
                  onValueChange={setActiveMenu}>
                  <NavigationMenuList className="flex items-center md:gap-1 lg:gap-3">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/about-us") ? "text-primary" : ""
                        }`}>
                        {t("about")}
                        {isActive("/about-us") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <ul className="min-w-[400px] p-4 space-y-3">
                          <li>
                            <Link
                              className="block p-2 text-base font-medium rounded-md hover:bg-accent"
                              href="/about-us">
                              {t("organization")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/about-us#journey">
                              {t("journey")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/about-us#ourculture">
                              {t("culture")}
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/services") ? "text-primary" : ""
                        }`}>
                        {t("services")}
                        {isActive("/services") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li>
                            <Link
                              className="block p-2 text-base font-medium rounded-md hover:bg-accent"
                              href="/services/recruitment-solutions">
                              {t("board")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/services/executive-search">
                              {t("executive")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/services/hr-consulting">
                              {t("leadership")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/services/talent-assessment">
                              {t("talent")}
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`text-lg font-semibold relative group ${
                          isActive("/partner-with") ? "text-primary" : ""
                        }`}>
                        Partners
                        {isActive("/partner-with") && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-t-2 border-t-primary">
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li>
                            <Link
                              className="block p-2 text-base font-medium rounded-md hover:bg-accent"
                              href="/partner-with/become-agent">
                              Become an Agent
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block p-2 font-medium rounded-md hover:bg-accent"
                              href="/partner-with/our-success">
                              Our Success Stories
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <Link
                    href="/areas-of-expertise"
                    className="relative flex items-center justify-center px-2 md:px-6">
                    <span className="relative z-10">Areas of Expertise</span>
                    <div className="absolute inset-0 transition-transform duration-300 ease-out origin-top-right transform scale-0 rounded-full bg-primary/90 group-hover:scale-100" />
                  </Link>

                  <Link
                    href="/careers"
                    className="relative flex items-center justify-center px-2 md:px-6">
                    <span className="relative z-10">Careers</span>
                    <div className="absolute inset-0 transition-transform duration-300 ease-out origin-top-right transform scale-0 rounded-full bg-primary/90 group-hover:scale-100" />
                  </Link>
                  <NavigationMenuViewport />
                </NavigationMenu>
              </div>
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center justify-between gap-1 mr-7">
            <Button
              asChild
              variant="default"
              className="relative px-2 mr-4 overflow-hidden text-xs text-white transition-all duration-300 bg-black rounded-full h-7 md:h-10 md:text-base group md:mr-0 md:px-6">
              <Link
                href="/contact-us"
                className="relative flex items-center justify-center px-2 md:px-6">
                <span className="relative z-10">{t("contact")}</span>
                <div className="absolute inset-0 transition-transform duration-300 ease-out origin-top-right transform scale-0 rounded-full bg-primary/90 group-hover:scale-100" />
              </Link>
            </Button>
            <div className="z-100">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

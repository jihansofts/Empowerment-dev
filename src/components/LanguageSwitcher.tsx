"use client";
import { ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "hr", name: "Croatian" },
  { code: "ro", name: "Romanian" },
  { code: "sr", name: "Serbian" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
] as const;

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  // Get current language from URL
  const currentLang = pathname.split("/")[1];
  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    if (lang === currentLang) return;
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    router.push(`/${lang}${pathWithoutLang}`);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  // Mobile version - simplified
  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium">
          <span>{activeLang.name}</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="pl-12 pb-2 space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={lang.code === currentLang}
                className={`flex items-center gap-2 w-full px-4 py-2 text-left ${
                  lang.code === currentLang ? "opacity-50" : ""
                }`}>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version
  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="flex justify-center items-center">
        <span className="text-gray-500">
          <Globe className="h-5 w-5" />
        </span>
        <button
          type="button"
          className="flex items-center gap-1 text-primary px-3 py-2 text-sm font-medium hover:underline">
          <span>{activeLang.name}</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-md shadow-lg z-50 border border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={lang.code === currentLang}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm ${
                  lang.code === currentLang
                    ? "bg-gray-100 cursor-not-allowed opacity-70"
                    : "hover:bg-gray-100"
                }`}>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

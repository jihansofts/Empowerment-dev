import ExecutiveSearch from "@/components/pages/services/ExecutiveSearch";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { Search, Users, Briefcase, ChartBar, CheckCircle } from "lucide-react";
import SearchMethodlogy from "@/components/pages/services/SearchMethodology";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Executive Search - Empowerment Group",
  description:
    "Our Executive Search practice specializes in identifying and attracting top-tier leadership talent for organizations across industries.",
};

export default function ExecutiveSearchPage() {
  const t = useTranslations("executivesearch");
  const b = useTranslations("banner4");
  const executiveSearchServices = [
    // update content
    {
      title: t("executive1.title"),
      description: t("executive1.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=500&fit=crop",
    },
    {
      title: t("executive2.title"),
      description: t("executive2.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
    },
    {
      title: t("executive3.title"),
      description: t("executive3.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop",
    },
    {
      title: t("executive4.title"),
      description: t("executive4.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop",
    },
    {
      title: t("executive5.title"),
      description: t("executive5.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop",
    },
  ];

  const methodologies = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: t("methodologie1.title"),
      subtitle: t("methodologie1.desc"),
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t("methodologie2.title"),
      subtitle: t("methodologie2.desc"),
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: t("methodologie3.title"),
      subtitle: t("methodologie3.desc"),
    },
    {
      icon: <ChartBar className="w-8 h-8 text-primary" />,
      title: t("methodologie4.title"),
      subtitle: t("methodologie4.desc"),
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: t("methodologie5.title"),
      subtitle: t("methodologie5.desc"),
    },
  ];

  return (
    <>
      <ExecutiveSearch />
      <WhatWeDo
        services={executiveSearchServices}
        title={t("title2")}
        description={t("description")}
      />
      <SearchMethodlogy methodologies={methodologies} />
      <CommonBanner
        title={b("titlebanner")}
        text={b("subtitlebanner")}
        buttonText={b("btnText")}
        buttonLink="/contact-us"
      />
    </>
  );
}

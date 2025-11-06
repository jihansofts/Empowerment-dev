import LeadershipHiring from "@/components/pages/services/LeadershipHiring";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { Search, Users, Briefcase, ChartBar, CheckCircle } from "lucide-react";
import SearchMethodlogy from "@/components/pages/services/SearchMethodology";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Leadership Hiring - Empowerment Group",
  description:
    "Our Leadership Hiring services help organizations identify and attract exceptional talent for key leadership positions across various levels.",
};

export default function LeadershipHiringPage() {
  const t = useTranslations("leadershipservices");
  const b = useTranslations("banner5");
  const leadershipServices = [
    {
      title: t("leadership1.title"),
      description: t("leadership1.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop",
    },
    {
      title: t("leadership2.title"),
      description: t("leadership2.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop",
    },
    {
      title: t("leadership3.title"),
      description: t("leadership3.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=500&fit=crop",
    },
    {
      title: t("leadership4.title"),
      description: t("leadership4.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop",
    },
    {
      title: t("leadership5.title"),
      description: t("leadership5.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop",
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
      <LeadershipHiring />
      <WhatWeDo
        services={leadershipServices}
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

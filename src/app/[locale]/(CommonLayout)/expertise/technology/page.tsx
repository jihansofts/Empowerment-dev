"use client";

import IndustiresLayout from "@/components/pages/industries/IndustriesLayout";
import SecondaryNav from "@/components/pages/industries/SecondaryNav";
import CommonBanner from "@/components/common/CommonBanner";
import {
  Search,
  Users,
  CheckCircle,
  BarChart,
  ClipboardCheck,
  HandshakeIcon,
} from "lucide-react";
import {
  Code,
  Cloud,
  Database,
  Shield,
  Cpu,
  Brain,
  Smartphone,
  Users2,
} from "lucide-react";
import { useTranslations } from "next-intl";

const TechnologyPage = () => {
  const t = useTranslations("technology");
  const b = useTranslations("banner11");
  const des = t.raw("desc");
  const spacil = t.raw("specialitie");
  const specialities = spacil.map((item) => item);

  const representativeSearches = [
    {
      icon: Code,
      title: t("representative1.title"),
      subtitle: t("representative1.desc"),
    },
    {
      icon: Cloud,
      title: t("representative2.title"),
      subtitle: t("representative2.desc"),
    },
    {
      icon: Database,
      title: t("representative3.title"),
      subtitle: t("representative3.desc"),
    },
    {
      icon: Shield,
      title: t("representative4.title"),
      subtitle: t("representative4.desc"),
    },
    {
      icon: Cpu,
      title: t("representative5.title"),
      subtitle: t("representative5.desc"),
    },
    {
      icon: Brain,
      title: t("representative6.title"),
      subtitle: t("representative6.desc"),
    },
    {
      icon: Smartphone,
      title: t("representative7.title"),
      subtitle: t("representative7.desc"),
    },
    {
      icon: Users2,
      title: t("representative8.title"),
      subtitle: t("representative8.desc"),
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
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: t("methodologie3.title"),
      subtitle: t("methodologie3.desc"),
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: t("methodologie4.title"),
      subtitle: t("methodologie4.desc"),
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: t("methodologie5.title"),
      subtitle: t("methodologie5.desc"),
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
      title: t("methodologie6.title"),
      subtitle: t("methodologie6.desc"),
    },
  ];

  return (
    <>
      <IndustiresLayout
        title={t("title2")}
        description={des}
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop"
        imageAlt="Technology Innovation"
      />
      <SecondaryNav
        specialities={specialities}
        methodologies={methodologies}
        representativeSearches={representativeSearches}
      />
      <CommonBanner
        title={b("titlebanner")}
        subtitle={b("subtitlebanner")}
        buttonText={b("btnText")}
        buttonLink="/contact-us"
      />
    </>
  );
};

export default TechnologyPage;

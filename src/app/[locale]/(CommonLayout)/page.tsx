"use client";

import Hero from "@/components/pages/home/Hero";
import CountStatscard from "@/components/pages/home/CountStatscard";
import OurPeople from "@/components/pages/home/OurPeople";
import OurJourney from "@/components/pages/home/OurJourney";
import IndustrySpecialization from "@/components/pages/home/IndustrySpecialisation";
import OurServices from "@/components/pages/home/OurServices";
import CommonBanner from "@/components/common/CommonBanner";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("banner1");
  useScrollTop();

  return (
    <main>
      <Hero />
      <CountStatscard />
      <OurPeople />
      <OurJourney />
      <IndustrySpecialization />
      <OurServices />
      <CommonBanner
        title={t("title")}
        subtitle={t("subtitle")}
        buttonText={t("btnText")}
        buttonLink="/contact-us"
      />
    </main>
  );
}

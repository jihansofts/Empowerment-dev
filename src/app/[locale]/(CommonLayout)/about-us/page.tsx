import React from "react";
import OurOrganization from "@/components/pages/about-us/OurOrganization";
import OurJourney from "@/components/pages/home/OurJourney";
import CommonBanner from "@/components/common/CommonBanner";
import OurCulture from "@/components/pages/about-us/OurCulture";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About Us - Empowerment Group",
  description:
    "Empowerment Group is a leading recruitment consultancy offering professional recruitment and talent acquisition services to companies in India and abroad.",
};

export default function About() {
  const t = useTranslations("banner2");
  return (
    <>
      <OurOrganization />
      <OurJourney />
      <OurCulture />
      <CommonBanner
        title={t("title")}
        subtitle={t("subtitle")}
        buttonText={t("btnText")}
        buttonLink="/contact-us"
      />
    </>
  );
}

import BoardAdvisoryServices from "@/components/pages/services/BoardAdvisoryServices";
import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import WhatWeDo from "@/components/pages/services/WhatWeDo";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Board Advisory Services - Empowerment Group",
  description:
    "Empowerment Group is a leading recruitment consultancy offering professional recruitment and talent acquisition services to companies in India and abroad.",
};

export default function BoardAdvisoryServicesPage() {
  const t = useTranslations("boardadvisoryservices");
  const b = useTranslations("banner3");
  const boardAdvisoryServices = [
    {
      title: t("advisory1.title"),
      description: t("advisory1.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
    },
    {
      title: t("advisory2.title"),
      description: t("advisory2.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop",
    },
    {
      title: t("advisory3.title"),
      description: t("advisory3.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=500&fit=crop",
    },
    {
      title: t("advisory4.title"),
      description: t("advisory4.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=500&fit=crop",
    },
    {
      title: t("advisory5.title"),
      description: t("advisory5.desc"),
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop",
    },
  ];
  return (
    <>
      <BoardAdvisoryServices />
      <WhatWeDo
        services={boardAdvisoryServices}
        title={t("title")}
        description={t("desc")}
      />
      <CommonBanner title={b("titlebanner")} />
    </>
  );
}

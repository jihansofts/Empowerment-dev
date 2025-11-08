import IndustrySpecialisation from "@/components/pages/home/IndustrySpecialisation";
import HeroRecruitmentSolution from "@/components/pages/recruitment-solutions/HeroRecuitmentSolution";
import OurProcess from "@/components/pages/recruitment-solutions/OurProcess";
import WhyEmpowermentRecruitment from "@/components/pages/recruitment-solutions/WhyEmpowermentRecuitement";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroRecruitmentSolution />
      <OurProcess />
      <IndustrySpecialisation />
      <WhyEmpowermentRecruitment />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInItem,
} from "@/components/animation/variants";
import { Shield, Target, Users, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

const OurCulture = () => {
  const t = useTranslations("ourculture");
  const cultureItems = [
    {
      id: 1,
      icon: Shield,
      title: t("culture1.title"),
      description: t("culture1.desc"),
    },
    {
      id: 2,
      icon: Target,
      title: t("culture2.title"),
      description: t("culture2.desc"),
    },
    {
      id: 3,
      icon: Users,
      title: t("culture3.title"),
      description: t("culture3.desc"),
    },
    {
      id: 4,
      icon: Lightbulb,
      title: t("culture4.title"),
      description: t("culture4.desc"),
    },
  ];
  return (
    <section id="ourculture" className="py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </motion.div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInItem}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurCulture;

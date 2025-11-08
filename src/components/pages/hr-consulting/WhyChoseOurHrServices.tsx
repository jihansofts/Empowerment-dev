"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaAward,
  FaShieldAlt,
  FaHandshake,
  FaHeart,
  FaStar,
  FaLightbulb,
  FaCrown,
} from "react-icons/fa";
import Link from "next/link";

export default function WhyChoseOurHrServices() {
  const features = [
    {
      icon: FaRocket,
      title: "Accelerated Growth",
      description:
        "We propel your business forward with strategic HR solutions that drive exponential growth and market leadership.",
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: FaUsers,
      title: "Elite Talent Network",
      description:
        "Access our curated network of top-tier professionals who are ready to make an immediate impact on your organization.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: FaChartLine,
      title: "Data-Driven Excellence",
      description:
        "Leverage cutting-edge analytics and insights to make informed decisions that optimize your human capital investment.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: FaAward,
      title: "Industry Recognition",
      description:
        "Join the ranks of successful companies that have transformed their HR operations with our award-winning approach.",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4,
    },
    {
      icon: FaShieldAlt,
      title: "Risk-Free Partnership",
      description:
        "Experience peace of mind with our comprehensive compliance management and risk mitigation strategies.",
      color: "from-red-500 to-pink-500",
      delay: 0.5,
    },
    {
      icon: FaHandshake,
      title: "Long-Term Partnership",
      description:
        "We build lasting relationships focused on your sustained success, not just temporary solutions.",
      color: "from-indigo-500 to-purple-500",
      delay: 0.6,
    },
  ];

  const stats = [
    { number: "95%", label: "Client Satisfaction Rate", icon: FaHeart },
    { number: "100+", label: "Companies Transformed", icon: FaStar },
    { number: "24/7", label: "Dedicated Support", icon: FaShieldAlt },
    { number: "99%", label: "Retention Success", icon: FaCrown },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-[800px] h-[800px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/logo/round.png"
              alt="Background Pattern"
              width={800}
              height={800}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-gray-200 shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaStar className="text-[#E23D51] text-xl" />
            </motion.div>
            <span className="text-gray-700 font-semibold text-lg">
              The Empowerment Recruitment Difference
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Our
            <motion.span
              className="block bg-gradient-to-r from-[#E23D51] to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              HR Services?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At{" "}
            <span className="font-semibold text-[#E23D51]">
              Empowerment Recruitment
            </span>
            , we don&apos;t just fill positions—we transform organizations by
            connecting you with exceptional talent that drives innovation,
            culture, and sustainable growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#E23D51]/20" />

              <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 2,
                  }}
                >
                  <Image
                    src="/logo/round.png"
                    alt="Feature Background"
                    width={200}
                    height={200}
                    className="object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                    }}
                  />
                </motion.div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col">

                <motion.div
                  className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:shadow-xl w-16 h-16 flex items-center justify-center mx-auto`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    rotate: { duration: 0.6 },
                  }}
                >
                  <feature.icon className="text-2xl" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#E23D51] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center flex-1 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#E23D51] to-purple-600 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record of Excellence
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional
              results and building lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-[#E23D51] mb-3 flex items-center justify-center gap-3"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon className="text-2xl opacity-80" />
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-semibold text-lg group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#E23D51] to-purple-600 rounded-3xl p-1 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies that have
                transformed their HR strategy with Empowerment Recruitment.
                Let&apos;s build your dream team together.
              </p>
              <Link
                href={"/contact-us"}
                className="px-12 py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-3 mx-auto"
                style={{
                  background: "linear-gradient(45deg, #E23D51, #ff6b7a)",
                }}
              >
                Start Your Transformation Journey
                <FaLightbulb className="group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

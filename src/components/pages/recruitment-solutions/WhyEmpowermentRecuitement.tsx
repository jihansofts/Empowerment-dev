"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaAward,
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

export default function WhyEmpowermentRecruitment() {
  const features = [
    {
      icon: FaHandshake,
      title: "Partnership Approach",
      description:
        "We build lasting relationships, not just fill positions. Your success is our success.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaUsers,
      title: "Community Focus",
      description:
        "We connect you with talent that shares your values and vision for growth.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: FaChartLine,
      title: "Growth Mindset",
      description:
        "We find candidates who are ready to grow with your company and drive results.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: FaHeart,
      title: "Passion-Driven",
      description:
        "We match you with people who are genuinely passionate about your industry.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaShieldAlt,
      title: "Trust & Reliability",
      description:
        "Proven track record of successful placements and long-term satisfaction.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description:
        "Creative approaches to finding the perfect talent for your unique needs.",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  const stats = [
    { number: "1K+", label: "Success Stories", icon: FaHeart },
    { number: "95%", label: "Client Satisfaction", icon: FaStar },
    { number: "24/7", label: "Dedicated Support", icon: FaHandshake },
    { number: "100+", label: "Partner Companies", icon: FaAward },
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
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-8 gap-12">
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              <Image
                src="/logo/round.png"
                alt="Background Pattern"
                width={40}
                height={40}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-6 border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-2 h-2 bg-[#E23D51] rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Why Choose Empowerment Recruitment
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            More Than Just
            <span className="text-[#E23D51] block">Recruitment</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We believe in building meaningful connections that empower
            businesses to thrive and individuals to achieve their career dreams.
            Our approach goes beyond matching skills—we match passion, purpose,
            and potential.
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
              className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#E23D51] transition-all duration-300 group hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 opacity-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={32}
                  height={32}
                />
              </motion.div>

              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon className="text-white text-2xl" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E23D51] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E23D51] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#E23D51] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#E23D51] to-pink-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-3 gap-16">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-center items-center"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src="/logo/round.png"
                      alt="Background Logo"
                      width={80}
                      height={80}
                      className="text-white"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Empower Your Team?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Lets work together to build a team that drives your business
                forward and creates lasting success stories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact-us"
                    className="bg-white text-[#E23D51] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3"
                  >
                    Start Your Journey
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              <motion.p
                className="text-white/80 text-sm mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                Join 100+ companies that trust us with their growth
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaSearch,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaHandshake,
  FaHeart,
  FaAward,
} from "react-icons/fa";
import Link from "next/link";

export default function HeroRecruitmentSolution() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
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

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const features = [
    {
      icon: FaSearch,
      text: "Precision Candidate Matching",
    },
    {
      icon: FaUsers,
      text: "Talent Community Building",
    },
    {
      icon: FaRocket,
      text: "Streamlined Hiring Process",
    },
    {
      icon: FaShieldAlt,
      text: "Secure & Trusted Platform",
    },
  ];

  const stats = [
    { number: "1K+", label: "Success Stories", icon: FaHeart },
    { number: "95%", label: "Client Satisfaction", icon: FaStar },
    { number: "24/7", label: "Dedicated Support", icon: FaHandshake },
    { number: "100+", label: "Partner Companies", icon: FaAward },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recuitement soulution.jpg"
          alt="Professional Recruitment Solutions"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#E23D51] rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-20 h-20 bg-[#E23D51] rounded-full flex items-center justify-center">
          <FaStar className="text-white text-2xl" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-16 h-16 bg-[#E23D51] rounded-full flex items-center justify-center">
          <FaHeart className="text-white text-xl" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-10 z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaCheckCircle className="text-[#E23D51] text-lg" />
            </motion.div>
            <span className="text-white text-lg font-semibold">
              Trusted by 100+ Leading Companies
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Find Your
            <motion.span
              className="block text-[#E23D51]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(226, 61, 81, 0.5)",
                  "0 0 30px rgba(226, 61, 81, 0.8)",
                  "0 0 20px rgba(226, 61, 81, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Perfect Match
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-8 max-w-5xl mx-auto leading-relaxed font-light"
          >
            Connecting{" "}
            <span className="text-[#E23D51] font-semibold">
              exceptional talent
            </span>{" "}
            with{" "}
            <span className="text-[#E23D51] font-semibold">
              extraordinary opportunities
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Experience the human touch in recruitment. Our expert team combines
            industry knowledge with personalized service to create meaningful
            connections that transform careers and businesses.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(226, 61, 81, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact-us"
                className="bg-[#E23D51] hover:bg-[#d42a4a] text-white px-12 py-5 rounded-full font-bold text-xl flex items-center gap-4 group transition-all duration-300"
              >
                Start Your Success Story
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center group cursor-pointer hover:bg-white/15 transition-all duration-500"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-20 h-20 bg-gradient-to-br from-[#E23D51] to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-[#E23D51]/30"
                >
                  <feature.icon className="text-white text-3xl" />
                </motion.div>
                <h3 className="text-white font-bold text-lg lg:text-xl">
                  {feature.text}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 1 + index * 0.1,
                  }}
                  className="text-4xl lg:text-5xl font-bold text-[#E23D51] mb-3 flex items-center justify-center gap-3"
                >
                  <stat.icon className="text-2xl opacity-80" />
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-lg font-semibold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

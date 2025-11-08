"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";
import PageTransition from "@/components/animation/PageTransition";

export default function HeroHrConsulting() {
  const stats = [
    { number: "100+", label: "Companies Transformed", icon: FaUsers },
    { number: "95%", label: "Client Satisfaction", icon: FaStar },
    { number: "24/7", label: "Expert Support", icon: FaShieldAlt },
    { number: "1000+", label: "Success Stories", icon: FaHeart },
  ];

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

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hr consultance.jpg"
            alt="HR Consulting Professionals"
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
              className="absolute w-2 h-2 bg-[#E23D51] rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
            <FaUsers className="text-white text-2xl" />
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
            <FaChartLine className="text-white text-xl" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaStar className="text-[#E23D51] text-lg" />
                  </motion.div>
                  <span className="text-white text-lg font-semibold">
                    Trusted by 100+ Leading Companies
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  Transform Your
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
                    HR Vision
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl text-white/90 mb-8 leading-relaxed font-light"
                >
                  Empowering businesses with strategic HR solutions that drive
                  <span className="text-[#E23D51] font-semibold"> growth</span>,
                  foster{" "}
                  <span className="text-[#E23D51] font-semibold">
                    innovation
                  </span>
                  , and build{" "}
                  <span className="text-[#E23D51] font-semibold">
                    exceptional teams
                  </span>
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-white/80 mb-12 leading-relaxed font-normal"
                >
                  We partner with forward-thinking organizations to create
                  workplace environments where talent thrives, culture
                  flourishes, and business objectives are consistently exceeded.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6 mb-12"
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
                      Start Your Transformation
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
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
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
                        className="text-3xl lg:text-4xl font-bold text-[#E23D51] mb-2 flex items-center justify-center gap-2"
                      >
                        <stat.icon className="text-xl opacity-80" />
                        {stat.number}
                      </motion.div>
                      <div className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

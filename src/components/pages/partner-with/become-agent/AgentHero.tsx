"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaArrowRight, FaCrown, FaGem } from "react-icons/fa";
import PageTransition from "@/components/animation/PageTransition";

export default function AgentHero() {
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
            src="/images/partner.avif"
            alt="Successful Partnership Network"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/80" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
    
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#E23D51] opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {i % 3 === 0 ? (
                <FaGem className="text-2xl" />
              ) : i % 3 === 1 ? (
                <FaCrown className="text-2xl" />
              ) : (
                <FaStar className="text-2xl" />
              )}
            </motion.div>
          ))}

          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E23D51] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
              <div className="text-white">
             
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E23D51] to-pink-600 rounded-full px-6 py-3 mb-8 shadow-2xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaCrown className="text-white text-lg" />
                  </motion.div>
                  <span className="text-white font-bold text-lg">
                    Partnering With Us To Grow Together
                  </span>
                </motion.div>

      
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  Join Our
                  <motion.span
                    className="block bg-gradient-to-r from-[#E23D51] via-yellow-400 to-[#E23D51] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Success Network
                  </motion.span>
                </motion.h1>


                <motion.p
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl text-white/90 mb-8 leading-relaxed font-light"
                >
                  Build Your Legacy with Our
                  <span className="text-[#E23D51] font-semibold">
                    {" "}
                    Most Trusted{" "}
                  </span>
                  Recruitment Partnership Program
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-white/80 mb-12 leading-relaxed font-normal"
                >
                  Unlock unprecedented earning potential while transforming
                  careers and businesses. Join a community of elite
                  professionals who are redefining recruitment excellence across
                  India.
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
                      className="bg-gradient-to-r from-[#E23D51] to-pink-600 text-white px-12 py-5 rounded-full font-bold text-xl flex items-center gap-4 group transition-all duration-300"
                    >
                      Start Your Journey
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>{" "}
    </PageTransition>
  );
}

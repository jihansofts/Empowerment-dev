"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaSearch,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaStar,
  FaHeart,
} from "react-icons/fa";

export default function OurProcess() {
  const processSteps = [
    {
      step: "01",
      icon: FaSearch,
      title: "Understand Your Needs",
      description:
        "We take time to deeply understand your company culture, team dynamics, and specific requirements to find the perfect fit",
      delay: 0.1,
    },
    {
      step: "02",
      icon: FaUsers,
      title: "Talent Discovery",
      description:
        "Our experienced team actively seeks out exceptional candidates who match your values and technical requirements",
      delay: 0.2,
    },
    {
      step: "03",
      icon: FaHandshake,
      title: "Meaningful Connections",
      description:
        "We facilitate genuine conversations that help both parties discover mutual fit and shared vision for success",
      delay: 0.3,
    },
    {
      step: "04",
      icon: FaHeart,
      title: "Perfect Matching",
      description:
        "Carefully evaluating skills, personality, and aspirations to create lasting and successful partnerships",
      delay: 0.4,
    },
    {
      step: "05",
      icon: FaRocket,
      title: "Smooth Onboarding",
      description:
        "Ensuring a seamless transition and setting up for immediate impact and long-term growth within your team",
      delay: 0.5,
    },
    {
      step: "06",
      icon: FaStar,
      title: "Ongoing Success",
      description:
        "We maintain relationships to celebrate achievements and support continuous career development and satisfaction",
      delay: 0.6,
    },
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
    <section className="relative py-20 bg-white overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-[1000px] h-[1000px] opacity-10" 
            animate={{ rotate: 360 }}
            transition={{
              duration: 30, 
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/logo/round.png"
              alt="Background Pattern"
              width={1000}
              height={1000}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
              }}
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-64 h-64 opacity-5 z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/logo/round.png"
            alt="Background Element"
            width={256}
            height={256}
            className="object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 w-72 h-72 opacity-5 z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/logo/round.png"
            alt="Background Element"
            width={288}
            height={288}
            className="object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
            }}
          />
        </motion.div>
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
            className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 mb-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-2 h-2 bg-[#E23D51] rounded-full"></div>
            <span className="text-gray-700 font-medium">
              Our Proven Approach
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How We Create
            <span className="text-[#E23D51] block">
              Successful Partnerships
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our carefully crafted process ensures we find not just qualified
            candidates, but the right people who will thrive in your environment
            and contribute to your success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-[#E23D51] transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ delay: step.delay }}
            >
             
              <motion.div
                className="absolute inset-0 opacity-10 flex items-center justify-center"
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-80 h-80"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/logo/round.png"
                    alt="Card Background Logo"
                    width={320}
                    height={320}
                    className="object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-4 left-4 w-10 h-10 opacity-30" 
                animate={{
                  x: [0, 25, 0, -25, 0],
                  y: [0, -20, 0, 20, 0],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={40}
                  height={40}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 w-8 h-8 opacity-35"
                animate={{
                  x: [0, -30, 0, 30, 0],
                  y: [0, -15, 0, 15, 0],
                  rotate: [0, -90, -180, -270, -360],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={32}
                  height={32}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg z-10 bg-white/80 backdrop-blur-sm border border-white/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16"
                >
                  <Image
                    src="/logo/round.png"
                    alt="Step Logo"
                    width={64}
                    height={64}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#E23D51]">
                    {step.step}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E23D51] group-hover:text-white transition-all duration-300 relative z-10 ml-auto"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="text-2xl text-[#E23D51] group-hover:text-white transition-colors duration-300" />
              </motion.div>

              <div className="mb-4 relative z-10">
                <span className="text-sm font-semibold text-[#E23D51] uppercase tracking-wide">
                  Step {step.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-[#E23D51] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E23D51] group-hover:w-full transition-all duration-500 z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

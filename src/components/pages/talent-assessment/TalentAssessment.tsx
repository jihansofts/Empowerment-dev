"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaBrain,
  FaHeart,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
  FaGem,
} from "react-icons/fa";
import PageTransition from "@/components/animation/PageTransition";

export default function TalentAssessment() {
  const assessmentFeatures = [
    {
      icon: FaBrain,
      title: "Cognitive Excellence",
      description:
        "Comprehensive cognitive assessments to identify problem-solving abilities and critical thinking skills",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaHeart,
      title: "Cultural Alignment",
      description:
        "Personality and value-based assessments ensuring perfect cultural fit with your organization",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: FaRocket,
      title: "Skills Mastery",
      description:
        "Technical and domain-specific evaluations to verify expertise and practical capabilities",
      color: "from-purple-500 to-indigo-400",
    },
    {
      icon: FaChartLine,
      title: "Growth Potential",
      description:
        "Identify future leaders and high-potential candidates ready for long-term growth",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: FaUsers,
      title: "Team Compatibility",
      description:
        "Assess how candidates will collaborate and contribute to your existing team dynamics",
      color: "from-orange-500 to-amber-400",
    },
    {
      icon: FaLightbulb,
      title: "Innovation Quotient",
      description:
        "Measure creativity, adaptability, and innovative thinking capabilities",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  const benefits = [
    {
      number: "90%",
      title: "Higher Retention",
      description: "Better cultural matches lead to long-term success",
    },
    {
      number: "3x",
      title: "Faster Hiring",
      description: "Streamlined process with precise candidate matching",
    },
    {
      number: "95%",
      title: "Success Rate",
      description: "Proven track record of successful placements",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Comprehensive Profiling",
      description: "Multi-dimensional assessment",
    },
    {
      step: "2",
      title: "In-depth Analysis",
      description: "Expert evaluation and insights",
    },
    {
      step: "3",
      title: "Perfect Matching",
      description: "Data-driven candidate selection",
    },
    {
      step: "4",
      title: "Success Onboarding",
      description: "Smooth integration and support",
    },
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <PageTransition>
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="w-[900px] h-[900px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src="/logo/round.png"
                alt="Background Pattern"
                width={900}
                height={900}
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

        <div className="absolute top-20 left-20 w-64 h-64 opacity-3 z-0">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
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

        <div className="absolute bottom-20 right-20 w-56 h-56 opacity-3 z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/logo/round.png"
              alt="Background Element"
              width={224}
              height={224}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
              }}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="grid grid-cols-8 gap-16">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="flex justify-center items-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Background Pattern"
                  width={50}
                  height={50}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-200 shadow-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-2 h-2 bg-[#E23D51] rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                Precision Talent Matching
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Discover Exceptional
              <motion.span
                className="block text-[#E23D51]"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(226, 61, 81, 0.3)",
                    "0 0 30px rgba(226, 61, 81, 0.6)",
                    "0 0 20px rgba(226, 61, 81, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Talent Potential
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive assessment methodology goes beyond resumes to
              uncover
              <span className="text-[#E23D51] font-semibold">
                {" "}
                true potential
              </span>
              , ensuring you find candidates who will
              <span className="text-[#E23D51] font-semibold">
                {" "}
                thrive and excel
              </span>{" "}
              in your organization.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center hover:shadow-xl transition-all duration-300 group overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 3,
                    }}
                  >
                    <Image
                      src="/logo/round.png"
                      alt="Card Background"
                      width={150}
                      height={150}
                      className="object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                      }}
                    />
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold text-[#E23D51] mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {benefit.number}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E23D51] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {assessmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-[#E23D51] transition-all duration-300 group overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2,
                    }}
                  >
                    <Image
                      src="/logo/round.png"
                      alt="Card Background"
                      width={180}
                      height={180}
                      className="object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                      }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 opacity-20 z-10"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
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
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                    }}
                  />
                </motion.div>

                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="text-white text-2xl" />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E23D51] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E23D51] group-hover:w-full transition-all duration-500 z-10" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-30 rounded-3xl overflow-hidden">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Process Background"
                  width={400}
                  height={400}
                  className="object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                  }}
                />
              </motion.div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Assessment Journey
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A carefully crafted process that ensures we understand
                  candidates at the deepest level to guarantee perfect matches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 opacity-70 rounded-2xl">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 5,
                        }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src="/logo/round.png"
                          alt="Step Background"
                          width={80}
                          height={80}
                          className="object-contain"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="w-20 h-20 bg-[#E23D51] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {step.step}
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E23D51] transition-colors duration-300 relative z-10">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 relative z-10">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
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
                <div className="grid grid-cols-3 gap-20">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex justify-center items-center"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 25 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src="/logo/round.png"
                        alt="Background Logo"
                        width={100}
                        height={100}
                        className="text-white"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <FaGem className="text-white text-5xl mx-auto mb-6 opacity-80" />
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Discover Exceptional Talent?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let our advanced assessment methodology help you build a team
                  that drives innovation and achieves extraordinary results.
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
                      Start Assessing Talent
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

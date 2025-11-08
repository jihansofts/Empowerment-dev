"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaMoneyBillWave,
  FaRocket,
  FaHandsHelping,
  FaChartLine,
  FaShieldAlt,
  FaCrown,
  FaStar,
  FaAward,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default function WhyPartnerWithUs() {
  const partnershipBenefits = [
    {
      icon: FaMoneyBillWave,
      title: "Lucrative Commissions",
      description:
        "Competitive earning potential with unlimited growth opportunities and performance-based incentives.",
      color: "from-green-500 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: FaRocket,
      title: "Rapid Growth",
      description:
        "Access to premium resources, cutting-edge technology, and proven strategies for exponential success.",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: FaHandsHelping,
      title: "Full Support",
      description:
        "Comprehensive training, dedicated mentorship, and 24/7 backup from our expert leadership team.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.3,
    },
    {
      icon: FaChartLine,
      title: "Proven Success System",
      description:
        "Leverage our established processes and methodologies that have delivered outstanding results.",
      color: "from-orange-500 to-amber-500",
      delay: 0.4,
    },
    {
      icon: FaShieldAlt,
      title: "Risk Protection",
      description:
        "Enjoy financial security with guaranteed retainers and comprehensive business support systems.",
      color: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      icon: FaCrown,
      title: "Elite Community",
      description:
        "Join an exclusive network of top performers and industry leaders for collaboration and growth.",
      color: "from-yellow-500 to-orange-500",
      delay: 0.6,
    },
  ];

  const successMetrics = [
    {
      number: "85%",
      label: "Higher Earnings",
      icon: FaMoneyBillWave,
      description: "than industry average",
    },
    {
      number: "2.5x",
      label: "Faster Growth",
      icon: FaRocket,
      description: "compared to independent operations",
    },
    {
      number: "24/7",
      label: "Expert Support",
      icon: FaHandsHelping,
      description: "dedicated assistance",
    },
    {
      number: "100%",
      label: "Success Rate",
      icon: FaAward,
      description: "partner satisfaction",
    },
  ];

  const values = [
    {
      title: "We Invest in You",
      description:
        "Continuous training, resources, and tools to ensure your success from day one.",
      icon: FaUsers,
    },
    {
      title: "Growth-Focused",
      description:
        "Your success is our priority - we're committed to helping you achieve your financial goals.",
      icon: FaChartLine,
    },
    {
      title: "Partnership First",
      description:
        "Transparent relationships built on trust, respect, and mutual success.",
      icon: FaStar,
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
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
 
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-[1000px] h-[1000px]"
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


      <div className="absolute top-10 left-10 w-72 h-72 opacity-3 z-0">
        <motion.div
          animate={{ rotate: -360 }}
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

      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-3 z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-20"
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
              Join Our Success Story
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Why Partner With
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
              Our Team?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience unprecedented growth and financial success with our
            <span className="font-semibold text-[#E23D51]">
              {" "}
              proven partnership model
            </span>
            . We provide everything you need to thrive in the competitive
            recruitment industry.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partnershipBenefits.map((benefit, index) => (
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
                  className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg group-hover:shadow-xl w-16 h-16 flex items-center justify-center mx-auto`}
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
                  <benefit.icon className="text-2xl" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#E23D51] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center flex-1 group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#E23D51] to-purple-600 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white/80 relative z-20 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Partner Success
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful partners who have transformed their
              careers and achieved financial freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
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
                  <metric.icon className="text-2xl opacity-80" />
                  {metric.number}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E23D51] transition-colors duration-300">
                  {metric.label}
                </h4>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-200 group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-3 rounded-2xl overflow-hidden">
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
                    alt="Value Background"
                    width={120}
                    height={120}
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
                  className="w-16 h-16 bg-[#E23D51] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <value.icon />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E23D51] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#E23D51] to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
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
              <FaAward className="text-white text-5xl mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our elite network of recruitment partners and start earning
                the income you deserve with our comprehensive support system.
              </p>

              <Link
                href={"/contact-us"}
                className="px-12 py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-3 mx-auto bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
              >
                Become a Partner Today
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaCog,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

export default function HowWeWorkHrServices() {
  const services = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Talent Acquisition",
      description:
        "Find the perfect candidates with our advanced recruitment strategies and screening processes.",
      delay: 0.1,
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Employee Relations",
      description:
        "Build strong workplace relationships with effective conflict resolution and engagement programs.",
      delay: 0.2,
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Performance Management",
      description:
        "Boost productivity with comprehensive performance tracking and development plans.",
      delay: 0.3,
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "HR Analytics",
      description:
        "Make data-driven decisions with our advanced HR analytics and reporting tools.",
      delay: 0.4,
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: "HR Process Automation",
      description:
        "Streamline your HR operations with automated workflows and smart processes.",
      delay: 0.5,
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 HR Support",
      description:
        "Round-the-clock support for all your HR needs and emergency situations.",
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[800px] h-[800px] animate-spin-slow">
            <Image
              src="/logo/round.png"
              alt="Logo"
              width={1200}
              height={1200}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
              }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Work on HR Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional HR solutions with innovative thinking and
            cutting-edge technology. We provide out-of-the-box HR services
            tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-8 opacity-10 z-0">
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-80 h-80 animate-spin-slow"
                    style={{ animationDuration: "25s" }}
                  >
                    <Image
                      src="/logo/round.png"
                      alt="Logo"
                      width={320}
                      height={320}
                      className="object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative z-10 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 min-h-[380px] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E23D51] to-transparent z-20 rounded-t-2xl"></div>

                <div className="relative z-20 flex-1 flex flex-col">
                  <div
                    className="mb-6 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg inline-block group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 border border-white/50 mx-auto"
                    style={{ color: "#E23D51" }}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#E23D51] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base text-center flex-1">
                    {service.description}
                  </p>

                  <div className="text-center mt-auto">
                    <button
                      className="px-8 py-3 rounded-full font-semibold text-white text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn flex items-center gap-2 mx-auto"
                      style={{
                        backgroundColor: "#E23D51",
                        backgroundImage:
                          "linear-gradient(45deg, #E23D51, #ff6b7a)",
                      }}
                    >
                      Learn More
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#E23D51] to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl z-5"></div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

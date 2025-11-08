"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
export interface Industry {
  title: string;
  image: string;
  roundImage: string;
  shortDescription: string;
  keyRoles: string[];
  yourBenefits: string[];
}

export default function Industries() {
  const industries: Industry[] = [
    {
      title: "Agriculture & Farming",
      image: "/industries/agriculture.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Expert recruitment for agricultural sectors including farming, gardening, fruit harvesting, and food processing industries",
      keyRoles: [
        "Farm Workers",
        "Gardeners",
        "Fruit Pickers",
        "Food Processing Operators",
        "Agricultural Technicians",
        "Farm Managers",
      ],
      yourBenefits: [
        "Skilled seasonal workers",
        "Reliable agricultural staff",
        "Food safety certified professionals",
        "Experienced harvest teams",
      ],
    },
    {
      title: "Automotive Services",
      image: "/industries/automotive.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Professional recruitment for car wash, servicing, and automotive maintenance businesses",
      keyRoles: [
        "Car Wash Attendants",
        "Auto Detailers",
        "Service Technicians",
        "Mechanic Assistants",
        "Customer Service Staff",
      ],
      yourBenefits: [
        "Trained automotive professionals",
        "Customer-focused service staff",
        "Technical skilled workers",
        "Reliable maintenance teams",
      ],
    },
    {
      title: "Bakery & Food Production",
      image: "/industries/bakery.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Specialized staffing for bakeries, food processing, and production facilities",
      keyRoles: [
        "Bakers",
        "Pastry Chefs",
        "Food Production Workers",
        "Quality Control Inspectors",
        "Packaging Operators",
      ],
      yourBenefits: [
        "Certified bakers",
        "Food hygiene trained staff",
        "Production line experts",
        "Quality assurance professionals",
      ],
    },
    {
      title: "Healthcare & Care Homes",
      image: "/industries/healthcare.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Dedicated healthcare recruitment for hospitals, clinics, and residential care facilities",
      keyRoles: [
        "Caregivers",
        "Nurses",
        "Healthcare Assistants",
        "Support Workers",
        "Medical Technicians",
      ],
      yourBenefits: [
        "Qualified healthcare professionals",
        "Compassionate care staff",
        "Certified nursing assistants",
        "Trained medical support",
      ],
    },
    {
      title: "Commercial & Residential Cleaning",
      image: "/industries/cleaning.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Professional cleaning staff recruitment for commercial and residential properties",
      keyRoles: [
        "Cleaners",
        "Janitors",
        "Housekeeping Staff",
        "Sanitation Workers",
        "Cleaning Supervisors",
      ],
      yourBenefits: [
        "Trained cleaning professionals",
        "Reliable maintenance staff",
        "Sanitation certified workers",
        "Experienced cleaning teams",
      ],
    },
    {
      title: "Construction & Building Trades",
      image: "/industries/construction.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Skilled workforce recruitment for construction projects and building maintenance",
      keyRoles: [
        "Construction Workers",
        "Laborers",
        "Site Assistants",
        "Building Maintenance Staff",
        "Construction Helpers",
      ],
      yourBenefits: [
        "Skilled construction labor",
        "Safety trained workers",
        "Reliable site staff",
        "Experienced building teams",
      ],
    },
    {
      title: "Logistics & Delivery Services",
      image: "/industries/delivery.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Comprehensive recruitment for delivery, logistics, and transportation sectors",
      keyRoles: [
        "Delivery Drivers",
        "Heavy Vehicle Operators",
        "Logistics Assistants",
        "Couriers",
        "Warehouse Packers",
      ],
      yourBenefits: [
        "Licensed drivers",
        "Experienced logistics staff",
        "Reliable delivery personnel",
        "Safety conscious operators",
      ],
    },
    {
      title: "Technical Services & HVAC",
      image: "/industries/technical.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Specialized recruitment for electrical, HVAC, refrigeration, and technical maintenance roles",
      keyRoles: [
        "Electricians",
        "HVAC Technicians",
        "Refrigeration Specialists",
        "AC Maintenance Staff",
        "Technical Engineers",
      ],
      yourBenefits: [
        "Certified technicians",
        "Skilled maintenance professionals",
        "Safety trained electricians",
        "Experienced HVAC specialists",
      ],
    },
    {
      title: "Hospitality & Tourism",
      image: "/industries/hospitality.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Staffing solutions for hotels, restaurants, tourism, and hospitality businesses",
      keyRoles: [
        "Hotel Staff",
        "Restaurant Workers",
        "Tourism Guides",
        "Hospitality Assistants",
        "Service Crew",
      ],
      yourBenefits: [
        "Customer service experts",
        "Hospitality trained staff",
        "Multilingual personnel",
        "Experienced service professionals",
      ],
    },
    {
      title: "Dairy & Food Processing",
      image: "/industries/dairy.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for dairy farms, milk processing, and food manufacturing",
      keyRoles: [
        "Dairy Workers",
        "Milk Processing Operators",
        "Food Technicians",
        "Production Staff",
        "Quality Checkers",
      ],
      yourBenefits: [
        "Food safety certified workers",
        "Experienced dairy staff",
        "Production line operators",
        "Quality control experts",
      ],
    },
    {
      title: "Manufacturing & Automotive",
      image: "/industries/manufacturing.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for automotive manufacturing, component production, and mechanical services",
      keyRoles: [
        "Auto Mechanics",
        "Production Workers",
        "Assembly Line Staff",
        "Quality Inspectors",
        "Maintenance Technicians",
      ],
      yourBenefits: [
        "Skilled manufacturing workers",
        "Technical mechanical staff",
        "Quality focused teams",
        "Production line experts",
      ],
    },
    {
      title: "Textiles & Garment Manufacturing",
      image: "/industries/textiles.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Staffing solutions for textile production, clothing manufacturing, and garment industries",
      keyRoles: [
        "Sewing Operators",
        "Textile Workers",
        "Garment Makers",
        "Quality Controllers",
        "Production Assistants",
      ],
      yourBenefits: [
        "Skilled textile workers",
        "Experienced seamstresses",
        "Quality assurance staff",
        "Production efficiency experts",
      ],
    },
    {
      title: "Mining & Resource Extraction",
      image: "/industries/mining.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce recruitment for mining, quarrying, and resource extraction operations",
      keyRoles: [
        "Miners",
        "Quarry Workers",
        "Extraction Operators",
        "Heavy Equipment Staff",
        "Safety Officers",
      ],
      yourBenefits: [
        "Safety certified miners",
        "Experienced quarry workers",
        "Heavy machinery operators",
        "Risk management professionals",
      ],
    },
    {
      title: "Oil & Gas Refinery",
      image: "/industries/oil-gas.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Specialized recruitment for oil refineries, gas plants, and energy sector operations",
      keyRoles: [
        "Refinery Operators",
        "Plant Technicians",
        "Process Workers",
        "Maintenance Staff",
        "Safety Coordinators",
      ],
      yourBenefits: [
        "Certified refinery staff",
        "Safety trained operators",
        "Technical plant workers",
        "Experienced energy sector professionals",
      ],
    },
    {
      title: "Packaging & Plastic Manufacturing",
      image: "/industries/packaging.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Staffing solutions for packaging industries and plastic product manufacturing",
      keyRoles: [
        "Packaging Operators",
        "Plastic Molding Technicians",
        "Production Line Workers",
        "Quality Checkers",
        "Machine Operators",
      ],
      yourBenefits: [
        "Skilled packaging staff",
        "Machine operation experts",
        "Quality control professionals",
        "Production efficiency teams",
      ],
    },
    {
      title: "Railway & Transport Manufacturing",
      image: "/industries/railway.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for rail wagon manufacturing and transport equipment production",
      keyRoles: [
        "Welders",
        "Assembly Workers",
        "Metal Fabricators",
        "Quality Inspectors",
        "Production Technicians",
      ],
      yourBenefits: [
        "Certified welders",
        "Skilled metal workers",
        "Quality focused manufacturers",
        "Technical assembly staff",
      ],
    },
    {
      title: "Restaurant & Food Service",
      image: "/industries/restaurant.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Comprehensive staffing for restaurants, cafes, and food service establishments",
      keyRoles: [
        "Chefs",
        "Kitchen Staff",
        "Waiters",
        "Food Preparers",
        "Restaurant Managers",
      ],
      yourBenefits: [
        "Trained culinary staff",
        "Customer service experts",
        "Food safety certified workers",
        "Experienced restaurant teams",
      ],
    },
    {
      title: "Beauty & Hairdressing",
      image: "/industries/beauty.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Professional recruitment for salons, hairdressing, and beauty services",
      keyRoles: [
        "Hairdressers",
        "Beauty Therapists",
        "Salon Assistants",
        "Stylists",
        "Spa Technicians",
      ],
      yourBenefits: [
        "Certified beauty professionals",
        "Skilled hairstylists",
        "Customer service experts",
        "Creative beauty teams",
      ],
    },
    {
      title: "Sugar Processing & Manufacturing",
      image: "/industries/sugar.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for sugar factories and sweetener production facilities",
      keyRoles: [
        "Processing Operators",
        "Factory Workers",
        "Quality Control Staff",
        "Maintenance Technicians",
        "Production Supervisors",
      ],
      yourBenefits: [
        "Experienced processing staff",
        "Quality focused workers",
        "Factory operation experts",
        "Safety trained teams",
      ],
    },
    {
      title: "Butchery & Meat Processing",
      image: "/industries/butchery.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Specialized recruitment for butchery, meat processing, and food preparation",
      keyRoles: [
        "Butchers",
        "Meat Cutters",
        "Food Processing Workers",
        "Quality Inspectors",
        "Packaging Staff",
      ],
      yourBenefits: [
        "Certified butchers",
        "Food safety trained staff",
        "Skilled meat processors",
        "Hygiene conscious workers",
      ],
    },
    {
      title: "Warehouse & Logistics",
      image: "/industries/warehouse.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Staffing solutions for warehouse operations, storage, and distribution centers",
      keyRoles: [
        "Warehouse Workers",
        "Forklift Operators",
        "Stock Clerks",
        "Inventory Staff",
        "Logistics Coordinators",
      ],
      yourBenefits: [
        "Certified forklift operators",
        "Experienced warehouse staff",
        "Inventory management experts",
        "Logistics professionals",
      ],
    },
    {
      title: "Welding & Metal Fabrication",
      image: "/industries/welding.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for welding, metalwork, and fabrication industries",
      keyRoles: [
        "Welders",
        "Metal Fabricators",
        "Sheet Metal Workers",
        "Welding Assistants",
        "Quality Inspectors",
      ],
      yourBenefits: [
        "Certified welders",
        "Skilled metal workers",
        "Quality focused fabricators",
        "Safety trained technicians",
      ],
    },
    {
      title: "Woodwork & Furniture Manufacturing",
      image: "/industries/woodwork.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for wood processing, furniture making, and carpentry industries",
      keyRoles: [
        "Carpenters",
        "Furniture Makers",
        "Wood Workers",
        "Assembly Staff",
        "Finishing Technicians",
      ],
      yourBenefits: [
        "Skilled carpenters",
        "Experienced wood workers",
        "Quality furniture makers",
        "Creative design staff",
      ],
    },
  ];

  return (
    <section
      id="industry-explore"
      className="py-12 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF3D54] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Specialized recruitment solutions for your industry needs
          </p>
        </div>
        <div className="space-y-20 md:space-y-32">
          {industries.map((industry, index) => (
            <ResponsiveIndustryCard
              key={industry.title}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ResponsiveIndustryCardProps {
  industry: Industry;
  index: number;
}

function ResponsiveIndustryCard({
  industry,
  index,
}: ResponsiveIndustryCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  const rotate1 = useMotionValue(0);
  const rotate2 = useMotionValue(0);
  const rotate3 = useMotionValue(0);
  const rotate4 = useMotionValue(0);

  React.useEffect(() => {
    if (isInView) {
      animate(rotate1, 360, {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      });
      animate(rotate2, -360, {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      });
      animate(rotate3, 360, {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      });
      animate(rotate4, -360, {
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      });
    }
  }, [isInView, rotate1, rotate2, rotate3, rotate4]);

  return (
    <div className="relative">
     
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-5 z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <Image
            src="/logo/round.png"
            alt="Background Logo"
            width={384}
            height={384}
            className="object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
            }}
          />
        </motion.div>
      </div>


      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-5 z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <Image
            src="/logo/round.png"
            alt="Background Logo"
            width={320}
            height={320}
            className="object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(36%) sepia(47%) saturate(1352%) hue-rotate(316deg) brightness(99%) contrast(83%)",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-8 md:gap-12 lg:gap-20 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] z-10`}
      >

        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-4 md:space-y-6 w-full relative z-20"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EF3D54] leading-tight">
            {industry.title}
          </h3>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {industry.shortDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                Key Roles
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {industry.keyRoles.map((role: string, i: number) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-[#EF3D54] rounded-full flex-shrink-0"></div>
                    <span>{role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                Your Benefits
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {industry.yourBenefits.map((benefit: string, i: number) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 relative w-full max-w-2xl mx-auto lg:mx-0"
        >
 
          <div className="absolute -inset-10 opacity-5 z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src="/logo/round.png"
                alt="Background Logo"
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

          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl bg-gray-100 aspect-video w-full z-20">
            <Image
              src={industry.image}
              alt={industry.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 45vw, 40vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          <motion.div
            style={{ rotate: rotate1 }}
            className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 lg:-top-14 lg:-left-8 
                       w-20 h-20 sm:w-28 sm:h-28 lg:w-44 lg:h-44 
                       rounded-full overflow-hidden z-10"
          >
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 176px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate2 }}
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 
                       w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 
                       rounded-full overflow-hidden z-10"
          >
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 112px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate3 }}
            className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 
                       w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 
                       rounded-full overflow-hidden z-10"
          >
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 144px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate4 }}
            className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-14 lg:-right-8 
                       w-20 h-20 sm:w-28 sm:h-28 lg:w-44 lg:h-44 
                       rounded-full overflow-hidden z-10"
          >
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 176px"
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden sm:block absolute -top-3 -left-3 lg:-top-4 lg:-left-4 
                       w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 
                       rounded-full border border-[#EF3D54]/20 pointer-events-none"
          />

          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden sm:block absolute -top-2 -right-3 lg:-top-4 lg:-right-4 
                       w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 
                       rounded-full border border-[#EF3D54]/20 pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

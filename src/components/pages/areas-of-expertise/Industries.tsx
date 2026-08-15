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
      title: "Agriculture & Crop Production",
      image: "/industries/agriculture.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for farms, crop production and agricultural operations.",
      keyRoles: [
        "Farm Workers",
        "Agricultural Workers",
        "Crop Workers",
        "Vegetable Farm Workers",
        "Farm Assistants",
        "Agricultural Machine Operators",
      ],
      yourBenefits: [
        "Skilled and experienced agricultural workforce",
        "Farm Workers and Agricultural Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Horticulture & Gardening",
      image: "/industries/Horticulture.jpg",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for horticulture, gardening, nurseries and landscaping operations.",
      keyRoles: [
        "Gardeners",
        "Horticultural Workers",
        "Nursery Workers",
        "Landscapers",
        "Grounds Maintenance Workers",
        "Gardening Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced horticulture workforce",
        "Gardeners and Horticultural Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Fruit Picking & Seasonal Agriculture",
      image: "/industries/Fruit Picking.jpg",
      roundImage: "/logo/round.png",
      shortDescription:
        "Seasonal recruitment for harvesting and agricultural peak periods.",
      keyRoles: [
        "Fruit Pickers",
        "Harvest Workers",
        "Seasonal Farm Workers",
        "Crop Pickers",
        "Packing Workers",
        "Agricultural Assistants",
      ],
      yourBenefits: [
        "Reliable seasonal harvest workforce",
        "Fruit Pickers and Harvest Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Livestock & Dairy",
      image: "/industries/Livestock.jpg",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for livestock farms, dairy operations and milk production.",
      keyRoles: [
        "Dairy Farm Workers",
        "Livestock Workers",
        "Milking Operators",
        "Farm Assistants",
        "Animal Care Workers",
        "Dairy Production Workers",
      ],
      yourBenefits: [
        "Skilled and experienced dairy and livestock workforce",
        "Dairy Farm Workers and Livestock Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Viticulture & Wine Production",
      image: "/industries/Viticulture.jpg",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for vineyards, grape cultivation and wine-production operations.",
      keyRoles: [
        "Vineyard Workers",
        "Grape Pickers",
        "Agricultural Workers",
        "Winery Production Workers",
        "Cellar Workers",
        "Seasonal Harvest Workers",
      ],
      yourBenefits: [
        "Skilled and experienced viticulture workforce",
        "Vineyard Workers and Grape Pickers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Fishing & Seafood Processing",
      image: "/industries/fishing_seafood.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce recruitment for fishing and seafood processing operations.",
      keyRoles: [
        "Fish Processing Workers",
        "Seafood Sorters",
        "Processing Operators",
        "Packing Workers",
        "Labelling Workers",
        "Production Workers",
      ],
      yourBenefits: [
        "Skilled and experienced seafood processing workforce",
        "Fish Processing Workers and Seafood Sorters ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Food Production & Processing",
      image: "/industries/manufacturing.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for food factories, processing plants and production facilities.",
      keyRoles: [
        "Food Production Workers",
        "Production Operators",
        "Processing Workers",
        "Quality Control Workers",
        "Machine Operators",
        "Packing Workers",
      ],
      yourBenefits: [
        "Skilled and experienced food production workforce",
        "Food Production Workers and Production Operators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Bakery & Confectionery",
      image: "/industries/bakery.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for bakeries, pastry production and confectionery operations.",
      keyRoles: [
        "Bakers",
        "Pastry Workers",
        "Bakery Assistants",
        "Production Workers",
        "Packaging Workers",
        "Food Production Operators",
      ],
      yourBenefits: [
        "Skilled and experienced bakery workforce",
        "Bakers and Pastry Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Meat Processing & Butchery",
      image: "/industries/meat_processing.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for meat-processing plants, butcheries and food-production facilities.",
      keyRoles: [
        "Butchers",
        "Meat Cutters",
        "Meat Processing Workers",
        "Production Workers",
        "Packaging Workers",
        "Quality Control Workers",
      ],
      yourBenefits: [
        "Skilled and experienced meat-processing workforce",
        "Butchers and Meat Cutters ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Hospitality & Tourism",
      image: "/industries/hospitality.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for hotels, resorts, hostels, guesthouses and tourism businesses.",
      keyRoles: [
        "Hotel Staff",
        "Housekeepers",
        "Room Attendants",
        "Kitchen Assistants",
        "Hospitality Assistants",
        "Service Staff",
      ],
      yourBenefits: [
        "Skilled and experienced hospitality workforce",
        "Hotel Staff and Housekeepers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Restaurant, Café & Food Service",
      image: "/industries/restaurant.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for restaurants, cafés, catering businesses and food-service operations.",
      keyRoles: [
        "Chefs",
        "Cooks",
        "Kitchen Assistants",
        "Waiters",
        "Food Service Workers",
        "Restaurant Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced food-service workforce",
        "Chefs and Cooks ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Cleaning & Facility Services",
      image: "/industries/cleaning.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for commercial, residential and facility-cleaning operations.",
      keyRoles: [
        "Cleaners",
        "Janitors",
        "Housekeeping Staff",
        "Sanitation Workers",
        "Cleaning Supervisors",
        "Facility Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced cleaning workforce",
        "Cleaners and Janitors ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Construction & Building Trades",
      image: "/industries/construction.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for construction projects and building-related operations.",
      keyRoles: [
        "Construction Workers",
        "General Labourers",
        "Bricklayers",
        "Plasterers",
        "Carpenters",
        "Construction Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced construction workforce",
        "Construction Workers and General Labourers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Infrastructure & Civil Works",
      image: "/industries/infrastructure_civil.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce recruitment for infrastructure and civil-construction projects.",
      keyRoles: [
        "Civil Construction Workers",
        "Road Workers",
        "Site Workers",
        "Construction Labourers",
        "Equipment Operators",
        "Site Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced civil-works workforce",
        "Civil Construction Workers and Road Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Automotive Manufacturing & Components",
      image: "/industries/automotive_manufacturing.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for vehicle manufacturing and automotive component production.",
      keyRoles: [
        "Production Workers",
        "Assembly Workers",
        "Machine Operators",
        "Component Production Workers",
        "Quality Inspectors",
        "Maintenance Workers",
      ],
      yourBenefits: [
        "Skilled and experienced automotive manufacturing workforce",
        "Production Workers and Assembly Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Automotive Services & Repair",
      image: "/industries/automotive.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for garages, workshops, vehicle servicing and repair businesses.",
      keyRoles: [
        "Automotive Mechanics",
        "Service Technicians",
        "Mechanic Assistants",
        "Vehicle Technicians",
        "Diagnostics Technicians",
        "Workshop Assistants",
      ],
      yourBenefits: [
        "Skilled and experienced automotive service workforce",
        "Automotive Mechanics and Service Technicians ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Car Wash & Vehicle Detailing",
      image: "/industries/car_wash_vehicle.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for vehicle cleaning and detailing businesses.",
      keyRoles: [
        "Car Wash Workers",
        "Vehicle Detailers",
        "Cleaning Workers",
        "Detailing Assistants",
        "Workshop Assistants",
        "Customer Service Staff",
      ],
      yourBenefits: [
        "Reliable car wash and detailing workforce",
        "Car Wash Workers and Vehicle Detailers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Logistics, Transport & Freight",
      image: "/industries/warehouse.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for logistics, freight and transportation operations.",
      keyRoles: [
        "Logistics Workers",
        "Transport Coordinators",
        "Freight Workers",
        "Dispatch Assistants",
        "Transport Assistants",
        "Logistics Operators",
      ],
      yourBenefits: [
        "Skilled and experienced logistics workforce",
        "Logistics Workers and Transport Coordinators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Driving, Courier & Delivery",
      image: "/industries/delivery.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for professional drivers, delivery and courier operations.",
      keyRoles: [
        "Delivery Drivers",
        "Heavy Vehicle Drivers",
        "Truck Drivers",
        "Courier Drivers",
        "Van Drivers",
        "Delivery Assistants",
      ],
      yourBenefits: [
        "Licensed and experienced driving workforce",
        "Delivery Drivers and Heavy Vehicle Drivers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Warehousing & Distribution",
      image: "/industries/warehousing_distribution.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for warehouses, distribution centres and storage operations.",
      keyRoles: [
        "Warehouse Workers",
        "Pickers & Packers",
        "Forklift Operators",
        "Stock Workers",
        "Inventory Assistants",
        "Loading & Unloading Workers",
      ],
      yourBenefits: [
        "Skilled and experienced warehouse workforce",
        "Warehouse Workers and Forklift Operators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Electrical, HVAC & Refrigeration",
      image: "/industries/technical.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for electrical, heating, ventilation, air-conditioning and refrigeration services.",
      keyRoles: [
        "Electricians",
        "HVAC Technicians",
        "Refrigeration Technicians",
        "Air-Conditioning Technicians",
        "Maintenance Technicians",
        "Electrical Assistants",
      ],
      yourBenefits: [
        "Certified and experienced technical workforce",
        "Electricians and HVAC Technicians ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Mechanical & Industrial Maintenance",
      image: "/industries/mechanical_industrial.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for machinery maintenance, industrial equipment and mechanical operations.",
      keyRoles: [
        "Mechanical Technicians",
        "Maintenance Technicians",
        "Machinery Operators",
        "Industrial Mechanics",
        "Maintenance Assistants",
        "Equipment Technicians",
      ],
      yourBenefits: [
        "Skilled and experienced maintenance workforce",
        "Mechanical Technicians and Maintenance Technicians ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Manufacturing & Industrial Production",
      image: "/industries/manufacturing_industrial.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce recruitment for factories, production facilities and industrial operations.",
      keyRoles: [
        "Production Workers",
        "Factory Workers",
        "Assembly Workers",
        "Machine Operators",
        "Production Assistants",
        "Quality Control Workers",
      ],
      yourBenefits: [
        "Skilled and experienced manufacturing workforce",
        "Production Workers and Factory Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Chemical Manufacturing & Processing",
      image: "/industries/packaging.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for chemical manufacturing and industrial processing facilities.",
      keyRoles: [
        "Production Operators",
        "Processing Workers",
        "Machine Operators",
        "Plant Workers",
        "Packaging Workers",
        "Maintenance Workers",
      ],
      yourBenefits: [
        "Skilled and experienced chemical processing workforce",
        "Production Operators and Processing Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Electronics Manufacturing & Assembly",
      image: "/industries/electrical_HVAC.png",
      roundImage: "/logo/round.png",
      shortDescription:
        "Workforce solutions for electronics production and assembly facilities.",
      keyRoles: [
        "Electronics Assembly Workers",
        "Production Operators",
        "Assembly Workers",
        "Testing Assistants",
        "Machine Operators",
        "Quality Control Workers",
      ],
      yourBenefits: [
        "Skilled and experienced electronics assembly workforce",
        "Electronics Assembly Workers and Production Operators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Textiles & Garment Manufacturing",
      image: "/industries/textiles.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for textile factories, garment production and clothing manufacturing.",
      keyRoles: [
        "Sewing Operators",
        "Textile Workers",
        "Garment Workers",
        "Machine Operators",
        "Production Workers",
        "Quality Controllers",
      ],
      yourBenefits: [
        "Skilled and experienced textile workforce",
        "Sewing Operators and Textile Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Leather & Footwear Manufacturing",
      image: "/industries/Leather & Footwear Manufacturing.jpg",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for leather processing, footwear and related manufacturing.",
      keyRoles: [
        "Leather Workers",
        "Shoe Production Workers",
        "Sewing Operators",
        "Cutting Workers",
        "Assembly Workers",
        "Finishing Workers",
      ],
      yourBenefits: [
        "Skilled and experienced leather and footwear workforce",
        "Leather Workers and Shoe Production Workers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Plastics & Packaging Manufacturing",
      image: "/industries/packaging.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for plastic processing, packaging production and related manufacturing.",
      keyRoles: [
        "Plastic Machine Operators",
        "Packaging Operators",
        "Production Workers",
        "Moulding Operators",
        "Packing Workers",
        "Quality Control Workers",
      ],
      yourBenefits: [
        "Skilled and experienced packaging workforce",
        "Plastic Machine Operators and Packaging Operators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Metalworking, Welding & Fabrication",
      image: "/industries/welding.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for metalworking, welding and industrial fabrication.",
      keyRoles: [
        "Welders",
        "Metal Fabricators",
        "MIG/MAG Welders",
        "TIG Welders",
        "Sheet Metal Workers",
        "Fabrication Assistants",
      ],
      yourBenefits: [
        "Certified and experienced welding workforce",
        "Welders and Metal Fabricators ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
    {
      title: "Wood & Furniture Manufacturing",
      image: "/industries/woodwork.avif",
      roundImage: "/logo/round.png",
      shortDescription:
        "Recruitment for furniture factories, woodworking and carpentry operations.",
      keyRoles: [
        "Carpenters",
        "Furniture Makers",
        "Woodworkers",
        "Assembly Workers",
        "Machine Operators",
        "Finishing Workers",
      ],
      yourBenefits: [
        "Skilled and experienced woodworking workforce",
        "Carpenters and Furniture Makers ready for deployment",
        "Candidates screened against your role requirements",
        "Support through documentation, work-permit and visa procedures",
      ],
    },
  ];

  return (
    <section
      id="industry-explore"
      className="relative py-12 overflow-hidden bg-white md:py-20">
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF3D54] mb-4">
            Industries We Serve
          </h2>
          <p className="max-w-3xl px-4 mx-auto text-lg text-gray-600 sm:text-xl">
            Workforce recruitment across 30 core industries that rely on
            dependable operational, skilled, semi-skilled, technical and
            seasonal workers
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
      <div className="absolute z-0 -top-20 -left-20 w-96 h-96 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full">
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

      <div className="absolute z-0 -bottom-20 -right-20 w-80 h-80 opacity-5">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full">
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
        } items-center gap-8 md:gap-12 lg:gap-20 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] z-10`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex-1 w-full space-y-4 md:space-y-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EF3D54] leading-tight">
            {industry.title}
          </h3>

          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            {industry.shortDescription}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Key Roles
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {industry.keyRoles.map((role: string, i: number) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-700 sm:text-base">
                    <div className="w-2 h-2 bg-[#EF3D54] rounded-full flex-shrink-0"></div>
                    <span>{role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Your Benefits
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {industry.yourBenefits.map((benefit: string, i: number) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-700 sm:text-base">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
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
          className="relative flex-1 w-full max-w-2xl mx-auto lg:mx-0">
          <div className="absolute z-0 -inset-10 opacity-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center justify-center w-full h-full">
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

          <div className="relative z-20 w-full overflow-hidden bg-gray-100 shadow-lg rounded-xl md:rounded-2xl md:shadow-xl aspect-video">
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
            className="absolute z-10 w-20 h-20 overflow-hidden rounded-full -top-6 -left-4 sm:-top-8 sm:-left-6 lg:-top-14 lg:-left-8 sm:w-28 sm:h-28 lg:w-44 lg:h-44">
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={176}
              height={176}
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 176px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate2 }}
            className="absolute z-10 w-16 h-16 overflow-hidden rounded-full -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 sm:w-20 sm:h-20 lg:w-28 lg:h-28">
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 112px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate3 }}
            className="absolute z-10 w-20 h-20 overflow-hidden rounded-full -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 sm:w-24 sm:h-24 lg:w-36 lg:h-36">
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={144}
              height={144}
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 144px"
            />
          </motion.div>

          <motion.div
            style={{ rotate: rotate4 }}
            className="absolute z-10 w-20 h-20 overflow-hidden rounded-full -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-14 lg:-right-8 sm:w-28 sm:h-28 lg:w-44 lg:h-44">
            <Image
              src={industry.roundImage}
              alt="Round logo"
              width={176}
              height={176}
              className="object-cover w-full h-full"
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

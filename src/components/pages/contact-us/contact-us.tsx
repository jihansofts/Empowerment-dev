"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  // Phone,
  Mail,
  Facebook,
  // Twitter,
  // Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  organizationContainerVariants,
  organizationItemVariants,
} from "@/components/animation/variants";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FaPinterest, FaTiktok } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const pathname = usePathname();
  const t = useTranslations("contact");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const locale = pathname.split("/")[0];
    try {
      setIsLoading(true);
      const response = await fetch(`/api/${locale}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message
        form.reset();
        setIsLoading(false);
      } else {
        // Show error message from server
        setIsLoading(false);
      }

      return result;
    } catch (error) {
      setIsLoading(false);
      console.error("Error sending form data:", error);
    }
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-white"
      initial={{
        background:
          "linear-gradient(289deg, #ff0000 0%, #ffffff 0%, #ffffff 100%)",
      }}
      animate={{
        background:
          "linear-gradient(289deg, #ff0000 20%, #ffffff 30%, #ffffff 40%)",
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}>
      <div className="container relative px-4 py-3 mx-auto">
        {/* Animated Breadcrumb */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-4">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-800 hover:text-gray-600">
                  {t("menu1")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-500" />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-gray-800">
                  {t("menu2")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Animated Container */}
        <motion.div
          variants={organizationContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto overflow-hidden border border-gray-200 shadow-xl backdrop-blur-sm rounded-2xl">
          <div className="grid md:grid-cols-2">
            {/* Contact Information Section */}
            <motion.div
              variants={organizationItemVariants}
              className="p-5 space-y-6 md:p-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t("title")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start justify-center space-x-4 group">
                    <div className="p-3 transition-colors bg-gray-100 rounded-xl group-hover:bg-gray-200">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="">
                      {/* <div className="p-4 border border-gray-400">
                        <div className="w-full ">
                          <h3 className="font-semibold text-[12px]  text-gray-800">
                            {t("location1.title")}
                          </h3>
                        </div>
                        <div className="w-full ">
                          <p>{t("location1.address")}</p>
                        </div>
                      </div> */}
                      <div className="p-4 border border-gray-400">
                        <div className="w-full ">
                          <h3 className="font-semibold text-[12px]  text-gray-800">
                            {t("location2.title")}
                          </h3>
                        </div>
                        <div className="w-full ">
                          <p>{t("location2.address")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4 group">
                    <div className="p-3 transition-colors bg-gray-100 rounded-xl group-hover:bg-gray-200">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-800">
                        {t("phone")}
                      </h3>
                      <p className="text-gray-600"> +40784805998</p>
                    </div>
                  </div> */}

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 transition-colors bg-gray-100 rounded-xl group-hover:bg-gray-200">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-800">
                        {t("email")}
                      </h3>
                      <p className="text-gray-600">info@empowerment.group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  {t("contactsocial")}
                </h3>

                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/WeEmpowerment"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Facebook className="w-6 h-6 text-gray-700" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/empowerment.group25/"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200">
                    <Instagram className="w-6 h-6 text-gray-700" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@empowerment.group25?lang=en"
                    className="flex justify-center p-3 transition-colors bg-gray-100 jus ju rounded-xl hover:bg-gray-200">
                    <FaTiktok className="w-6 h-6 text-gray-700 " />
                  </Link>
                  <Link
                    href="https://www.pinterest.com/empowermentgroup25/"
                    className="flex justify-center p-3 transition-colors bg-gray-100 justi rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <FaPinterest className="w-6 h-6 text-gray-700 " />
                  </Link>
                  {/* <a
                    href="https://x.com/empowerment4492"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Twitter className="w-6 h-6 text-gray-700" />
                  </a> */}
                  <Link
                    href="https://www.youtube.com/@EmpowermentGroupLimited"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Youtube className="w-6 h-6 text-gray-700" />
                  </Link>
                  {/* <a
                    href="https://www.linkedin.com/company/empowerment-group-limited"
                    className="p-3 transition-colors bg-gray-100 rounded-xl hover:bg-gray-200"
                    target="_blank">
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a> */}
                </div>
                <div className="flex mt-5 space-x-4"></div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  {t("workingtime.title")}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span>{t("workingtime.days1")}</span>
                    <span className="font-medium text-green-800">
                      {t("workingtime.hours1")}
                    </span>
                  </p>
                  <p className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span>{t("workingtime.days2")}</span>
                    <span className="font-medium text-green-800">
                      {t("workingtime.hours2")}
                    </span>
                  </p>
                  <p className="flex items-center justify-between py-2">
                    <span>{t("workingtime.days3")}</span>
                    <span className="font-medium text-red-700">
                      {t("workingtime.hours3")}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              variants={organizationItemVariants}
              className="p-5 md:p-6 backdrop-blur-sm bg-gray-50/80">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("contactform.title")}
                </h2>
                <p className="mt-2 text-gray-600">{t("contactform.desc")}</p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.name")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="text-gray-900 border-gray-200 bg-white/80 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            {...field}
                            className="text-gray-900 border-gray-200 bg-white/80 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.subject")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Message subject"
                            {...field}
                            className="text-gray-900 border-gray-200 bg-white/80 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          {t("contactform.message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[150px] bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="z-10 w-full text-white bg-[#FF0000] hover:bg-primary">
                    {isLoading ? "Sending..." : t("contactform.btnText")}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;

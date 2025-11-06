import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  // FaTwitter,
  // FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const t2 = useTranslations("nav");
  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title1")}</h3>
            <p className="mb-4 text-gray-400">{t("desc")}</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/WeEmpowerment"
                className="transition-colors hover:text-blue-500"
                target="_blank">
                <FaFacebookF />
              </Link>
              {/* <a
                href="https://x.com/empowerment4492"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaTwitter />
              </a> */}
              {/* <a
                href="https://www.linkedin.com/company/empowerment-group-limited"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaLinkedinIn />
              </a> */}
              <Link
                href="https://www.instagram.com/empowerment.group25/"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaInstagram />
              </Link>
              <Link
                href="https://www.youtube.com/@EmpowermentGroupLimited"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaYoutube />
              </Link>
              <Link
                href="https://www.tiktok.com/@empowerment.group25?lang=en"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaTiktok />
              </Link>
              <Link
                href="https://www.pinterest.com/empowermentgroup25/"
                className="text-xl transition-colors hover:text-blue-500"
                target="_blank">
                <FaPinterest />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title2")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/building-materials">
                  {t2("building")}
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/education">
                  {t2("education")}
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/industrial">
                  {t2("industrial")}
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/development">
                  {t2("development")}
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/real-estate">
                  {t2("realestate")}
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary"
                  href="/expertise/technology">
                  {t2("technology")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block p-2 font-medium rounded-md hover:bg-accent hover:text-primary">
                  {t("nav1")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("title3")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/board-advisory">{t("nav2")}</Link>
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/executive-search">{t("nav3")}</Link>
              </li>
              <li className="text-gray-400 transition-colors hover:text-white">
                <Link href="/services/leadership">{t("nav4")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("nav1")}</h3>
            <ul className="space-y-2 text-gray-400">
              {/* <li className="w-full p-2 border rounded-lg">
                <span className="text-[12px]">{t("location1.title")}</span>
                <p className="text-sm">{t("location1.address")}</p>
              </li> */}
              <li className="w-full p-2 border rounded-lg">
                <span className="text-[12px] ">{t("location2.title")}</span>
                <p className="text-sm">{t("location2.address")}</p>
              </li>
              {/* <li>{t("phone")}: +40 784 805 998 </li> */}
              <li>{t("email")}: info@empowerment.group</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <p className="text-center text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

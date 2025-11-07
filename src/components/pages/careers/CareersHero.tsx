"use client";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaVenusMars,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import JobModal from "./JobModal";

interface Job {
  SL_No: number;
  Date: string;
  JobCategory: string;
  Title: string;
  Description: string;
  Industry: string;
  Country: string;
  CandidatesOrigin: string;
  Gender: string;
  Experience: string;
  Salary: string;
  Shift: string;
  JobType: string;
  Requirements: string;
  Vacancies: number;
  Status: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjOvtiacwT3fGKQQtk3Mh3ECDyAgwPY-5Nkb7s8Tl6njjaJvFQSXf4z0gqE2WlQBlCmheRtzOQJjsDbKJNsWcIga717FQ0L0asl_4Pj4IdleA3aLB09F881EVwCm63bN46tRpoSGP4sc40nqTTY-6_j5C_EfY1SiZVISRX9s3abyhFGzq5Upvd1HsJy0_iNNjmdcp0ccaNGe7UziK7th36L9v6AActcjZ_yXJ8uyxnpiFb2oqhKyHhtq-XqC7PW7amhfknKru2l83QDzvdSo_Bxc6u5I6mkHQjTu9-6XW41UeDMZbNnptdUyNyAxg&lib=MOG3XTzfacQmAEOKOhbhck_HvpOmuPJJp"
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Career Opportunities
        </h1>
        <p className="mb-10 text-gray-600">
          Explore exciting opportunities and apply today!
        </p>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-black animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading job listings...</p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.Status === "Active")
              .map((job) => (
                <div
                  key={job.SL_No}
                  className="p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl hover:shadow-lg group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 group-hover:text-black">
                      <FaBriefcase className="text-black/70" />{" "}
                      {job.Title || "Untitled"}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      {job.Status}
                    </span>
                  </div>

                  <p className="flex items-center gap-1 mb-3 text-sm text-gray-500">
                    <MdOutlineWork /> {job.Industry} • <FaMapMarkerAlt />{" "}
                    {job.Country}
                  </p>

                  <p className="mb-4 text-sm text-gray-700 line-clamp-3">
                    {job.Description}
                  </p>

                  <div className="pt-3 space-y-2 text-sm text-left text-gray-700 border-t">
                    <p className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-green-600" />
                      <strong>Salary:</strong> {job.Salary}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUserTie className="text-blue-600" />
                      <strong>Experience:</strong> {job.Experience} years
                    </p>
                    <p className="flex items-center gap-2">
                      <IoMdTime className="text-purple-600" />
                      <strong>Shift:</strong> {job.Shift}
                    </p>
                    <p className="flex items-center gap-2">
                      <MdOutlineWork className="text-gray-600" />
                      <strong>Type:</strong> {job.JobType}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUsers className="text-orange-600" />
                      <strong>Vacancies:</strong> {job.Vacancies}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaVenusMars className="text-pink-600" />
                      <strong>Gender:</strong> {job.Gender}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full py-2 mt-5 font-medium text-white transition-all bg-black rounded-lg hover:bg-gray-800">
                    Apply Now
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 col-span-full">
            No job listings available at the moment.
          </p>
        )}
      </div>

      {/* Apply Modal */}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

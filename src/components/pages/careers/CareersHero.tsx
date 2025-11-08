"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaUserTie } from "react-icons/fa";
import JobModal from "./JobModal";

interface Job {
  SL_No: number;
  Title: string;
  Industry: string;
  Country: string;
  Salary: string;
  Experience: string;
  JobType: string;
  Status: string;
  Vacancies: number;
  Date: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Empowerment "
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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-black animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading job listings...</p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((job) => job.Status === "Active")
              .map(
                (job) => (
                  console.log(job, "job data"),
                  (
                    <div
                      key={job.SL_No}
                      className="relative p-6 transition-all bg-white border border-gray-100 shadow-md rounded-3xl hover:shadow-xl backdrop-blur-md">
                      {/* Title + Company */}
                      <div className="mb-4 text-left">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.Title}
                        </h3>
                        <div className="flex items-center justify-between py-2">
                          <p className="text-sm text-gray-500">
                            {job.Industry || "Company Name"}
                          </p>
                          <span className="font-semibold text-gray-500 ">
                            {job.Vacancies}
                            <span className="text-sm"> Vacancies</span>
                          </span>
                        </div>
                      </div>

                      {/* Job Info */}
                      <div className="space-y-3 text-sm text-gray-700">
                        <p className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-500" />
                          {job.Country}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaMoneyBillWave className="text-green-500" />
                          {job.Salary} / year
                        </p>
                        <p className="flex items-center gap-2">
                          <FaUserTie className="text-gray-600" />
                          {job.Experience} Years Experience
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="my-4 border-t border-gray-200"></div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                          {job.JobType}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                          Flexible Hours
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                          Expert Level
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full">
                          Big Data
                        </span>
                      </div>

                      {/* Apply Button */}
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="w-full py-2 mt-6 font-medium text-white transition-all bg-primary rounded-xl hover:bg-secondary-foreground">
                        Apply Now
                      </button>
                    </div>
                  )
                )
              )}
          </div>
        ) : (
          <p className="text-gray-500">
            No job listings available at the moment.
          </p>
        )}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

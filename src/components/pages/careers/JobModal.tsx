"use client";
import { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
} from "react-icons/fa";

interface JobModalProps {
  job: {
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
  };
  onClose: () => void;
}

export default function JobModal({ job, onClose }: JobModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    resume: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resumeBase64 = form.resume ? await toBase64(form.resume) : null;

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          message: form.message,
          resumeBase64,
          jobTitle: job.Title,
          country: job.Country,
          salary: job.Salary,
          experience: job.Experience,
          jobType: job.JobType,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "", resume: null });
      } else {
        alert("❌ Failed to send your application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong while sending your application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-2xl text-gray-400 transition right-4 top-3 hover:text-gray-600">
          ×
        </button>

        {/* Header */}
        <div className="mb-5 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{job.Title}</h2>
          <p className="text-sm text-gray-500">{job.Industry || "Company"}</p>
        </div>

        {/* Job Summary */}
        <div className="p-4 mb-6 text-sm border border-gray-100 bg-gray-50 rounded-xl">
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> {job.Country}
            </p>
            <p className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" /> {job.Salary}
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-gray-600" /> {job.Experience}+ Years
              Experience
            </p>
            <p className="flex items-center gap-2">
              <FaBriefcase className="text-purple-600" /> {job.JobType}
            </p>
          </div>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold text-green-600">
              ✅ Application Sent!
            </h3>
            <p className="mb-5 text-gray-600">
              Thank you for applying! We’ll contact you soon.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 text-white transition-all rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-100"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-100"
              required
            />
            <textarea
              placeholder="Your message (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-100"
            />
            <input
              title="file"
              type="file"
              onChange={(e) =>
                setForm({ ...form, resume: e.target.files?.[0] || null })
              }
              className="w-full px-4 py-2 text-sm border rounded-lg"
              accept=".pdf,.doc,.docx"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white transition-all ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-secondary-foreground"
              }`}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

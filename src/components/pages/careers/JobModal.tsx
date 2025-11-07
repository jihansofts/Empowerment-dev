"use client";
import { useState } from "react";

interface JobModalProps {
  job: {
    SL_No: number;
    Title: string;
    Country: string;
    Salary: string;
    Experience: string;
    JobType: string;
    Description: string;
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

  // Convert resume file → Base64 (for email attachment)
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-8 bg-white shadow-2xl rounded-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-2xl text-gray-400 right-3 top-3 hover:text-gray-600">
          ×
        </button>

        {/* Job Header */}
        <h2 className="mb-1 text-2xl font-bold text-gray-900">
          Apply for {job.Title}
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          {job.Country} • {job.JobType} • {job.Salary}
        </p>

        {/* Job Short Description */}
        <p className="pl-3 mb-6 text-sm italic text-gray-600 border-l-4 border-gray-300">
          {job.Description.slice(0, 120)}...
        </p>

        {/* Success Message */}
        {success ? (
          <div className="text-center">
            <h3 className="mb-2 font-semibold text-green-600">
              ✅ Application Sent!
            </h3>
            <p className="mb-4 text-gray-600">
              Thank you for applying. We’ll contact you soon.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800">
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
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-gray-200"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-gray-200"
              required
            />
            <textarea
              placeholder="Your message (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-gray-200"
            />
            <input
              title="file"
              type="file"
              onChange={(e) =>
                setForm({ ...form, resume: e.target.files?.[0] || null })
              }
              className="w-full px-4 py-2 border rounded-lg"
              accept=".pdf,.doc,.docx"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-white rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

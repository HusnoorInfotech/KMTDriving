import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<string>("");

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmissionStatus(""); // Reset previous status

    try {
      const response = await fetch("https://formsubmit.co/ceae66780c6b6f7373a7bdb345b4f241", {
        method: "POST",
        body: JSON.stringify({ ...form }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("✅ Enquiry submitted successfully!");
        setForm({}); // Reset form fields
      } else {
        setSubmissionStatus("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("❌ Error submitting form. Check your connection.");
    }
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#001730] mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-[#001730]">7400453454 / 7400463454</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-[#001730]">kandivalimotor@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-12 w-12 text-blue-600 mr-6" />
              <span className="text-[#001730]">
                Head Office - No. 6, Chitrakut Society, Swami Vivekananda Rd, beside Balbharati School, Kandivali West, Mumbai, Maharashtra 400067
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-6" />
              <span className="text-[#001730]">Branch Office - 9 /A MHatre plaza MG road dahanukarwadi kandivali west mum _400067</span>
            </div>

            <div className="flex items-center">
              <Clock className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-[#001730]">Mon-Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="contactName"
              onChange={handleForm}
              value={form.contactName || ""}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="contactEmail"
              onChange={handleForm}
              value={form.contactEmail || ""}
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="contactPhonenumber"
              onChange={handleForm}
              value={form.contactPhonenumber || ""}
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="contactMessage"
              onChange={handleForm}
              value={form.contactMessage || ""}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#001730] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enquire Now
            </button>

            {submissionStatus && (
              <p className="text-center mt-4 font-semibold text-blue-600">{submissionStatus}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

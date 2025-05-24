import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CarOption {
  name: string;
  feeFull: number;
  duration: string;
  description: string;
  image: string;
}

interface TransportOption {
  name: string;
  fee: string;
  description: string;
}

const transportOptions: TransportOption[] = [
  {
    name: "LMV TR",
    fee: "₹5500 / ₹6500",
    description: "Light Motor Vehicle Transport license training. Covers gear control, maneuvering in traffic, and commercial driving essentials.",
  },
  {
    name: "A/R TR",
    fee: "₹5500 / ₹6500",
    description: "Auto Rickshaw Transport license course. Focused on passenger safety, smooth handling, and city route navigation.",
  },
  {
    name: "LMV TR + A/R TR",
    fee: "₹9000 / ₹9500",
    description: "Combined course for both LMV TR and A/R TR licensing. Ideal for drivers seeking multi-vehicle transport licenses.",
  },
  {
    name: "TRANS LICENSE",
    fee: "₹9000 / ₹10000",
    description: "Comprehensive Transport License course covering all aspects of commercial and transport vehicle driving.",
  },
];

const Transport: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<CarOption | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (car: CarOption) => {
    setSelectedCourse(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEnrollClick = () => {
    navigate("/enroll");
  };

  return (
    <div className="container mx-auto py-24 px-6 relative">
      {/* Go Back Swiper */}
      <div
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-6 rounded-r-lg cursor-pointer transition-transform duration-300 hover:translate-x-0 translate-x-[-100%]"
        onClick={() => navigate("/courses")}
      >
        <span className="text-lg font-semibold">⬅ Go Back</span>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900">Transport License Courses</h1>
        <p className="text-gray-700 mt-2">
          Choose the best course and start your journey towards professional driving.  
          We offer well-structured transport training programs to equip you for safe and legal commercial driving.
        </p>
      </div>

      {/* Transport License Course Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {transportOptions.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#1f3044]">{item.name}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <p className="text-gray-800 mt-2 font-medium">Fee: {item.fee}</p>
            <button
              className="mt-4 bg-[#1f3044] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {/* Optional: Modal for Car Courses (if reused on this page) */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{selectedCourse.name}</h2>
            <p className="text-gray-600 mb-2">{selectedCourse.duration}</p>
            <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
            <p className="text-gray-600 mb-4">Course Fee: ₹{selectedCourse.feeFull}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Close
              </button>
              <button
                onClick={handleEnrollClick}
                className="bg-[#1f3044] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transport;

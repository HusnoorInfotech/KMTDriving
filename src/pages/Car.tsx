import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CarOption {
  name: string;
  feeFull: number;
  duration: string;
  description: string;
  image: string;
}

const carOptions: CarOption[] = [
  {
    name: "WAGON R",
    feeFull: 2000,
    duration: "10 Days (Beginner Course)",
    description: "Ideal for beginners looking to master city driving. Learn gear shifting, braking control, and basic traffic rules. Special focus on parking, reversing, and night driving.",
    image: "src/assets/images/swift2.jpg",
  },
  {
    name: "SWIFT",
    feeFull: 2200,
    duration: "10 Days (Beginner Course)",
    description: "A smooth and compact car perfect for learning. Covers highway driving, lane discipline, defensive driving techniques, and emergency braking.",
    image: "src/assets/images/swift.jpg",
  },
  {
    name: "HONDA CITY",
    feeFull: 2500,
    duration: "10 Days (Beginner Course)",
    description: "Best for those aiming for advanced control. Covers high-speed driving, roundabouts, U-turns, and intersection handling.",
    image: "src/assets/images/hondacity.jpg",
  },
];

const Car: React.FC = () => {
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
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Our Driving Courses</h1>
        <p className="text-gray-700 mt-2">
  Choose the best car for your training and start your journey today!  
  We offer structured courses designed for beginners and experienced drivers.  
  Learn essential driving skills, traffic rules, and road safety in a practical, hands-on environment.  
  Our expert instructors ensure a comfortable and confident learning experience.
</p>
      </div>

      {/* Course Containers */}
      <div className="space-y-12">
        {carOptions.map((car) => (
          <div key={car.name} className="relative flex items-center">
            {/* Description Container */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/2">
              <h2 className="text-xl font-semibold text-blue-900">{car.name}</h2>
              <hr className="border-t-2 border-gray-300 mt-2" />
              <p className="text-gray-700 mt-2">{car.duration}</p>
              <p className="text-gray-600 text-lg mt-1">Course Fee: ₹{car.feeFull}</p>
              <p className="text-gray-500 text-sm mt-2">{car.description}</p>
              <button
                className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => openModal(car)}
              >
                Enroll Now
              </button>
            </div>

            {/* Car Image Outside the Container */}
            <div className="absolute right-0 w-1/2 flex justify-end">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-[450px] h-[250px] rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Showing Selected Course Details */}
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
      {/* Go Back Button at the Bottom
<div
  className="bg-blue-900 text-white left-1/4 transform -translate-x-1/2 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-700 mt-6 px-4 py-2"
  onClick={() => navigate("/courses")}
>
  <span className="text-lg">⬅ Go Back</span>
</div>*/}
    </div>
  );
};

export default Car;

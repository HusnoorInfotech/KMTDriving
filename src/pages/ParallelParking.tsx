import React from "react";
import { useNavigate } from "react-router-dom";
import parallel1 from "../assets/images/parallel1.png";
import parallel34 from "../assets/images/parallel34.png";
import parallel56 from "../assets/images/parallel56.png";
const ParallelParking: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: "Step 1: Find a Suitable Parking Spot",
      desc: [
        "Look for a space at least 1.5 times your car’s length.",
        "Ensure it's a legal parking zone.",
        "Check your mirrors for pedestrians, cyclists, and vehicles.",
      ],
      img: parallel1,
    },
    {
      step: "Step 2: Align Your Car",
      desc: [
        "Stop parallel to the car in front of the parking space.",
        "Maintain about 2-3 feet of distance.",
        "Check surroundings before proceeding.",
      ],
      img: parallel1,
    },
    {
      step: "Step 3: Start Reversing",
      desc: [
        "Turn the steering wheel fully to the right.",
        "Reverse until your back right wheel aligns with the other car’s rear bumper.",
        "Keep checking mirrors and blind spots.",
      ],
      img: parallel34,
    },
    {
      step: "Step 4: Straighten the Wheels",
      desc: [
        "Turn your steering wheel back to neutral.",
        "Continue reversing straight into the space.",
        "Avoid hitting the curb or the rear car.",
      ],
      img:parallel34,
    },
    {
      step: "Step 5: Final Adjustment",
      desc: [
        "Turn the steering wheel left to align with the curb.",
        "Move forward/back to center your car evenly.",
        "Ensure the vehicle is straight and centered.",
      ],
      img:parallel56,
    },
    {
      step: "Step 6: Center Your Car",
      desc: [
        "Check for enough clearance front and back.",
        "Engage the parking brake.",
        "Exit only when safe.",
      ],
      img:parallel56,
    },
  ];

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-24 px-6">
      <div className="bg-white border border-gray-200 shadow-md p-12 max-w-5xl w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Mastering Parallel Parking: A Step-by-Step Guide
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Parallel parking can seem intimidating, but with clear instructions and a bit of practice, you'll park with ease.
          </p>
        </div>

        {/* Top Image */}
        <div className="flex justify-center mb-16">
          <img
            src="src/assets/images/parallelparking.jpg"
            alt="Parallel Parking Overview"
            className="rounded-xl shadow-sm w-full max-h-[450px] object-cover"
          />
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {/* Two steps per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col space-y-8">
                {/* Step Layout: Image on top, description below */}
                <div className="w-full mb-8">
                  <img
                    src={item.img}
                    alt={item.step}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {item.step}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-6">
                    {item.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 bg-gray-50 border-l-4 border-gray-600 p-8 rounded-lg text-center text-gray-700 italic shadow-sm">
          “Parallel parking isn't about perfection—it's about confidence, control, and calmness. Practice and patience make all the difference.”
        </div>

        {/* Navigation */}
        <div className="mt-20 text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300"
          >
            ← Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallelParking;

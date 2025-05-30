import React from "react";
import { useNavigate } from "react-router-dom";
import betterdriving from "../assets/images/better-driving.jpg";
const Drive: React.FC = () => {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Use Mirrors Efficiently",
      desc: "Regularly check your side and rearview mirrors to stay aware of vehicles and blind spots. For example, glance at your mirrors every 5–8 seconds, especially in heavy traffic.",
    },
    {
      title: "Anticipate the Actions of Others",
      desc: "Don’t just drive your car—read the road. If someone is drifting, slowing suddenly, or seems distracted, give extra space. Predicting others’ moves helps avoid surprises.",
    },
    {
      title: "Stay Smooth with the Controls",
      desc: "Avoid jerky starts, hard braking, or sharp turns. Driving smoothly isn’t just safer—it’s also easier on your vehicle and passengers. Think of it like gliding, not jerking.",
    },
    {
      title: "Practice Defensive Driving",
      desc: "Always have a backup plan. Slow down near intersections, yield when unsure, and assume others might break the rules. Being cautious can prevent collisions.",
    },
    {
      title: "Keep Learning and Practicing",
      desc: "Driving is a lifelong skill. Take advanced driving lessons, practice reverse parking, or learn to drive in various weather. Experience builds confidence.",
    },
  ];

  return (
    <div className="flex justify-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-24">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full transition-all">

        {/* Title & Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            5 Car Driving Tips That Make You a Better Driver
          </h1>
          <p className="text-gray-600 text-lg">
            Driving isn't just about reaching your destination—it's about doing so confidently, safely, and smoothly. Whether you’re a beginner or a pro, these tips can elevate your skills.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-8">
          <img
            src={betterdriving}
            alt="Better Driving Tips"
            className="rounded-2xl shadow-lg w-full max-h-96 object-cover"
          />
        </div>

        {/* Driving Tips List */}
        <div className="grid gap-6 mt-6">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-2xl font-bold text-blue-700">{index + 1}.</div>
              <div>
                <h3 className="font-semibold text-lg text-blue-900">{tip.title}</h3>
                <p className="text-gray-700">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="mt-10 p-6 bg-blue-100 text-blue-800 font-medium italic rounded-xl text-center shadow-inner">
          "The best drivers are always learning. Stay calm, stay sharp, and never stop improving."
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            ← Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drive;

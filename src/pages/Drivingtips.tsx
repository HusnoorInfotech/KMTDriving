import React from "react";
import { useNavigate } from "react-router-dom";

const BetterDrivingTips: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen py-24">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        {/* Title & Description */}
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          5 Car Driving Tips That Make You a Better Driver
        </h1>
        <p className="text-gray-700 text-center mb-6">
          There’s no age for learning, and the scope of learning is infinite. When it comes to driving, these 5 expert tips can elevate your skills, confidence, and safety on the road.
        </p>

        {/* Cover Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/better-driving.png"
            alt="Better Driving Tips"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Driving Tips Section */}
        <div className="mt-6 space-y-10 text-left">
          {/* Tip 1 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">1. Keep Your Hands at the Correct Position</h2>
            <div className="flex justify-center mb-3">
              <img
                src="/images/hands-position.jpg"
                alt="Hands Position on Steering Wheel"
                className="rounded-lg shadow-md w-3/4"
              />
            </div>
            <p className="text-gray-700">
              The modern recommendation is to keep your hands at the <strong>9 and 3 o’clock positions</strong> on the steering wheel.
              This offers better control and reduces fatigue.
            </p>
          </div>

          {/* Tip 2 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">2. Focus on Smooth Steering and Braking</h2>
            <div className="flex justify-center mb-3">
              <img
                src="/images/smooth-driving.jpg"
                alt="Smooth Steering and Braking"
                className="rounded-lg shadow-md w-3/4"
              />
            </div>
            <p className="text-gray-700">
              Avoid jerky movements. <strong>Steer smoothly</strong> and <strong>brake gently</strong> to reduce wear and tear, improve fuel economy, and ensure passenger comfort.
            </p>
          </div>

          {/* Tip 3 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">3. Maintain Safe Following Distance</h2>
            <div className="flex justify-center mb-3">
              <img
                src="/images/safe-distance.jpg"
                alt="Maintain Safe Distance"
                className="rounded-lg shadow-md w-3/4"
              />
            </div>
            <p className="text-gray-700">
              Always keep at least a <strong>3-second gap</strong> between you and the car ahead. Increase to 5–6 seconds in bad weather or low visibility.
            </p>
          </div>

          {/* Tip 4 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">4. Listen to Your Car</h2>
            <div className="flex justify-center mb-3">
              <img
                src="/images/car-checkup.jpg"
                alt="Car Maintenance Awareness"
                className="rounded-lg shadow-md w-3/4"
              />
            </div>
            <p className="text-gray-700">
              Your car gives signs before trouble starts. Listen for unusual sounds, monitor the dashboard, and inspect tires and fluid levels regularly.
            </p>
          </div>

          {/* Tip 5 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">5. Stay Calm and Avoid Road Rage</h2>
            <div className="flex justify-center mb-3">
              <img
                src="/images/stay-calm.jpg"
                alt="Stay Calm Behind the Wheel"
                className="rounded-lg shadow-md w-3/4"
              />
            </div>
            <p className="text-gray-700">
              A better driver is also emotionally smart. Stay calm, be patient with traffic, and never engage with aggressive drivers. Practice defensive driving.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="text-blue-600 underline font-semibold hover:text-blue-800"
          >
            Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetterDrivingTips;

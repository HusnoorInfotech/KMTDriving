import { useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

const AngularParking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-24 px-4 flex justify-center items-start">
      <div className="bg-white shadow-2xl p-8 max-w-4xl w-full transition-all duration-300 transform hover:scale-[1.01]">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">
            A Comprehensive Guide to Angular Parking
          </h1>
          <p className="text-gray-600 text-lg">
            Learn the techniques and principles of angular (diagonal) parking for greater confidence and control.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md mb-8">
          <img
            src="src/assets/images/angular.jpg"
            alt="Angular Parking Overview"
            className="w-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 p-5 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">🔰 What is Angular Parking?</h2>
          <p className="text-gray-700">
            Angular parking—often referred to as diagonal parking—involves positioning the vehicle at an angle (typically 45° or 60°) relative to the curb or lane. It is commonly used in parking lots as it facilitates efficient vehicle entry and exit.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 p-5 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">🌟 Advantages of Angular Parking</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Quicker and simpler than parallel parking</li>
            <li>Improved visibility of parking availability</li>
            <li>Maximizes space utilization</li>
            <li>Ideal for high-traffic and commercial areas</li>
          </ul>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-10">
          {/* Step 1 & 2 */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="space-y-4 text-gray-700">
              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <FaCarSide /> Step 1: Identify a Suitable Parking Space
              </h2>
              <p>Look for a clearly marked 45° or 60° angled space. Always indicate your intention using your signal.</p>

              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mt-4">
                <FaArrowRight /> Step 2: Position the Vehicle Correctly
              </h2>
              <p>Maintain a safe distance from parked cars (around 4 feet) and align your front bumper with the center of the parking space.</p>
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="space-y-4 text-gray-700">
              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <FaArrowRight /> Step 3: Enter the Space Smoothly
              </h2>
              <p>Steer gently into the space, maintaining alignment with the angle, and ensure you stay within the lines.</p>

              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mt-4">
                <FaCheckCircle /> Step 4: Final Adjustment
              </h2>
              <p>Once in position, center your vehicle, ensure it’s not protruding, engage the handbrake, and check surroundings before exiting.</p>
            </div>
          </div>
        </div>

        {/* Exiting Tips */}
        <div className="bg-blue-50 p-5 rounded-xl mb-8 mt-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Safely Exiting the Parking Spot</h2>
          <p className="text-gray-700">
            Reverse slowly, continuously scanning for pedestrians and oncoming vehicles. Once your rear clears the space, turn the wheel in your intended direction of travel. Always use mirrors and perform shoulder checks for maximum safety.
          </p>
        </div>

        {/* Common Mistakes */}
        <div className="bg-red-50 p-5 rounded-xl mb-8 border border-red-200">
          <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2 mb-2">
            <FaExclamationTriangle /> Frequent Mistakes to Avoid
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Misjudging the timing of the turn</li>
            <li>Neglecting to check mirrors and blind spots</li>
            <li>Parking across lines or too close to others</li>
            <li>Failing to fully straighten the vehicle</li>
          </ul>
        </div>

        {/* Pro Tips */}
        <div className="bg-yellow-50 p-5 rounded-xl mb-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-700 flex items-center gap-2 mb-2">
            <FaLightbulb /> Professional Tips
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Practice in an open lot to build confidence and accuracy.</li>
            <li>Utilize your mirrors to maintain proper spacing and alignment.</li>
            <li>Don't hesitate to adjust by reversing and realigning if needed.</li>
          </ul>
        </div>

        {/* Navigation Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/Syllabus")}
            className="bg-blue-50 hover:bg-blue-700 text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md transition"
          >
            Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default AngularParking;
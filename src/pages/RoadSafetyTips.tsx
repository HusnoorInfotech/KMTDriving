import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  GaugeCircle,
  PhoneOff,
  ShieldAlert,
  MoveRight,
  CarFront,
  Wrench,
  CloudDrizzle,
  Users,
  Smile,
} from "lucide-react";

const tips = [
  {
    icon: <ShieldCheck className="text-blue-700 w-6 h-6" />,
    title: "Wear Your Seatbelt",
    description:
      "Seatbelts are fundamental to road safety. Ensure every occupant is secured before you start driving.",
  },
  {
    icon: <GaugeCircle className="text-blue-700 w-6 h-6" />,
    title: "Observe Speed Regulations",
    description:
      "Speed limits are established to reflect road, traffic, and environmental conditions. Exceeding them compromises control and increases risk.",
  },
  {
    icon: <PhoneOff className="text-blue-700 w-6 h-6" />,
    title: "Eliminate Distractions",
    description:
      "Avoid mobile phones, multitasking, or anything that diverts your attention. Safe driving demands complete focus.",
  },
  {
    icon: <ShieldAlert className="text-blue-700 w-6 h-6" />,
    title: "Never Drive Under the Influence",
    description:
      "Driving requires clear judgment and quick reflexes—both are compromised under the influence of alcohol or drugs.",
  },
  {
    icon: <MoveRight className="text-blue-700 w-6 h-6" />,
    title: "Signal Your Intentions",
    description:
      "Always use indicators to communicate lane changes or turns. Predictability prevents collisions.",
  },
  {
    icon: <CarFront className="text-blue-700 w-6 h-6" />,
    title: "Maintain Safe Following Distance",
    description:
      "Tailgating reduces reaction time. A minimum 3-second gap helps ensure safety in sudden stops.",
  },
  {
    icon: <Wrench className="text-blue-700 w-6 h-6" />,
    title: "Prioritize Vehicle Maintenance",
    description:
      "Regular servicing ensures your vehicle remains roadworthy. Don’t overlook brakes, tires, or lights.",
  },
  {
    icon: <CloudDrizzle className="text-blue-700 w-6 h-6" />,
    title: "Adapt to Weather Conditions",
    description:
      "Rain, fog, or snow require slower speeds, increased caution, and often the use of headlights.",
  },
  {
    icon: <Users className="text-blue-700 w-6 h-6" />,
    title: "Respect Vulnerable Road Users",
    description:
      "Pedestrians and cyclists deserve your full attention and space. Yield when required and stay alert.",
  },
  {
    icon: <Smile className="text-blue-700 w-6 h-6" />,
    title: "Remain Patient and Composed",
    description:
      "Road rage and aggressive driving put everyone at risk. Calm decisions ensure better outcomes.",
  },
];

const RoadSafetyTips: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-gray-100 py-24 px-6 min-h-screen">
      <div className="bg-white shadow-2xl p-10 max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          Top 10 Essential Road Safety Guidelines
        </h1>
        <p className="text-gray-700 text-center mb-8 text-lg leading-relaxed">
          Every journey, no matter how short, carries responsibility. These safety principles help you protect yourself and others while fostering a culture of careful, responsible driving.
        </p>

        {/* Tips List */}
        <div className="space-y-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-2 bg-white rounded-full shadow">{tip.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-1">
                  {index + 1}. {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 p-6 bg-blue-100 text-blue-800 font-medium italic rounded-xl text-center shadow-inner">
          “Responsible driving is not a choice—it’s a duty. Respect the road, respect life.”
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="inline-block bg-blue-50 text-black px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            ← Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadSafetyTips;

import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  GaugeCircle,
  Smartphone,
  MoveRight,
  CornerDownRight,
  TrafficCone,
  Eye,
  CloudRain,
  Wrench,
  Smile,
} from "lucide-react";

const SaferDrivingPractices: React.FC = () => {
  const navigate = useNavigate();

  const practices = [
    { icon: <ShieldCheck className="text-blue-700" />, title: "Wear Your Seatbelt at All Times", desc: "Seatbelts are your first line of defense in any collision. Make it a consistent habit for all passengers." },
    { icon: <GaugeCircle className="text-blue-700" />, title: "Adhere to Speed Limits", desc: "Drive within the posted speed limits and adjust appropriately for weather, traffic, and road conditions." },
    { icon: <Smartphone className="text-blue-700" />, title: "Minimize Distractions", desc: "Avoid using mobile devices, eating, or multitasking while driving. Focus is key to road safety." },
    { icon: <MoveRight className="text-blue-700" />, title: "Signal All Intentions Clearly", desc: "Use turn signals well in advance to communicate your movements and prevent surprises." },
    { icon: <CornerDownRight className="text-blue-700" />, title: "Maintain a Safe Following Distance", desc: "Apply the 3-second rule to ensure enough reaction time in case the vehicle ahead stops suddenly." },
    { icon: <TrafficCone className="text-blue-700" />, title: "Obey Traffic Rules and Signage", desc: "Respect traffic lights, signs, and lane markings. Avoid rushing through yellow or red lights." },
    { icon: <Eye className="text-blue-700" />, title: "Stay Alert and Sober", desc: "Never drive under the influence of alcohol, drugs, or extreme fatigue. Always be fully alert." },
    { icon: <CloudRain className="text-blue-700" />, title: "Adjust for Weather Conditions", desc: "In adverse weather, reduce speed, increase following distance, and use headlights as needed." },
    { icon: <Wrench className="text-blue-700" />, title: "Ensure Regular Vehicle Maintenance", desc: "Routinely check your brakes, tires, lights, and fluid levels to keep your vehicle roadworthy." },
    { icon: <Smile className="text-blue-700" />, title: "Drive with Patience and Courtesy", desc: "Remain calm during stressful situations. Practice patience and let aggressive drivers pass." },
  ];

  return (
    <div className="flex justify-center p-6 bg-white min-h-screen py-24">
      <div className="bg-white shadow-2xl p-10 max-w-4xl w-full">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            10 Essential Practices for Safer Driving
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Responsible driving goes beyond knowing the rules—it’s about adopting the right mindset and behaviors to protect yourself and others.
          </p>
        </div>

        {/* Illustrative Image */}
        <div className="flex justify-center mb-8">
        </div>

        {/* Safety Practices */}
        <div className="grid gap-6">
          {practices.map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-blue-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="p-2 bg-white rounded-full shadow-sm">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-blue-900">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="mt-10 p-6 bg-blue-100 text-blue-800 font-medium italic rounded-xl text-center shadow-inner">
          "Safety doesn’t happen by accident. Stay aware, stay alive."
        </div>

        {/* Navigation Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="bg-blue-50 text-black px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors"
          >
            Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaferDrivingPractices;

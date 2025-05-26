import { useNavigate } from "react-router-dom";
import { Lightbulb, CheckCircle2 } from "lucide-react";

const PerpendicularParking: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Step 1: Locate an Empty Perpendicular Spot",
      points: [
        "Ensure the space is wide enough and lines are clearly visible.",
        "Check mirrors and surroundings for safety.",
      ],
    },
    {
      title: "Step 2: Signal and Position Your Vehicle",
      points: [
        "Signal your intent and reduce speed.",
        "Keep your car 5–6 feet away from the space.",
      ],
    },
    {
      title: "Step 3: Turn and Enter the Spot",
      points: [
        "Turn the steering wheel sharply as your bumper crosses the first line.",
        "Enter slowly while checking both sides.",
      ],
    },
    {
      title: "Step 4: Straighten and Center the Vehicle",
      points: [
        "Straighten your wheels once mostly inside the spot.",
        "Ensure your car is centered and not over any lines.",
      ],
    },
    {
      title: "Step 5: Final Checks",
      points: [
        "Engage the handbrake.",
        "Check surroundings before exiting.",
      ],
    },
  ];

  return (
    <div className="flex justify-center px-4 py-20 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl p-10 w-full max-w-5xl space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Mastering Perpendicular Parking
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Perpendicular parking can feel challenging at first, but with this comprehensive guide, you'll gain the confidence and skill needed to execute it perfectly every time.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="src/assets/images/perpendicularparking.png"
            alt="Perpendicular Parking Overview"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
          />
        </div>

        {/* Step-by-Step Guide */}
        <section>
          <h2 className="text-xl font-medium text-gray-800 mb-6">Step-by-Step Guide</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {step.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section>
          <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-gray-600" /> Quick Tips
          </h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Practice with cones or empty lots first.",
              "Adjust mirrors to reduce blind spots.",
              "Don’t rush—take your time.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="text-gray-600 mt-1" /> <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why It Matters */}
        <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Why It Matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Perpendicular parking is a necessary skill for crowded areas such as shopping malls, schools, and public spaces. Mastering this technique not only improves your vehicle control but also enhances your confidence behind the wheel.
          </p>
        </section>

        {/* Quote */}
        <div className="p-6 border-l-4 border-gray-400 bg-white rounded-xl shadow-md italic text-gray-800 text-center">
          “Parking isn't just about precision—it's about patience. Master the process, and confidence will follow.”
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/Syllabus")}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md transition"
          >
            ← Back to Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerpendicularParking;

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecommend: (recommendedCourses: string[]) => void;
}

const RecommendationModal: React.FC<RecommendationModalProps> = ({ isOpen, onClose, onRecommend }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [ageGroup, setAgeGroup] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [hasTwoWheelerLicense, setHasTwoWheelerLicense] = useState<string>("");
  const [hasFourWheelerLicense, setHasFourWheelerLicense] = useState<string>("");

  const getRecommendedCourses = () => {
    let recommendations: string[] = [];

    if (vehicleType === "2-Wheeler") {
      if (experience === "I don't know driving" || experience === "I am underconfident") {
        recommendations.push("Two-Wheeler License Class (Basic Training)");
      }
    } else if (vehicleType === "4-Wheeler") {
      if (experience === "I don't know driving" || experience === "I am underconfident") {
        recommendations.push("Learner Track Course (Basic Training)", "Learner Extended Track Course (Comprehensive Training)");
      }
      if (experience === "I know how to drive") {
        recommendations.push("Confidence Booster Course", "Fast Track Course");
      }
      if (experience === "I know driving well" && hasFourWheelerLicense === "Yes") {
        recommendations.push("Defensive Driving Course", "Night & Highway Driving Course");
      }
      if (hasFourWheelerLicense === "Yes" && ageGroup === "25-34 years") {
        recommendations.push("Transport License Course (For Commercial Drivers)");
      }
    }

    return recommendations;
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendations(true);
      onRecommend(getRecommendedCourses());
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6 rounded-lg shadow-lg">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <video autoPlay loop muted className="w-20 h-20">
              <source src="animationbubble.webm" type="video/webm" />
            </video>
            <p className="text-lg font-semibold mt-4 text-center text-blue-900">
              Recommending the best course for you...
            </p>
          </div>
) : showRecommendations ? (

          <div>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">Recommended Courses</DialogTitle>
            </DialogHeader>
            <ul className="mt-4 list-disc list-inside text-gray-800">
              {getRecommendedCourses().map((course, index) => (
                <li key={index} className="text-md font-medium">{course}</li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Button onClick={onClose} className="bg-blue-900 text-white px-6 py-2 rounded-md">
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">Help us recommend the best course</DialogTitle>
            </DialogHeader>

            {/* Age Group Selection */}
            <div className="mt-4">
              <p className="font-medium mb-2">What’s your Age?</p>
              <div className="grid grid-cols-2 gap-2">
                {["18-24 years", "25-34 years", "35+ years"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="ageGroup" value={option} onChange={() => setAgeGroup(option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Vehicle Type Selection */}
            <div className="mt-4">
              <p className="font-medium mb-2">What do you want to drive?</p>
              <div className="grid grid-cols-2 gap-2">
                {["2-Wheeler", "4-Wheeler"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="vehicleType" value={option} onChange={() => setVehicleType(option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Two-Wheeler License Question */}
            <div className="mt-4">
              <p className="font-medium mb-2">Do you have a 2-Wheeler License?</p>
              <div className="grid grid-cols-2 gap-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="twoWheelerLicense" value={option} onChange={() => setHasTwoWheelerLicense(option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Four-Wheeler License Question */}
            <div className="mt-4">
              <p className="font-medium mb-2">Do you have a 4-Wheeler License?</p>
              <div className="grid grid-cols-2 gap-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="fourWheelerLicense" value={option} onChange={() => setHasFourWheelerLicense(option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Driving Experience */}
            <div className="mt-4">
              <p className="font-medium mb-2">Rate your Driving Experience?</p>
              <div className="grid grid-cols-2 gap-2">
                {["I don't know driving", "I am underconfident", "I know how to drive", "I know driving well"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="experience" value={option} onChange={() => setExperience(option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <Button onClick={handleSubmit} className="bg-blue-900 text-white px-6 py-2 rounded-md">
                OK
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RecommendationModal;

import React from "react";
import Reviews from "../pages/review"; // Ensure correct import path

const ReviewsPage: React.FC = () => {
  return (
    <div className="max-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Driving School Reviews</h1>
      <Reviews />
    </div>
  );
};

export default ReviewsPage;

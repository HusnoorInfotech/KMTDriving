import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  fullName: string;
  email: string;
  rating: number;
  reviewText: string;
}

const ReviewForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    rating: 0,
    reviewText: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating: number) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/demo/review", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setSubmissionStatus("Review submitted successfully!");
      setForm({ fullName: "", email: "", rating: 0, reviewText: "" });
      
      fetchReviews(); // Refresh reviews
    } else {
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

  {/*const fetchReviews = async () => {
    //const response = await fetch("http://localhost:8080/demo/review");
    //const data = await response.json();
    //console.log(data);
    //setReviews(data);
    const fetchById = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/${form.fullName}`);
        if (response.ok) {
          const result = await response.json();
          setReviews(result); // Store the fetched document
        } else {
           // Clear specific data if ID is invalid
          console.log("Data not found or invalid ID.");
        }
      } catch (error) {
        console.error("Error fetching data by ID:", error);
      }
    };*/}

    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:8080/demo/review");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.log("Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center bg-gray-100 p-16 space-x-16 pt-24">
      {/* Left Section: Submit Review Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center mb-6">Submit a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleForm}
            placeholder="Your Full Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          {/* Rating Section */}
          <div className="text-center">
            <p className="font-semibold text-lg">Rating: {form.rating} / 5</p>
            <div className="flex justify-center space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  className={`cursor-pointer ${
                    form.rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>
          </div>

          <textarea
            name="reviewText"
            value={form.reviewText}
            onChange={handleForm}
            placeholder="Your Review"
            className="w-full p-3 border rounded-lg"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-center text-green-600">{submissionStatus}</p>
        )}
      </div>

      {/* Right Section: Reviews */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2">
        <h2 className="text-xl font-semibold text-center mb-4">User Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-semibold">{review.fullName}</p>
              <p className="text-sm text-gray-600">{review.email}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-sm mt-1">{review.reviewText}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewForm;

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Calendar, Award, Car, Clock, Shield, BookOpen } from "lucide-react";
// import { motion } from "framer-motion"; // Import motion from framer-motion
// import { useRef } from "react";
import BookingForm from "./book";
import RecommendationModal from "../pages/RecommendationModal";

// Cars details

interface Course {
  title: string;
  description: string;
  practical: number;
  simulator?: number;
  theory: number;
  recommended?: boolean;
  image: string;
  category: string;
  duration: string;
  fee: string;
}

const courses: Course[] = [
  {
    title: "Learner Extended Track Course (Comprehensive Training)",
    description:
      "Perfect for those who have never driven before. Gain confidence with simulators, real-world driving, and basic traffic rules over 20 days.",
    practical: 15,
    simulator: 5,
    theory: 4,
    recommended: true,
    image: "src/assets/images/drive1.png",
    category: "Beginner",
    duration: "20 Days",
    fee: "₹4,500",
  },
  {
    title: "Learner Track Course (Basic Training)",
    description:
      "If you’re new to driving and want to learn the fundamentals, this course is for you. Over 10 days, you’ll gain confidence behind the wheel by practicing essential driving skills under expert guidance.",
    practical: 6,
    simulator: 2,
    theory: 2,
    recommended: true,
    image: "src/assets/images/drive2.jpg",
    category: "Advanced",
    duration: "10 Days",
    fee: "₹2,000",
  },
  // Transport Courses
  {
    title: "Transport License Course (For Commercial Drivers)",
    description:
      "Prepares you for the transport license test by covering heavy vehicle handling, route planning, and passenger safety.",
    practical: 10,
    theory: 5,
    image: "src/assets/images/drive1.png",
    category: "Transport",
    duration: "10-15 Days",
    fee: "₹5,500 - ₹10,000",
  },
];


export default function Courses() {
  // const navigate = useNavigate(); // Initialize the useNavigate hook
  // const [selectedCourse, setSelectedCourse] = useState<any | null>(null); // To store selected course details
  // const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  //const handleCourseClick = (course: any) => {
  //setSelectedCourse(course); // Set the selected course on click
//setIsModalOpen(true); // Open the modal
  //};

  // const closeModal = () => {
    // setIsModalOpen(false); // Close the modal
    // setSelectedCourse(null); // Reset selected course
  // };

  // const handleEnrollClick = () => {
    // navigate("/enroll"); // Navigate to the enrollment page
    // setIsModalOpen(false); // Close the modal
  // };
/*
  const handleCourseSelection = (course: any) => {
    console.log("Selected course:", course);
    setSelectedCourse(course); // Ensure setSelectedCourse is defined
  };
  */
  
/*
  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
*/ /*
  const handleCourseClick = (course: any) => {
    console.log("Course clicked:", course);
    setSelectedCourse(course);
  };*/



  // const carsRef = useRef<HTMLDivElement>(null);
  // const licenseRef = useRef<HTMLDivElement>(null);
  // const transportLicenseRef = useRef<HTMLDivElement>(null);

  const categories = ["Beginner", "Advanced", "Transport"];

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]);

  const handleCloseRecommendationModal = () => setIsRecommendationModalOpen(false);

  const handleRecommend = (courses: string[]) => {
    setRecommendedCourses(courses);
    console.log("Recommended Courses:", courses);
  };


  return (
    
    <div className="bg-white shadow-lg pt-24 pb-12 ">
      <div className="container mx-auto px-6">
        
        {/* Hero Section & Recommended Course */}
        <div className="bg-white text-[#182978] p-6 md:p-12">
          <div className="text-left">
            <h1 className="text-xl md:text-3xl font-serif font-bold">
              Choose Your Car Driving Course to Drive With Confidence on the Road
            </h1>
            <p className="mt-4 font-serif text-lg text-gray-700">
              Our meticulously designed courses help transform beginners into skilled and confident drivers. Choose your desired course from a range of driving training courses and master the skill of driving at Maruti Suzuki Driving School.
            </p>
            <p className="mt-4 font-serif font-semibold">
              Want to check out which of our courses would be most suitable for you? Take a short quiz below
            </p>
            <button 
        onClick={() => setIsRecommendationModalOpen(true)}
        className="mt-4 px-6 py-3 bg-[#182978] text-white font-semibold rounded-lg 
                   hover:bg-[#6688cc] transition duration-300 ease-in-out focus:outline-none 
                   focus:ring-2 focus:ring-[#6688cc] focus:ring-offset-2"
      >
        GET RECOMMENDED COURSES
      </button>

      {/* ✅ Show Recommendation Modal */}
      {isRecommendationModalOpen && (
        <RecommendationModal 
          isOpen={isRecommendationModalOpen} 
          onClose={handleCloseRecommendationModal} 
          onRecommend={handleRecommend} 
        />
      )}

      {/* ✅ Show recommended courses if available */}
      {recommendedCourses.length > 0 && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Recommended Courses:</h2>
          <ul>
            {recommendedCourses.map((course, index) => (
              <li key={index} className="text-lg">{course}</li>
            ))}
          </ul>
        </div>
      )}
          </div>
        </div>

        {/* Loop Through Categories */}
{categories.map((category) => (
  <div key={category} className="mt-8">
    <h2 className="text-2xl font-semibold text-blue-900 mb-4">
      {category} Courses
    </h2>

    {/* Display Courses Under Each Category */}
    {courses
      .filter((course) => course.category === category)
      .map((course, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 my-6"
        >
          {/* Left: Course Details */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold flex items-center">
              {course.title}
            </h2>
            <p className="mt-3 text-gray-700">{course.description}</p>

            {/* Course Stats */}
            <div className="mt-6 flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{course.practical}</div>
                <p className="text-gray-600">Practical Sessions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{course.theory}</div>
                <p className="text-gray-600">Theory Sessions</p>
              </div>
            </div>

            {/* Course Duration & Fee */}
            <div className="mt-4">
              <p className="text-gray-700">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-gray-700">
                <strong>Fee:</strong> {course.fee}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
            {/* <button */}
  {/* // className="bg-gray-700 text-white px-4 py-2 rounded-md" */}
  {/* // onClick={() => { */}
    {/* // switch (course.category) { */}
      {/* // case "Beginner": */}
        {/* // navigate("/cars"); */}
        {/* // break; */}
      {/* // case "Advanced": */}
        {/* // navigate("/car"); */}
        {/* // break; */}
        {/* // case "Intermediate": */}
        {/* // navigate("/LicenseFees"); */}
        {/* // break; */}
      {/* // case "Transport": */}
        {/* // navigate("/transport"); */}
        {/* // break; */}
      {/* // default: */}
        {/* // break; */}
    {/* // } */}
  {/* // }} */}
{/* > */}
  {/* EXPLORE NOW */}
            {/* </button> */}
<div>
      {/* Register Your Interest Button */}
      <button
        className="bg-blue-900 text-white px-4 py-2 rounded-md"
        onClick={() => setIsBookingOpen(true)}
      >
        I AM INTERESTED
      </button>

      {/* BookingForm Modal */}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
            </div>
          </div>

          {/* Right: Course Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={course.image}
              alt={course.title}
              className="w-80 h-80 rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
  </div>
))}
      </div>
      </div>
  );
}

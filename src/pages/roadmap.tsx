"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import drive5 from "../assets/images/drive5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Plus, Minus } from "lucide-react";

const Roadmap: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const roadmapSteps = [
    {
      title: "Car Training",
      description:
        "Learn the fundamentals of driving, including vehicle handling, road safety, and traffic awareness.",
      points: [
        "Master basic vehicle controls like steering, braking, and accelerating.",
        "Learn traffic rules, road signs, and lane discipline.",
        "Gain practical on-road driving experience in various conditions.",
        "Understand defensive driving techniques for safety.",
        "Practice reversing, parallel parking, and hill starts.",
      ],
    },
    {
      title: "License Courses",
      description:
        "Choose the right license class (LMV, MCWG, etc.) and prepare thoroughly for the licensing exam.",
      points: [
        "Attend theory classes to understand driving laws and safety practices.",
        "Take mock tests to prepare for the learner's license exam.",
        "Receive assistance with documentation and forms.",
        "Opt for specialized training for two-wheelers or LMVs.",
        "Understand emergency handling and first-aid basics.",
      ],
    },
    {
      title: "Transport License",
      description:
        "Advance your skills and qualify for a transport license to drive commercial vehicles.",
      points: [
        "Training for HMVs like trucks and buses.",
        "Learn cargo rules and passenger regulations.",
        "Practice inspection and maintenance.",
        "Understand transport compliance and paperwork.",
        "Support for government approvals.",
      ],
    },
  ];

  const licenseProcess = [
    {
      title: "Step 1: Apply for a Learner's Permit",
      description: "Submit the required documents and fees to get your learner's permit.",
      image: {drive5},
    },
    {
      title: "Step 2: Complete Driver Training",
      description: "Enroll in a certified driving school and complete your training hours.",
      image: {drive5},
    },
    {
      title: "Step 3: Schedule a Driving Test",
      description: "Book your driving test appointment with the local transport authority.",
      image: {drive5},
    },
    {
      title: "Step 4: Pass the Driving Test",
      description: "Demonstrate your driving skills to get approval for your license.",
      image: {drive5},
    },
    {
      title: "Step 5: Receive Your Driving License",
      description: "Once you pass, your license will be issued. Drive responsibly!",
      image: {drive5},
    },
  ];

  const faqs = [
    {
      question: "HOW CAN I FIND KANDIVALI MOTOR TRAINING SCHOOL NEAR ME?",
      answer:
        "You can find Kandivali Motor Training School by searching it on Google Maps or visiting the official website for directions and contact details.",
    },
    {
      question: "WHAT CAN A STUDENT EXPECT AT KANDIVALI MOTOR TRAINING SCHOOL?",
      answer:
        "Students receive hands-on training from certified instructors, modern vehicles, and guidance on both practical and theoretical aspects of driving.",
    },
    {
      question: "HOW MANY BRANCHES DOES KANDIVALI MOTOR TRAINING SCHOOL HAVE?",
      answer:
        "Please check the official website or contact the school directly for information about branches and services offered.",
    },
    {
      question: "IS THERE AN AGE RESTRICTION FOR DRIVING COURSES?",
      answer:
        "Yes, students must be at least 18 years old to enroll for non-transport driving courses, and 20+ with 8th pass qualification for transport licenses.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 mb-24 bg-white">
      {/* Hero Section */}
      <div className="bg-[#182978] text-white h-[40vh] flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-4 font-serif tracking-wider">
          Your Journey Starts Here
        </h1>
        <p className="text-xl font-light">
          Explore our roadmap to becoming a confident, licensed driver.
        </p>
      </div>

      {/* Swiper - Roadmap Steps */}
      <div className="max-w-6xl mb-24 mt-16 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mb-16"
        >
          {roadmapSteps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row p-8 transition duration-300 hover:shadow-2xl">
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-[#182978] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm md:text-base">
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* License Application Process */}
      <div className="bg-gray-50 py-10 mt-10">
        <h2 className="text-3xl font-bold text-left text-[#182978] mb-6 max-w-6xl mx-auto px-4">
          License Application Process
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className="max-w-6xl px-4"
        >
          {licenseProcess.map((step, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-6">
                <img
                  src={step.image.drive5}
                  alt={step.title}
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-bold text-[#182978]">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#182978] mb-10">
          FAQ
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl mb-4 shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center px-6 py-5 font-medium text-[#001730] hover:bg-gray-100 rounded-xl transition duration-200"
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="h-6 w-6 text-[#182978]" />
              ) : (
                <Plus className="h-6 w-6 text-[#182978]" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-[#1f3044] text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

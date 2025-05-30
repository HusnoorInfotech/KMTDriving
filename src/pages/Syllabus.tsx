import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import parallelparking from "../assets/images/parallelparking.jpg";
import perpendicularparking from "../assets/images/perpendicularparking.png";
import angular from "../assets/images/angular.jpg";
import drive1 from "../assets/images/drive1.png";
import drive2 from "../assets/images/drive2.jpg";
import drive5 from "../assets/images/drive5.jpg";
import rightcurve from "../assets/images/rightcurve.jpg";
import pedistraincrossing from "../assets/images/pedistraincrossing.jpg";
import leftcurve from "../assets/images/leftcurve.jpg";
import crossroad from "../assets/images/crossroad.jpg"; 
import speedlimit from "../assets/images/speedlimit.png";
import roadnarrow from "../assets/images/roadnarrow.png"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Syllabus: React.FC = () => {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Everything You Need To Know About Parallel Parking",
      description:
        "If you get sweaty palms just thinking about parallel parking, trust us, you are not the only one. Master parallel parking easily.",
      link: "/ParallelParking",
      image: parallelparking,
    },
    {
      title: "Everything You Need To Know About Perpendicular Parking",
      description:
        "If you get sweaty palms just thinking about parallel parking, trust us, you are not the only one. Master parallel parking easily.",
      link: "/PerpendicularParking",
      image: perpendicularparking,
    },
    {
      title: "Everything You Need To Know About Angular Parking",
      description:
        "If you get sweaty palms just thinking about parallel parking, trust us, you are not the only one. Master parallel parking easily.",
      link: "/AngularParking",
      image: angular,
    },
    {
      title: "10 Practices That Make You a Safer Driver",
      description:
        "Although the 2020 lockdown resulted in a 49.47% fall in the number of lives lost in road accidents, safe driving habits matter.",
      link: "/SaferDrivingPractices",
      image: drive1,
    },
    {
      title: "5 Car Driving Tips That Make You a Better Driver",
      description:
        "There’s no age for learning, and the scope of learning is infinite. When it comes to driving, follow these 5 expert tips.",
      link: "/Drive",
      image: drive2,
    },
    {
      title: "Top 10 Road Safety Tips You Should Know",
      description:
        "Safety must come first on your list when driving, be it for yourself and the passengers, pedestrians, or other drivers.",
      link: "/RoadSafetyTips",
      image: drive5,
    },
  ];

  const roadSigns = [
    { title: "Right Curve", image: rightcurve},
    { title: "Left Curve", image: leftcurve},
    { title: "Pedistrain Crossing", image: pedistraincrossing },
    { title: "Crossroads Road", image: crossroad },
    { title: "Speed Limit", image:speedlimit },
    { title: "Road Narrow", image: roadnarrow },
  ];

  const licenseProcess = [
    {
      title: "Step 1: Apply for a Learner's Permit",
      description: "Submit the required documents and fees to get your learner's permit.",
      image: drive5,
    },
    {
      title: "Step 2: Complete Driver Training",
      description: "Enroll in a certified driving school and complete your training hours.",
      image: drive5,
    },
    {
      title: "Step 3: Schedule a Driving Test",
      description: "Book your driving test appointment with the local transport authority.",
      image:drive5,
    },
    {
      title: "Step 4: Pass the Driving Test",
      description: "Demonstrate your driving skills to get approval for your license.",
      image:drive5,
    },
    {
      title: "Step 5: Receive Your Driving License",
      description: "Once you pass, your license will be issued. Drive responsibly!",
      image:drive5,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 pt-24">
      <h1 className="text-4xl font-bold leading-tight mb-6 font-serif tracking-wide text-left text-blue-900">
        Driving Tips
      </h1>

      {/* Swiper Slider - Driving Tips */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="max-w-6xl"
      >
        {tips.map((tip, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-4 h-[400px]">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow px-4 pt-4">
                <h2 className="text-lg font-bold text-blue-900">{tip.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{tip.description}</p>
                <button
                  onClick={() => navigate(tip.link)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Road Safety Signage Section */}
      <div className="w-full justify-center bg-gray-200 py-10 mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Road Safety Signage
        </h2>

        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {roadSigns.map((sign, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={sign.image} alt={sign.title} className="w-20 h-20 mb-3" />
              <p className="text-gray-800 font-semibold">{sign.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* License Application Process - Swiper */}
      <div className="bg-white py-10 mt-10">
        <h2 className="text-3xl font-bold text-left text-blue-900 mb-6">
          License Application Process
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="max-w-6xl"
        >
          {licenseProcess.map((step, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center text-center p-6">
                <img src={step.image} alt={step.title} className="w-24 h-24 mb-4" />
                <h3 className="text-lg font-bold text-blue-900">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Syllabus;

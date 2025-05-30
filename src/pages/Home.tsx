import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pedistraincrossing from "../assets/images/pedistraincrossing.jpg";
import roundabout from "../assets/images/roundabout.jpg";
import slipperyroad from "../assets/images/slipperyroad.jpg";
import speedlimit from "../assets/images/speedlimit.png";
import nouturn from "../assets/images/nouturn.jpg";
import work from "../assets/images/work.png";
import collage from "../assets/images/collage.jpg";
import carcollege from "../assets/images/carcollage.jpg";
import drive from "../assets/images/drive.png";
import animationcar from "../assets/images/animationcar.webm";
import BookingForm from "./book";
import { MessageCircle } from 'lucide-react'
import { Link } from "react-router-dom";

// Add this CSS in a separate file (e.g., src/styles/Home.css) or in a <style> tag
const styles = `
  @keyframes progress {
    0% { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }
  .animate-progress {
    animation: progress 3.5s linear forwards;
  }
`;
const responsive = `

`
const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // 3.5 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedClick = (): void => {
    navigate("/contact");
  };

  const handleMockTestClick = (): void => {
    navigate("/MockTest");
  };

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const roadSigns = [
    { title: "Pedestrian Crossing", image: pedistraincrossing},
    { title: "Roundabout Ahead", image: roundabout},
    { title: "Slippery Road", image: slipperyroad},
    { title: "Speed Limit 50", image: speedlimit},
    { title: "No U-Turn", image: nouturn},
    { title: "Men At Work", image: work},
  ];
  console.log(roadSigns);
  if (showSplash) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-transparent text-black flex-col backdrop-blur-md overflow-hidden">
        {/* Inline styles for progress bar animation */}
        <style>{styles}</style>

        {/* Car Icon Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-4 left-4"
        >
          <Car className="h-12 w-12 text-white" />
        </motion.div>

        {/* Video */}
        <motion.video
          src={animationcar}
          autoPlay
          muted
          loop
          className="w-[70%] max-w-md mb-6 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-3xl font-serif font-bold text-center text-black tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          WELCOME TO KANDIVALI MOTOR TRAINING SCHOOL
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          className="w-[80%] h-2 bg-white/30 rounded-full mt-4 overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 3.5, ease: "linear" }}
        >
          <div className="h-full bg-white w-full origin-left scale-x-0 animate-progress" />
        </motion.div>

        {/* Skip Button */}
        <motion.button
          className="mt-4 bg-white/20 text-blue-400 px-6 py-2 rounded-lg backdrop-blur-md hover:bg-white/30 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => setShowSplash(false)}
        >
          Skip
        </motion.button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-transparent text-[#121829]">
      {/* Swiper Slider Below Navbar */}
      <motion.div
        className="w-full max-h-[400px] overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src={collage}
              alt="Driving Lesson 1"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carcollege}
              alt="Driving Lesson 2"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={drive}
              alt="Driving Lesson 1"
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Left Side - Main Text */}
        <motion.div
          className="w-full md:w-1/2 text-left md:pl-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6 font-serif tracking-wide pl-4 md:pl-8 -mt-4">
            <span className="block text-[#121829]">Drive with</span>
            <span className="block text-[#121829]">Confidence</span>
          </h1>
          <p className="text-lg text-[#001730]/80 mb-8 leading-relaxed font-light pl-4 md:pl-8">
            Learn from experienced, certified instructors. Personalized lessons at your own pace.
            Get your driving license with ease!
          </p>
          <motion.button
            onClick={handleGetStartedClick}
            className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#3F5273] transition duration-300 shadow-lg flex items-center mx-auto md:ml-8 backdrop-blur-md bg-opacity-85 hover:scale-[1.05]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Get Started <ChevronRight className="ml-2 h-6 w-6" />
          </motion.button>
        </motion.div>

        {/* Right Side - Mock Test Section */}
        <motion.div
          className="w-full md:w-1/2 bg-[#E5E8FB] p-8 rounded-xl shadow-lg text-center md:ml-10 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-2xl font-serif font-bold text-[#182978] mb-4">
            Now discover how good a driver you are!
          </h2>
          <p className="text-sm font-serif text-gray-700 mb-4">
            Test your driving skills before you get on the road. Simply answer these 10 challenging questions and score your best. Gear up and go on!
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-xl font-bold text-[#182978]">10</span>
              <span className="text-gray-600 text-sm">MINUTES TO FINISH</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-xl font-bold text-[#182978]">10</span>
              <span className="text-gray-600 text-sm">ENGAGING QUESTIONS</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-xl font-bold text-[#182978]">4</span>
              <span className="text-gray-600 text-sm">INTERESTING QUESTION CATEGORIES</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-xl font-bold text-[#182978]">4</span>
              <span className="text-gray-600 text-sm">DIFFERENT TESTS</span>
            </div>
          </div>

          <motion.button
            onClick={handleMockTestClick}
            className="bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#101A5A] transition duration-300 shadow-md hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            GET STARTED
          </motion.button>
        </motion.div>
      </section>

      {/* Courses Container */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Learner Standard Track Course */}
          <motion.div
            className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Standard Track Course(Comprehensive Training)</h2>
            <p className="text-gray-700">
              If you've never been behind the steering wheel, this course is for you. At the end of 20 days,
              you'll know the basic traffic rules and gain a hands-on driving experience throughsrc.
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-lg font-bold text-[#182978]">20</p>
                <p className="text-gray-700 text-sm">Number of Days</p>
              </div>
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-lg font-bold text-[#182978]">half an hour</p>
                <p className="text-gray-700 text-sm">Number of Hours</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-[#182978] mt-6">₹ 4,500*</p>
            <p className="text-sm text-gray-500">(*Starting Course Fees, excl. Added 18% GST)</p>
            <Link to="/Courses">
              <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
                View Course
              </button>
            </Link>
          </motion.div>

          {/* Learner Extended Track Course */}
          <motion.div
            className="bg-gradient-to-b from-white to-[#E6E9F5] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#182978] mb-4">Learner Extended Track Course(Basic Training)</h2>
            <p className="text-gray-700">
              If you've never been behind the steering wheel, this course is for you. At the end of 10 days,
              you'll know the basic traffic rules and gain a hands-on driving experience throughsrc.
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-lg font-bold text-[#182978]">10</p>
                <p className="text-gray-700 text-sm">Number of Days</p>
              </div>
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-lg font-bold text-[#182978]">half an hour</p>
                <p className="text-gray-700 text-sm">Number of Hours</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-[#182978] mt-6">₹ 2,000*</p>
            <Link to="/Courses">
              <button className="mt-4 bg-[#182978] text-white px-6 py-2 rounded-lg hover:bg-[#0F1E56] transition">
                View Course
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Google Map Locator */}
      <section className="w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.534290351052!2d72.8468483!3d19.2006418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6cf85555555%3A0x6206c4a2f9294c4c!2sKandivali%20Motor%20Training%20School!5e0!3m2!1sen!2sin!4v1646401065065!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Required Document */}
       <div className="container mx-auto p-4">
    <div className="bg-blue-50 shadow-md p-6 mb-10">
    <h2 className="text-2xl font-bold text-[#001730] mb-4">Requirement for Driving Licence</h2>

  {/* Age Proof */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-[#1f3044]">Age Proof</h3>
    <ul className="list-disc list-inside text-[#1f3044] ml-4">
      <li>Pan Card</li>
      <li>School Leaving Certificate</li>
      <li>Birth Certificate</li>
      <li>Passport</li>
      <li>L.I.C. Policy <span className="text-sm text-gray-600">(any one)</span></li>
    </ul>
  </div>

  {/* Address Proof */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-[#1f3044]">Address Proof</h3>
    <ul className="list-disc list-inside text-[#1f3044] ml-4">
      <li>Aadhar Card</li>
      <li>Passport</li>
      <li>Election Voting Card along with Ration Card</li>
      <li>Latest Electricity Bill <span className="text-sm text-gray-600">(any one)</span></li>
    </ul>
  </div>

  {/* Photos */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-[#1f3044]">Photos</h3>
    <p className="text-[#1f3044] ml-4">3 copies of passport size photos</p>
  </div>

  {/* Age Limit */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-[#1f3044]">Age Limit for Licence</h3>
    <ul className="list-disc list-inside text-[#1f3044] ml-4">
      <li>For Light Motor Vehicle (<strong>'Non Transport'</strong>): Above 18 years</li>
      <li>For Light Motor Vehicle (<strong>'Transport'</strong>): Above 20 years & minimum qualification 8<sup>th</sup> pass</li>
    </ul>
  </div>

  {/* Note */}
  <p className="text-red-600 font-medium mt-4">
    * All the above documents are required in original and Xerox.
  </p>
</div>
</div>

      {/* Road Safety Signage Section */}
      <div className="w-full bg-gray-200 py-10 mt-10 mb-20">
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

      {/* Register Your Interest Button - Fixed Left */}
      {/* <div> */}
      {/* <div> */}
        {/* <button */}
          {/* // className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg cursor-pointer" */}
          {/* className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg cursor-pointer z-50" */}
          {/* onClick={() => setIsBookingOpen(true)} */}
          {/* > */}
          {/* Register Your Interest + */}
        {/* </button> */}
        {/* BookingForm Modal */}
        {/* <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} /> */}
      {/* </div> */}
       
      {/* WhatsApp */}
      {/* <Link to='https://wa.me/7021340259'> */}
      {/* <button */}
        {/* className="fixed bottom-6 left-6 bg-[#25d366] text-white px-5 py-3 rounded-lg shadow-xl hover:bg-[#075e54] transition duration-300 flex items-center backdrop-blur-md bg-opacity-85 hover:scale-[1.05]" */}
      {/* //   className="fixed bottom-6 left-6 bg-[#25d366] right-6 flex flex-col space-y-3  */}
      {/* // sm:flex-row sm:space-x-4 sm:space-y-0  */}
      {/* // sm:bottom-6 sm:left-6 sm:right-auto  */}
      {/* // sm:justify-start  */}
      {/* // xs:bottom-6 xs:left-1/2 xs:right-auto xs:transform xs:-translate-x-1/2 */}
      {/* // z-50" */}
        {/* > */}
        {/* <MessageCircle/> */}
      {/* </button> */}
      {/* </Link> */}
      {/* Reviews and Ratings Button */}
      {/* <button */}
        {/* className="fixed bottom-6 right-6 bg-[#4A5D85] text-white px-5 py-3 rounded-lg shadow-xl hover:bg-[#3F5273] transition duration-300 flex items-center backdrop-blur-md bg-opacity-85 hover:scale-[1.05]" */}
        {/* onClick={() => navigate("/reviews")} */}
        {/* > */}
        {/* <Star className="mr-2 h-6 w-6" /> */}
        {/* <span className="text-lg font-semibold">Reviews & Ratings</span> */}
      {/* </button> */}
    {/* </div> */}
    <div>
  {/* Register Interest Button */}
  <button
    className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#182978] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg cursor-pointer z-50"
    onClick={() => setIsBookingOpen(true)}
  >
    Register Your Interest +
  </button>

  {/* BookingForm Modal */}
  <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

  {/* Container for WhatsApp and Reviews buttons */}
  <div
    className="
      fixed bottom-6 left-6 right-6 flex flex-col space-y-6 
      sm:flex-row sm:space-x-4 sm:space-y-0 
      sm:bottom-6 sm:left-6 sm:right-auto 
      sm:justify-start 
      xs:bottom-6 xs:left-1/2 xs:right-auto xs:transform xs:-translate-x-1/2
      z-50
    "
  >
    {/* WhatsApp Button */}
    <Link to="https://wa.me/7021340259" className="sm:mr-0 xs:mr-0">
      <button
        className="bg-[#25d366] text-white px-5 py-3 rounded-lg shadow-xl hover:bg-[#075e54] transition duration-300 flex items-center backdrop-blur-md bg-opacity-85 hover:scale-[1.05] w-full-0 sm:w-auto"
      >
        <MessageCircle />
      </button>
    </Link>

    {/* Reviews and Ratings Button */}
    <button
      className="bg-[#4A5D85] text-white px-5 py-3 rounded-lg shadow-xl hover:bg-[#3F5273] transition duration-300 flex items-center backdrop-blur-md bg-opacity-85 hover:scale-[1.05] w-full-0 sm:w-auto"
      onClick={() => navigate("/reviews")}
    >
      <Star className="mr-2 h-6 w-6" />
      <span className="text-lg font-semibold">Reviews & Ratings</span>
    </button>
  </div>
</div>

        </div>
  );
};

export default Home;
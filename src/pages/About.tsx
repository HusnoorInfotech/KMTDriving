import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import car4 from "../assets/images/car4.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const counterVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const achievements = [
  { value: 30, suffix: "+", label: "Years of Excellence" },
  { value: 15000, suffix: "+", label: "Successful Students" },
  { value: 99, suffix: "%", label: "Pass Rate" },
  { value: 3, suffix: "", label: "Certified Instructors" },
];

const AboutUs = () => {
  const [counts, setCounts] = useState(
    achievements.map(() => 0) // Initialize all counts to 0
  );

  useEffect(() => {
    const intervals = achievements.map((achievement, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < achievement.value) {
            newCounts[index] += Math.ceil(achievement.value / 700);
          } else {
            newCounts[index] = achievement.value;
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 30); // Speed of counting
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <div className="bg-[#182978] text-white h-[80vh] flex flex-col items-center justify-center px-6 py-12">
        <motion.h1
          className="text-8xl font-bold text-center text-white mb-6"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          ABOUT US
        </motion.h1>

        <motion.p
          className="text-lg text-gray-100 text-center mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Whether you're a beginner or looking to refine your skills, we are
          here to help you achieve your driving goals with personalized training
          and expert guidance.
        </motion.p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center text-center p-6 mx-auto">
  <p className="text-lg leading-relaxed text-gray-800">
    Pioneering safe, confident driving since 1991. Our goal is to empower individuals 
    with the skills to drive safely and confidently for a lifetime.
  </p>
</div>

      {/* Achievements Section */}
      <div className="bg-[#F8FAFC] p-12 rounded-lg mb-16 shadow-md">
        <h2 className="text-4xl font-bold text-center text-[#001730] mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={counterVariants}
            >
              <motion.div
                className="text-5xl font-bold text-[#001730] mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                {counts[index]}
                {item.suffix}
              </motion.div>
              <div className="text-[#001730]">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={car4} 
          alt="Professional" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Text Section */}
      
      <div className="bg-blue-50 w-full md:w-1/2 text-gray-800">
        <p className="text-lg font-serif leading-relaxed">
        A kindhearted individual established this Kandivali Motor Training School in 1991. This organization has grown from Kandivali office to several branches and successfully taught well over 100,000 candidates to become excellent drivers via perseverance, commitment, timeliness, and effective management. Our applicants come from diverse backgrounds, and we provide exceptional driving instruction while treating each person as if they were our valued customer. Candidates who have been qualified by our institution are successfully operating their vehicles, and those who have been granted service are successfully living honorably, making a living, and becoming extremely valuable members of their families and the country wherever they are at the moment.
        </p>
      </div>
    </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-white">
      

      {/* Text Section */}
      
      <div className="bg-blue-50 w-full md:w-1/2 text-gray-800">
        <p className="text-lg font-serif leading-relaxed">
        Kandivali Motor Training School assists you in reducing your insurance costs and raising your driving ability, expertise, and teaches you how to avoid any collisions. By abiding by the law and making fewer mistakes, you not only become a safer and more intelligent driver, but you help safeguard other drivers. Driving abilities that meet criteria are a sign of quality training. Professional and Skilled Faculty: knowledgeable direction at every turn. Car fleet: A cozy educational setting. The best option for family members: high-quality, safe training for your deer. Modular Training Structure: The ability to select the course that best suits one's needs. Frequent Evaluation: Self-assessment of abilities to concentrate more on weak areas. Certification upon graduation: Guarantees of acquiring safe driving techniques and driving skills.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={car4} 
          alt="Professional" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
    </div>

    <div className="container mx-auto p-4">
      <div className="bg-blue-50 w-full text-gray-800 p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold">Important Notice:</p>
        <p className="text-lg leading-relaxed">
          All MDL licenses are delivered via <strong>speed post</strong> to your residential address.  
          <strong> We are not responsible if the license is not delivered.</strong>
        </p>
      </div>
    </div>
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


      {/* Certifications Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#001730] mb-8">
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "State Licensed",
              description:
                "Fully licensed and approved by the State Department of Motor Vehicles.",
            },
            {
              title: "Safety Certified",
              description:
                "Certified by the National Safety Council for excellence in driver education.",
            },
          ].map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#EAECEF] p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
              initial="hidden"
              animate="visible"
              variants={counterVariants}
              transition={{ delay: index * 0.3 }}
            >
              <Award className="h-12 w-12 text-[#001730] mb-4" />
              <h3 className="text-xl font-semibold text-[-[#001730] mb-2">
                {cert.title}
              </h3>
              <p className="text-[#001730]">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center p-8 bg-white">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-black mb-4">About Social</h2>

      {/* Description */}
      <p className="text-gray-700 max-w-xl mx-auto">
        
      </p>

      {/* Bold Text */}
      <p className="mt-4 text-lg font-bold text-black">
       
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="text-red-600 text-4xl hover:text-red-400">
          <FaFacebook />
        </a>
        <a href="#" className="text-red-600 text-4xl hover:text-red-400">
          <FaTwitter />
        </a>
        <a href="#" className="text-red-600 text-4xl hover:text-red-400">
          <FaInstagram />
        </a>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

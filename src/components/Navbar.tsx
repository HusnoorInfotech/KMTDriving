import React from "react";
import { Link } from "react-router-dom";
import { Car, User } from "lucide-react";

// Define the type for the props, ensuring user is an optional prop
interface NavbarProps {
  user: any; // You can replace `any` with a more specific type from Firebase, like `User | null`
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="bg-[#F8FAFC] border-t-2 border-white shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo */}
          <Link to="/" className="flex items-center">
            <Car className="h-8 w-8 text-[#001730]" />
            <span className="ml-5 text-xl font-serif bold text-[#001730]">
              KMTraining School
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-[#001730] hover:text-blue-600 font-serif">Home</Link>
            <Link to="/courses" className="text-[#001730] hover:text-blue-600 font-serif">Courses</Link>
            <Link to="/about" className="text-[#001730] hover:text-blue-600 font-serif">About Us</Link>
            <Link to="/contact" className="text-[#001730] hover:text-blue-600 font-serif">Contact us</Link>
            {/* <Link to="/drivingsimulator" className="text-[#001730] hover:text-blue-600 font-serif">Driving</Link> */}
            <Link to="/roadmap" className="text-[#001730] hover:text-blue-600 font-serif">Roadmap</Link>
            <Link to="/syllabus" className="text-[#001730] hover:text-blue-600 font-serif">Blog</Link>
          </div>

          {/* Right Side: Profile */}
          {/* <div className="flex items-center space-x-6"> */}
            {/* Profile Icon */}
            {/* {user ? ( */}
              {/* <Link to="/profile" className="text-[#001730] hover:text-blue-600 flex items-center space-x-2"> */}
                {/* <User className="h-6 w-6" /> */}
                {/* <span className="hidden md:inline">Profile</span> */}
              {/* </Link> */}
            {/* ) : ( */}
              {/* <Link to="/login" className="text-[#001730] hover:text-blue-600 flex items-center space-x-2"> */}
                {/* <User className="h-6 w-6" /> */}
                {/* <span className="hidden md:inline">Login</span> */}
              {/* </Link> */}
            {/* )} */}
          {/* </div> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

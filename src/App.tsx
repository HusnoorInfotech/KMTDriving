import React, { useState } from "react";
// import { auth } from "./firebaseConfig";  // 🔒 Commented out Firebase Auth
// import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
// import DrivingSimulator from "./pages/Drivingsimulator";
// import RegistrationPage from "./pages/RegistrationPage";
import Syllabus from "./pages/Syllabus";
import Roadmap from "./pages/roadmap";
// import LoginPage from "./pages/LoginPage";
// import EnrollPage from "./pages/EnrollModal";
// import ProfilePage from "./pages/ProfilePage";
import Reviews from "./pages/review";
import BookingForm from "./pages/book";
import ParallelParking from "./pages/ParallelParking";
import MockTest from "./pages/MockTest";
import Cars from "./pages/Cars";
import Car from "./pages/Car";
// import Transport from "./pages/Transport";
// import RecommendationModal from "./pages/RecommendationModal";
import PerpendicularParking from "./pages/PerpendicularParking";
import AngularParking from "./pages/AngularParking";
import Drive from "./pages/Drive";
import SaferDrivingPractices from "./pages/SaferDrivingPractices";
import RoadSafetyTips from "./pages/RoadSafetyTips";



const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);
  // const [recommendedCourses, setRecommendedCourses] = useState<string[]>([]);
  // const [user, setUser] = useState<any>(null);

  // 🔒 Commented out Firebase Auth listener
  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("User logged in:", user);
      } else {
        setUser(null);
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);
  */

  const handleCloseModal = () => setIsModalOpen(false);
  // const handleCloseRecommendationModal = () => setIsRecommendationModalOpen(false);

  // const handleRecommend = (courses: string[]) => {
    // setRecommendedCourses(courses);
    // console.log("Recommended Courses:", courses);
  // };

  

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/drivingsimulator" element={<DrivingSimulator />} /> */}
          {/* <Route path="/registration" element={<RegistrationPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/syllabus" element={<Syllabus />} />
          {/* <Route path="/enroll" element={<EnrollPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ParallelParking" element={<ParallelParking />} />
          <Route path="/MockTest" element={<MockTest />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Car" element={<Car />} />
          {/* <Route path="/transport" element={<Transport/>} /> */}
          <Route path="/PerpendicularParking" element={<PerpendicularParking />} />
          <Route path="/AngularParking" element={<AngularParking />} />
          <Route path="/Drive" element={<Drive />} />
          <Route path="/SaferDrivingPractices" element={<SaferDrivingPractices />} />
          <Route path="/RoadSafetyTips" element={<RoadSafetyTips />} />

        </Routes>

        {isModalOpen && <BookingForm isOpen={isModalOpen} onClose={handleCloseModal} />}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

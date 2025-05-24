import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  Fullname: string;
  phoneNumber: string;
  Email: string;
  age?: number;
  dateOfBirth:string;  //dateOfBirth
  courses?: string[];
  profilePhoto?: string;
}

interface User2{
  fullName: string,
  dob: string,
  gender: string,
  phoneNumber:string ,
  email: string,
  address: string,
  ageProof: string,
  addressProof: string,
 // photos: String,
  licenseType: string,
  education: string,
  startDate: string,
  endDate: string,
  paymentMethod: string,
  instructor: string,
  car: string,
  course:string,
  signature: string, // For signature
  photo: string,


}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [user2, setUser2] = useState<User2 | null>(null);
  
  const navigate = useNavigate();

  const defaultProfilePhoto = `https://ui-avatars.com/api/?name=${user?.Fullname || "User"}&background=007bff&color=fff&size=150`;


  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/demo/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };
    fetchUserData2();
    fetchUserData();
  }, [navigate]);

  const fetchUserData2=async()=>{
    console.log("got into it");
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      
      return;
    }
    try {
        const response = await fetch("http://localhost:8080/demo/getenroll",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
        
        if (response.ok) {
          const data = await response.json();
          console.log("comeon man show data"); 
          console.log(data);
          setUser2(data);

        } else {
          console.log("Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prev) => (prev ? { ...prev, profilePhoto: reader.result as string } : prev));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-['Poppins'] bg-[#f4f4f4] text-[#333333] p-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 flex flex-col">
        <div className="flex items-center space-x-6">
          <div className="relative w-40 h-40 rounded-full border-4 border-[#007bff] overflow-hidden hover:scale-105 transition-transform">
            <img
              src={user?.profilePhoto || defaultProfilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
              <label className="cursor-pointer text-sm font-semibold">
                📷 Change
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-[#007bff]">{user?.Fullname || "User Name"}</h2>
            <p className="text-lg font-medium text-[#4caf50]">Driving Enthusiast</p>
          </div>
        </div>
        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg space-y-4 text-lg font-medium border border-[#007bff]">
          <p><strong className="text-[#007bff]">Age:</strong> {user?.age || "N/A"}</p>
          <p><strong className="text-[#007bff]">Date of Birth:</strong> {user?.dateOfBirth || "N/A"}</p>
          <p><strong className="text-[#007bff]">Phone:</strong> {user?.phoneNumber || "N/A"}</p>
          <p><strong className="text-[#007bff]">Email:</strong> {user?.Email || "N/A"}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-lg font-medium border border-[#007bff]">
          <h3 className="text-2xl font-bold text-[#007bff]">🎓 Enrolled Courses</h3>
          <p className="text-lg">You have enrolled in {user2?.course ||0} course.</p>
          <ul className="list-disc pl-5 text-sm">
            {user?.courses?.map((course, index) => (
              <li key={index} className="hover:text-[#4caf50] transition-colors">{course}</li>
            ))}
          </ul>
          <button 
            className="mt-4 bg-[#007bff] text-white px-6 py-2 rounded-lg hover:bg-[#0056b3] transition"
            onClick={() => navigate("/courses")}
          >
            Enroll in More Courses
          </button>
        </div>

        {/* Logout Button */}
        <button
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default ProfilePage;

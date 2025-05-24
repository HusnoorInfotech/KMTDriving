import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Define interface for form data
interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  ageProof: File | null;
  addressProof: File | null;
  photos: File | null;
  licenseType: string;
  education: string;
  startDate: string;
  endDate: string;
  paymentMethod: string;
  instructor: string;
  car: string;
  signature: File | null;
  photo: File | null;
  course: string;
  duration: string;
}

// Define interface for payment details
interface PaymentDetails {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Define type for errors (partial record of FormData keys)
type Errors = Partial<Record<keyof FormData, string>>;

// Declare Razorpay on window object
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function EnrollForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    ageProof: null,
    addressProof: null,
    photos: null,
    licenseType: "",
    education: "",
    startDate: "",
    endDate: "",
    paymentMethod: "",
    instructor: "",
    car: "",
    signature: null,
    photo: null,
    course: "",
    duration: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calculateEndDateExcludingSunMon = (start: string, durationDays: number) => {
    let date = new Date(start);
    let daysAdded = 0;
    while (daysAdded < durationDays) {
      date.setDate(date.getDate() + 1);
      const day = date.getDay();
      if (day !== 0 && day !== 1) {
        daysAdded++;
      }
    }
    return date.toISOString().split("T")[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    if ((name === "startDate" && formData.duration) || (name === "duration" && formData.startDate)) {
      const startDate = name === "startDate" ? value : formData.startDate;
      const duration = name === "duration" ? parseInt(value) : parseInt(formData.duration);
      if (startDate && duration) {
        const newEndDate = calculateEndDateExcludingSunMon(startDate, duration);
        updatedFormData.endDate = newEndDate;
      }
    }
    setFormData(updatedFormData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [e.target.name]: file });
  };

  const validateForm = () => {
    let newErrors: Errors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Please select gender.";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.ageProof) newErrors.ageProof = "Please upload age proof.";
    if (!formData.addressProof) newErrors.addressProof = "Please upload address proof.";
    if (!formData.photos) newErrors.photos = "Please upload 3 passport-size photos.";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
    if (formData.licenseType.includes("Transport") && !formData.education)
      newErrors.education = "Transport license requires minimum 8th pass.";
    if (!formData.startDate) newErrors.startDate = "Select a start date.";
    if (!formData.instructor) newErrors.instructor = "Select an instructor.";
    if (!formData.car) newErrors.car = "Select a car.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Select a payment method.";
    if (!formData.signature) newErrors.signature = "Please upload your signature.";
    if (!formData.photo) newErrors.photo = "Please upload a photo.";
    if (!formData.course) newErrors.course = "Select a course.";
    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = (): Promise<PaymentDetails> => {
    console.log("Initiating Razorpay payment...");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5000/create-order", { amount: 4500 })
        .then((response) => {
          console.log("Order created successfully:", response.data);
          const { id: order_id, currency, amount: order_amount } = response.data;
          const options = {
            key: "rzp_test_E76yUT9iRGp6eV",
            amount: order_amount,
            currency,
            name: "Kandivali Motor Training School",
            description: "Enrollment Fee",
            order_id,
            handler: async (response: PaymentDetails) => {
              try {
                console.log("Verifying payment:", response);
                const verifyResponse = await axios.post("http://localhost:5000/verify-payment", {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                });
                console.log("Payment verification response:", verifyResponse.data);
                if (verifyResponse.data.message === "Payment verified successfully") {
                  resolve(response);
                } else {
                  reject(new Error("Payment verification failed"));
                }
              } catch (error) {
                console.error("Payment verification error:", error);
                reject(new Error("Payment verification failed"));
              }
            },
            prefill: {
              name: formData.fullName,
              email: formData.email || "example@example.com",
              contact: formData.phone,
            },
            theme: {
              color: "#F37254",
            },
          };
          const rzp = new window.Razorpay(options);
          rzp.open();
          rzp.on("payment.failed", (response: { error: any }) => {
            console.error("Payment failed:", response.error);
            reject(response.error);
          });
        })
        .catch((error) => {
          console.error("Failed to create order:", error);
          reject(new Error("Failed to create order"));
        });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started...");
    console.log("Form Data:", formData);

    if (!validateForm()) {
      console.log("Form validation failed. Submission aborted.");
      return;
    }

    try {
      let paymentDetails: PaymentDetails | null = null;
      if (formData.paymentMethod === "UPI" || formData.paymentMethod === "Card") {
        console.log("Processing payment for UPI/Card...");
        paymentDetails = await handlePayment();
        console.log("Payment successful. Details:", paymentDetails);
      }

      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          form.append(key, value);
        }
      });

      if (paymentDetails) {
        form.append("razorpay_order_id", paymentDetails.razorpay_order_id);
        form.append("razorpay_payment_id", paymentDetails.razorpay_payment_id);
        form.append("razorpay_signature", paymentDetails.razorpay_signature);
      }

      console.log("Submitting form to backend...");
      const response = await fetch("http://localhost:8080/demo/Enroll", {
        method: "POST",
        body: form,
      });

      console.log("Backend response status:", response.status);
      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        setSubmissionMessage("Form has been submitted successfully!");
      } else {
        console.error("Backend error:", response.statusText);
        alert(`Failed to submit form: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Submission Error:", (error as Error).message);
      alert("Failed to submit form due to payment or network error: " + (error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6 py-24">
      <div className="bg-white w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 p-8 shadow-lg border border-whitespace-y-8">
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-bold leading-tight mb-18 font-serif">Enrollment Form</h2>
          <hr className="my-6 border-t-2 border-[#1f3044]" />
        </div>

        {submissionMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
            {submissionMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block font-medium text-[#1f3044]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <small className="block text-gray-600 mt-1">First - Middle - Last</small>
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block font-medium text-[#1f3044]">Upload Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="w-full p-3 border border-[#1f3044] rounded-md"
              />
              {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block font-medium text-[#1f3044]">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
            <div>
              <label className="block font-medium text-[#1f3044]">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-[#1f3044]">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block font-medium text-[#1f3044]">Select Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select Course</option>
                <option value="WAGON R">WAGON R</option>
                <option value="SWIFT">SWIFT</option>
                <option value="HONDA CITY">HONDA CITY</option>
              </select>
              {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
            </div>
            <div>
              <label className="block font-medium text-[#1f3044]">License Type</label>
              <select
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select License Type</option>
                <option value="LMV Non-Transport">LMV Non-Transport</option>
                <option value="LMV Transport">LMV Transport</option>
              </select>
              <small className="block text-gray-600 mt-1">For Transport Vehicles</small>
              {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block font-medium text-[#1f3044]">Upload Age Proof</label>
              <input
                type="file"
                name="ageProof"
                onChange={handleFileChange}
                className="w-full p-3 border border-[#1f3044] rounded-md"
              />
              {errors.ageProof && <p className="text-red-500 text-sm">{errors.ageProof}</p>}
            </div>
            <div>
              <label className="block font-medium text-[#1f3044]">Upload Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                className="w-full p-3 border border-[#1f3044] rounded-md"
              />
              {errors.signature && <p className="text-red-500 text-sm">{errors.signature}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-[#1f3044]">Select Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-1/2 p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Choose Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Card">Debit/Credit Card</option>
              <option value="Cash">Pay at the office</option>
            </select>
            {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
          </div>

          <h2 className="text-xl font-bold leading-tight font-serif text-left text-[#001730] mb-6">
            Book and schedule now
          </h2>
          <hr className="my-6 border-t-2 border-[#1f3044]" />

          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#1f3044] mb-2">Select Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg border border-[#1f3044] shadow-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Select Duration</option>
              <option value="10">10 Days</option>
              <option value="20">20 Days</option>
            </select>
            {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-lg font-semibold text-[#1f3044] mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white focus:outline-none focus:ring-4 focus:ring-[#F2BFA4] transition-all duration-300 hover:bg-[#F5E7DE] hover:border-[#F2BFA4] cursor-pointer"
              />
              {errors.startDate && (
                <motion.p
                  className="text-red-600 text-sm font-medium mt-2"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.startDate}
                </motion.p>
              )}
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#1f3044] mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                readOnly
                className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-lg font-semibold text-[#1f3044] mb-2">Choose Instructor</label>
              <select
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select an Instructor</option>
                <option value="Instructor A">Instructor A</option>
                <option value="Instructor B">Instructor B</option>
              </select>
              {errors.instructor && <p className="text-red-500 text-sm">{errors.instructor}</p>}
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#1f3044] mb-2">Choose Car</label>
              <select
                name="car"
                value={formData.car}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select a Car</option>
                <option value="Car A">Car A</option>
                <option value="Car B">Car B</option>
              </select>
              {errors.car && <p className="text-red-500 text-sm">{errors.car}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
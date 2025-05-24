import React from "react";
import Modal from "../pages/Modal"; // Ensure the correct path

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    bookname: "",
    booknumber: "",
    bookemail: "",
    branch: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    try {
      const response = await fetch("https://formsubmit.co/ceae66780c6b6f7373a7bdb345b4f241", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({ bookname: "", booknumber: "", bookemail: "", branch: "", course: "" });
        onClose(); // Close modal after submission
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Check your connection.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-8 text-center text-[#1f3044]">
        Register Your Interest
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" >
        <input
          type="text"
          name="bookname"
          placeholder="Your Name"
          value={formData.bookname}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 rounded-xl bg-[#F8FAFC] text-[#3D2C2A] placeholder-[#1f3044] focus:ring-2 focus:ring-[#F2BFA4] transition"
        />
        <input
          type="tel"
          name="booknumber"
          placeholder="Phone Number"
          value={formData.booknumber}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 rounded-xl bg-[#F8FAFC] text-[#3D2C2A] placeholder-[#1f3044] focus:ring-2 focus:ring-[#F2BFA4] transition"
        />
        <input
          type="email"
          name="bookemail"
          placeholder="Your Email"
          value={formData.bookemail}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 rounded-xl bg-[#F8FAFC] text-[#3D2C2A] placeholder-[#1f3044] focus:ring-2 focus:ring-[#F2BFA4] transition"
        />
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 rounded-xl bg-[#F8FAFC] text-[#3D2C2A] placeholder-[#1f3044] focus:ring-2 focus:ring-[#F2BFA4] transition"
        >
          <option value="" disabled>Select Branch</option>
          <option value="Head Office">Head Office</option>
          <option value="Branch Office">Branch Office</option>
        </select>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 rounded-xl bg-[#F8FAFC] text-[#3D2C2A] placeholder-[#1f3044] focus:ring-2 focus:ring-[#F2BFA4] transition"
        >
          <option value="" disabled>Select Course</option>
          <option value="Cars-WAGON R">Cars-WAGON R</option>
          <option value="Cars-SWIFT">Cars-SWIFT</option>
          <option value="Cars-HONDA CITY">Cars-HONDA CITY</option>
          <option value="ONLY LICENSE-LMV+MCWG">ONLY LICENSE-LMV+MCWG</option>
          <option value="ONLY LICENSE-LMV">ONLY LICENSE-LMV</option>
          <option value="ONLY LICENSE-MCWG">ONLY LICENSE-MCWG</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-gradient-to-r from-[#1f3044] to-[#1f3044] text-white font-bold text-lg rounded-xl hover:bg-[#F2BFA4] transition"
        >
          Enquire Now
        </button>
      </form>
    </Modal>
  );
};

export default BookingForm;

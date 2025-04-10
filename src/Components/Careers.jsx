import { useState } from "react";
import Input from "../Components/common/Input.jsx";
import Textarea from "../Components/common/Textareas.jsx";
import Button from "../Components/common/Button.jsx";
import { toast } from "react-toastify";
import { IoIosArrowDropdown } from "react-icons/io";
import axios from "axios";

export default function Careers() {
  const Job = [
    { id: 1, name: "WordPress Developer" },
    { id: 2, name: "Flutter Developer" },
    { id: 3, name: "React Developer" },
    { id: 4, name: "UI/UX Designer" },
    { id: 5, name: "Full Stack Developer" },
    { id: 6, name: "Back End Developer" },
    { id: 7, name: "Unity Developer" },
    { id: 8, name: "Other" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1000/Career", formData)
      .then((res) => {
        console.log(res);
        toast.success("Application submitted successfully!", {
          position: "top-right",
          theme: "colored",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          jobRole: "",
          message: "",
        });
      })

      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  return (
    <section
      id="careers"
      className="w-100% py-12 px-2 sm:px-6 md:px-12 bg-gray-100 mx-4 lg:mx-20 sm:mx-5  md:mx-10 my-15 rounded-2xl shadow-xl scroll-m-15"
    >
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl lg:p-6 p-4 md:p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-800">
          Join <span className="text-blue-600">Our Team</span>
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
          Submit your details - Our team will reach out if there’s a fit!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            pattern="[0-9]{10}"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

         <div className="relative">
         <select
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            required
            className="w-full border border-gray-500 text-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
         
            <option value="" disabled hidden>
            Select Job Role
              </option>
              {Job.map((job) => (
                <option key={job.id} value={job.name}>
                  {job.name} 
                </option>
              ))}
          
          </select>
          <IoIosArrowDropdown  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"/>
         </div>

          <Textarea
            name="message"
            placeholder="Why do you want to join us?"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <Button
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

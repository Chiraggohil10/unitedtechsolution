import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Button from "../Components/common/Button";
import Input from "../Components/common/Input";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import axios from "axios";

function Form() {
  const Services = [
    { id: 1, name: "Tech to Home Support & Services" },
    { id: 2, name: "Digital Marketing & SEO" },
    { id: 3, name: "Cybersecurity Services" },
    { id: 4, name: "IT Consulting & Business Automation" },
    { id: 5, name: "AI & Machine Learning Solutions" },
    { id: 6, name: "DevOps & Continuous Integration" },
    { id: 7, name: "Augmented Reality & VR Development" },
    { id: 8, name: "Mobile App Maintenance & Support" },
    { id: 9, name: "Blockchain & Cryptocurrency Solution" },
    { id: 10, name: "Custom Software Development" },
    { id: 11, name: "Cloud Solution & Hosting Services" },
    { id: 12, name: "Game Development" },
    { id: 13, name: "Other" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1000/Services", formData)
      .then((res) => {
        console.log(res);
        toast.success("Application submitted successfully!", {
          position: "top-right",
          theme: "colored",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
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
    <div className="w-full lg:px-5 py-10">
      <div className="mt-20 mb-2 mx-25">
        <BackButton />
      </div>

     <div className="flex flex-col items-center">
     <h2 className="text-center text-2xl lg:text-4xl font-bold mb-3 lg:mb-3">
        Service <span className="text-blue-600">Information</span>
      </h2>
      <p className="text-center text-gray-600 mb-3">
        Please fill out the form below, and our team will reach out to you
        shortly.
      </p>

      <form
        className="space-y-4 bg-white shadow-xl rounded-2xl p-3 lg:p-8 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              First Name
            </label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Last Name
            </label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            pattern="[0-9]{10}"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="1234567890"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Service
          </label>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 text-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm  px-2 lg:px-3"
            >
              <option value="" disabled hidden>
                Select Service
              </option>
              {Services.map((service) => (
                <option key={service.id} value={service.name} className="text-sm">
                  {service.name} 
                </option>
              ))}
            </select>
            <IoIosArrowDropdown  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"/>
          </div>
        </div>

        <div className="text-center">
          <Button type="submit" className="w-full sm:w-auto">
            Submit
          </Button>
        </div>
      </form>
     </div>
    </div>
  );
}

export default Form;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/logoo.png";
import { useAuth } from "../../Context/AuthContext";
import Button from "../common/Button";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

function AdminPanel() {
  const { logout } = useAuth();
  const [service, setService] = useState([]);
  const [career, setCareer] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    axios
      .get("http://localhost:1000/Services")
      .then((res) => setService(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:1000/Career")
      .then((res) => setCareer(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    logout();
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Services":
        return (
          <section className="mb-14 cursor-default">
            <h2 className="text-3xl font-bold mb-8">
              Service <span className="text-blue-600">Requests</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.map((s, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {s.firstName} {s.lastName}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Email:</span> {s.email}
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> {s.phone}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-lg">
                      {s.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "Careers":
        return (
          <section className="mb-14 cursor-default">
            <h2 className="text-3xl font-bold mb-8">
              Career <span className="text-blue-600">Applications</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {career.map((c, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {c.name}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Email:</span> {c.email}
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> {c.phone}
                    </p>
                  </div>
                  <div className="mt-2 mb-2">
                    <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded-lg">
                      {c.jobRole}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Why Join?:</span> {c.message}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return (
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 cursor-default">
            <div className="col-span-full bg-white rounded-2xl shadow-md p-3 lg:p-8 text-center">
              <h2 className="lg:text-4xl text-2xl font-bold mb-4">
                Welcome, <span className="text-blue-600">Admin!</span>
              </h2>
              <p className="text-gray-600 text-sm lg:text-lg">
                Manage all <strong className="text-blue-600">Service Requests</strong> and <strong className="text-green-600">Career Applications</strong> from one place.
              </p>
            </div>

            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6 shadow-lg transform transition lg:hover:scale-105 cursor-pointer"
              onClick={() => setActiveSection("Services")}
            >
              <h3 className="text-xl font-semibold mb-2">Services Requests</h3>
              <p className="text-4xl font-bold">{service.length}</p>
              <p className="text-sm mt-2 font-semibold">Received Service Requests</p>
            </div>

            <div
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl p-6 shadow-lg transform transition lg:hover:scale-105 cursor-pointer"
              onClick={() => setActiveSection("Careers")}
            >
              <h3 className="text-xl font-semibold mb-2">Career Applicants</h3>
              <p className="text-4xl font-bold">{career.length}</p>
              <p className="text-sm mt-2 font-semibold">Received Job Requests</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-100 cursor-default">
      <aside className="w-full sm:w-72 bg-white shadow-xl p-4 sm:p-6 hidden sm:flex flex-col items-center">
        <img src={Logo} alt="Logo" className="w-24 h-24 object-contain mb-4" />
        <p className="text-center text-lg font-bold text-black">
          United Tech & Solutions
        </p>
        <p className="mb-8 text-sm text-gray-600 font-semibold">Australia's Best IT Company</p>

        <nav className="w-full space-y-4">
          {[
            {
              name: "Dashboard",
              icon: <MdDashboard className="text-xl mr-2" />,
            },
            { name: "Services", icon: <GrServices className="text-xl mr-2" /> },
            { name: "Careers", icon: <FaRegIdCard className="text-xl mr-2" /> },
          ].map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setActiveSection(name)}
              className={`w-full flex items-center px-5 py-2 rounded-lg outline-none text-base cursor-pointer font-medium transition ${
                activeSection === name
                  ? "bg-blue-100 text-blue-600 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {icon}
              {name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 bg-gray-150 min-h-screen">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-col items-center">
            <Button onClick={() => setActiveSection("Dashboard")} className="sm:hidden mb-2">
              Dashboard
            </Button>
            <h1
              className="text-3xl sm:text-4xl font-bold cursor-pointer text-gray-900 tracking-tight"
              onClick={() => setActiveSection("Dashboard")}
            >
              Admin <span className="text-blue-600">Dashboard</span>
            </h1>
            <p className="text-xs lg:text-xl text-gray-600 cursor-default font-semibold mt-1">
              Manage <span className="font-medium text-blue-600">Services</span> and <span className="font-medium text-blue-600">Job Applications</span> efficiently.
            </p>
          </div>

         <div className="flex flex-col items-center">
         <Button
            onClick={handleLogout}
            className="flex  w-fit items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold shadow transition duration-300 text-sm sm:text-base"
          >
            <MdLogout className="text-2xl"/>
          Log Out
          </Button>
         </div>
        </header>

        <section className="bg-blue-100 rounded-2xl shadow p-2 lg:p-6 overflow-x-auto">
          {renderSection()}
        </section>
      </main>
    </div>
  );
}

export default AdminPanel;

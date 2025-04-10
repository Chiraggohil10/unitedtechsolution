import React from "react";
import BackButton from "../Components/BackButton";
import Cybers from "../assets/cyber.webp";
import Button from "../Components/common/Button";
import { useNavigate } from "react-router-dom";

function Cyber() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 lg:px-32 py-10 bg-gray-50">
      <div className="mt-20 mb-6">
        <BackButton />
      </div>

      <div className="text-center text-xl lg:text-4xl font-bold mb-4 lg:mb-12">
        Cybersecurity <span className="text-blue-600">Services</span>
      </div>

      <div className="flex justify-center">
        <img
          src={Cybers}
          alt="Digital Marketing"
          className="mb-4 lg:mb-8 rounded-lg shadow-lg w-full  max-w-3xl object-cover"
        />
      </div>

      <h2 className="text-lg lg:text-3xl font-bold text-center text-gray-800 mb-4 lg:mb-8">
        Introduction to Cybersecurity{" "}
        <span className="text-blue-600"> & the Need for Security Audits</span>
      </h2>

      <div className=" mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed">
        <p>
          In today’s digital era, cybersecurity is crucial for protecting
          systems, networks, and data from cyber threats like unauthorized
          access and attacks. As businesses increasingly go digital, the risk of
          cyberattacks grows, making strong security measures vital.
        </p>

        <p>
          Security audits play a key role in identifying vulnerabilities and
          ensuring compliance with best practices. These audits help
          organizations detect weaknesses, strengthen defenses, and avoid risks
          such as data breaches, financial losses, and reputational harm.
        </p>

        <p>
          Regular security audits not only enhance cybersecurity but also
          support operational resilience and build trust among stakeholders.
          Prioritizing them is essential for staying safe in an ever-evolving
          digital landscape.
        </p>

        <h2 className="text-lg lg:text-3xl mb-4 lg:mb-8 font-bold text-center text-gray-800 ">
          The Importance of{" "}
          <span className="text-blue-600">
            {" "}
            Continuous Monitoring Post-Audit
          </span>
        </h2>

        <p>
          A security audit is just the beginning—continuous monitoring is
          essential to stay protected in today’s ever-changing threat landscape.
          Real-time monitoring helps detect breaches or vulnerabilities early,
          allowing swift response. Automated tools enhance efficiency, while
          regular audits ensure systems evolve with emerging risks and
          technologies. Building a security-aware culture further strengthens
          defenses. Together, monitoring and periodic reviews ensure ongoing
          protection and resilience.
        </p>

        <h2 className="text-lg lg:text-3xl mb-4 lg:mb-8 font-bold text-center text-gray-800">
          Getting Started with{" "}
          <span className="text-blue-600"> United Tech and Solutions</span>
        </h2>

        <p>
          A security audit is just the beginning—continuous monitoring is
          essential to stay protected in today’s ever-changing threat landscape.
          Real-time monitoring helps detect breaches or vulnerabilities early,
          allowing swift response. Automated tools enhance efficiency, while
          regular audits ensure systems evolve with emerging risks and
          technologies. Building a security-aware culture further strengthens
          defenses. Together, monitoring and periodic reviews ensure ongoing
          protection and resilience.
        </p>

        <p>
          Partnering with United Tech and Solutions begins with a personalized
          consultation to understand your security needs. Our experts assess
          your current setup, identify risks, and create a tailored audit plan.
          With continuous updates and expert guidance, we help you strengthen
          your cybersecurity framework. Trust United Tech and Solutions to keep
          your digital assets secure and your business prepared for future
          challenges.
        </p>

        <p className="flex justify-center"><Button onClick={() => navigate('/form') }>Get Service</Button></p>
      </div>
    </div>
  );
}

export default Cyber;

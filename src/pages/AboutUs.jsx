import React from "react";
import BackButton from "../Components/BackButton";

function AboutUs() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-24 xl:px-32 py-10 bg-white">
      <div className="mt-24 mb-6">
        <BackButton />
      </div>

      <div className="text-center text-3xl sm:text-4xl font-bold mb-8">
        About <span className="text-blue-600">Us</span>
      </div>

      <div className="bg-gray-100 w-full rounded-2xl shadow-xl p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto text-gray-700">
        <p className=" font-normal  mb-6 leading-relaxed">
          Welcome to{" "}
          <span className="text-blue-600 font-bold">
            United Tech and Solutions
          </span>
          , your trusted partner for innovative technology solutions. Founded
          with a passion for empowering businesses, we specialize in delivering
          cutting-edge IT services tailored to your unique needs. From cloud
          solutions and cybersecurity to custom software development and
          AI-powered innovations, we are here to transform your challenges into
          opportunities for growth.
        </p>

        <p className="mb-6 leading-relaxed">
          At{" "}
          <span className="text-blue-600 font-bold">
            United Tech and Solutions
          </span>
          , we believe in the power of collaboration and innovation. Our global
          team of experts combines technical expertise with a deep understanding
          of business dynamics, enabling us to craft solutions that are not
          only effective but also scalable and future-ready.
        </p>

        <div className="mb-6">
          <p className="text-blue-600 font-bold text-lg mb-2">Our Mission</p>
          <p>
            To empower businesses with technology-driven solutions that drive
            efficiency, enhance customer experiences, and unlock new
            opportunities.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-blue-600 font-bold text-lg mb-2">Our Vision</p>
          <p>
            To be a global leader in IT services, known for our commitment to
            quality, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-blue-600 font-bold text-lg mb-3">Why Choose Us?</p>
          <ul className="space-y-2 list-inside list-disc">
            <li>
              <span className="text-blue-600 font-bold">
                ✔ Customer-Centric Approach:
              </span>{" "}
              We put your business goals at the center of everything we do.
            </li>
            <li>
              <span className="text-blue-600 font-bold">✔ Global Expertise:</span>{" "}
              With a presence in both Australia and India, we offer the best of
              both worlds—local insights and cost-efficient delivery.
            </li>
            <li>
              <span className="text-blue-600 font-bold">✔ Innovation-Driven:</span>{" "}
              We leverage the latest technologies to keep you ahead of the
              competition.
            </li>
            <li>
              <span className="text-blue-600 font-bold">
                ✔ End-to-End Solutions:
              </span>{" "}
              From consultation to support, we’re with you every step of the
              way.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-blue-600 font-bold text-lg mb-2">Our Commitment</p>
          <p>
            At{" "}
            <span className="text-blue-600 font-bold">
              United Tech and Solutions
            </span>
            , we don’t just deliver services—we build long-lasting partnerships.
            Your success is our success, and we’re dedicated to providing
            solutions that make a real difference.
          </p>
        </div>

        <div>
          <p>
            Let us help you take your business to the next level. Together,
            we’ll create a future powered by innovation and technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";
import Devopss from "../assets/devops.jpg";
import BackButton from "../Components/BackButton";
import devops2 from '../assets/devops2.jpg';
import Button from "../Components/common/Button";
import { useNavigate } from "react-router-dom";

function DevOps() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 lg:px-32 py-10 bg-gray-50">
      <div className="mt-20 mb-6">
        <BackButton />
      </div>

      <div className="text-center text-xl lg:text-4xl font-bold mb-4 lg:mb-12">
        DevOps & Continuous{" "}
        <span className="text-blue-600">Integration (CI/CD) Services</span>
      </div>

      <div className="flex justify-center">
        <img
          src={Devopss}
          alt="Digital Marketing"
          className="mb-4 lg:mb-12 rounded-lg shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

      <h2 className="text-center text-lg lg:text-4xl font-bold mb-4 lg:mb-12">
        Introduction to the{" "}
        <span className="text-blue-600">
          Software Development Lifecycle (SDLC)
        </span>
      </h2>

      <div className=" mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed">
        <p>
          The Software Development Lifecycle (SDLC) is a structured process
          employed by software development teams to design, develop, test, and
          deploy high-quality software applications. This methodology outlines
          the various stages involved in software creation, ensuring effective
          tracking, management, and delivery of projects from inception to
          retirement. The importance of SDLC lies in its ability to provide a
          clear framework that not only enhances project visibility but also
          improves collaboration and minimizes risk in software development.
        </p>
        <p>
          Typically, the SDLC consists of several stages: planning, design,
          implementation, testing, deployment, and maintenance. In the planning
          phase, stakeholders define project goals and requirements, which helps
          to establish a vision for the software. The design phase translates
          these requirements into a blueprint for development, detailing
          technical specifications and user interface designs. Once designed,
          the implementation phase commences, where developers write code and
          build the software according to the received specifications.
        </p>
        <p>
          Following implementation, the testing stage is critical for
          identifying and resolving defects before the software is deployed.
          This stage encompasses various testing methods to ensure that the
          software meets quality standards and functions as intended. After
          thorough testing, organizations proceed to the deployment phase,
          wherein the software is made available to users, often accompanied by
          documentation and support. Finally, maintenance is an ongoing phase
          that addresses issues that arise post-deployment, enhancing
          performance through updates and user feedback.
        </p>
        <p>
          Throughout the SDLC, a range of challenges can manifest. For instance,
          miscommunication during the planning stage may lead to misaligned
          expectations, while insufficient testing can result in software bugs
          affecting user experience. As we delve deeper into the potential of
          integrating DevOps practices, it becomes essential to understand how
          these challenges can be effectively addressed, leading to a more
          efficient and streamlined software development process.
        </p>

        <h2 className="text-center text-lg lg:text-4xl font-bold mb-4 lg:mb-12">
        Understanding DevOps:{" "}
        <span className="text-blue-600">
        A Cultural Shift
        </span>
      </h2>

      <p>DevOps has become a vital strategy in modern software development, shifting from traditional practices to a culture that emphasizes collaboration and integration between development and operations teams. Rather than functioning as separate entities, these teams work together throughout the Software Development Lifecycle (SDLC), leading to faster development, higher quality releases, and smoother deployments.</p>
      <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8 ">
                <aside>
                  <img
                    src={devops2}
                    alt=""
                    className="rounded-lg  shadow-lg  shadow-gray-600 w-full mb-6 sm:my-10 h-full"
                  />
                </aside>
      
                <aside>
                  <p className="mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed">
                  A key element of DevOps is breaking down silos and fostering transparent communication. This approach ensures all stakeholders—from developers to operations and even QA and security—are aligned with common goals. Continuous feedback loops and shared responsibilities help identify issues early, encourage learning, and promote continuous improvement.
                  </p>
                </aside>
              </div>
      <p>Ultimately, DevOps is more than a set of tools—it's a cultural shift focused on speed, efficiency, and adaptability. Organizations that embrace this mindset position themselves to innovate faster, respond to changes effectively, and deliver better software consistently.</p>

      <p className="flex justify-center"><Button onClick={() => navigate('/form') }>Get Service</Button></p>
      </div>
    </div>
  );
}

export default DevOps;

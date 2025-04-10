import React from "react";
import Game from "../assets/Game.jpg";
import Game2 from "../assets/Game2.jpg";
import BackButton from "../Components/BackButton";
import Button from "../Components/common/Button";
import { useNavigate } from "react-router-dom";

function GameDevelopment() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 lg:px-32 py-10 bg-gray-50">
      <div className="mt-20 mb-6">
        <BackButton />
      </div>

      <div className="text-center text-xl lg:text-4xl font-bold mb-4 lg:mb-12">
        Game Development &{" "}
        <span className="text-blue-600">Immersive Experiences</span>
      </div>

      <div className="flex justify-center">
        <img
          src={Game}
          alt="Game Development"
          className="mb-4 lg:mb-12 rounded-lg shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

      <h2 className="text-center text-lg lg:text-4xl font-bold mb-4 lg:mb-12">
        Introduction to{" "}
        <span className="text-blue-600">
          Game Design & Development Lifecycle
        </span>
      </h2>

      <div className="mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed">
        <p>
          Game development is a multifaceted process that involves the creation
          of interactive digital entertainment. From ideation to deployment,
          every game goes through a carefully crafted development lifecycle that
          ensures engaging, immersive, and stable gameplay.
        </p>
        <p>
          The development lifecycle typically includes concept creation, design,
          prototyping, production, testing, and launch. During the concept phase,
          creative teams brainstorm game ideas, genres, and narratives. Design
          translates those ideas into tangible gameplay mechanics, levels, and
          character development. Prototyping helps validate core gameplay loops
          before full-scale production begins.
        </p>
        <p>
          Production involves building game assets, coding mechanics, and
          integrating audio-visual elements. Thorough QA testing ensures that
          bugs are identified and fixed, performance is optimized, and user
          experience is smooth. Finally, the game is released across platforms,
          often followed by post-launch support such as patches, content updates,
          and community engagement.
        </p>
        <p>
          Just like software, game development also faces challenges—technical
          constraints, scope creep, performance optimization, and meeting player
          expectations. Understanding the development lifecycle helps teams
          anticipate and overcome these hurdles efficiently.
        </p>

        <h2 className="text-center text-lg lg:text-4xl font-bold mb-4 lg:mb-12">
          Embracing the{" "}
          <span className="text-blue-600">
            Art & Technology of Game Making
          </span>
        </h2>

        <p>
          Game development blends storytelling, visual arts, sound design, and
          programming into one creative discipline. It’s not just about
          entertainment—games are powerful tools for education, simulation, and
          social connection. With engines like Unity and Unreal Engine,
          developers can create realistic environments, advanced physics, and
          immersive interactions.
        </p>

        <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8 ">
          <aside>
            <img
              src={Game2}
              alt="Game Creation"
              className="rounded-lg shadow-lg shadow-gray-600 w-full mb-6 sm:my-10 h-full"
            />
          </aside>

          <aside>
            <p className="mx-auto text-sm lg:text-lg text-gray-700 space-y-6 leading-relaxed">
              Collaboration among designers, developers, artists, and testers is
              essential. A successful game requires synchronized teamwork and
              continuous iteration. Whether building mobile games, console
              blockbusters, or indie gems, the focus remains on delivering
              unforgettable user experiences that captivate and challenge
              players.
            </p>
          </aside>
        </div>

        <p>
          Whether you're starting a new game idea or looking to scale an
          existing concept, our game development services provide the expertise
          and creativity to bring your vision to life. From prototyping to final
          deployment, we ensure a seamless journey from pixels to players.
        </p>

        <p className="flex justify-center">
          <Button onClick={() => navigate("/form")}>Get Service</Button>
        </p>
      </div>
    </div>
  );
}

export default GameDevelopment;

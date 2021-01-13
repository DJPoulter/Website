import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SkillsSection: React.FC<any> = () => {
  return (
    <div
      className="flex items-center justify-center section-content"
      id="skills"
    >
      <div className="bg-white h-10" />
      <div
        className="flex md:flex-row flex-col border rounded-2xl border-gray-400 w-11/12 max-w-6xl text-center shadow-md bg-white relative pb-4"
        style={{ top: "-100px" }}
      >
        <div className="flex-1 flex flex-col items-center ">
          <FontAwesomeIcon
            icon="book"
            size="3x"
            className="text-black fill-current my-8"
          />
          <span className="text-2xl font-semibold text-red-600">Studies</span>
          <span className="py-4 px-8">
            I started coding at a young age during school, going all the way
            through. I then went to a coding academy.
          </span>
          <span className="py-2 text-red-600 font-medium">
            Languages & Tools:
          </span>
          <ul>
            <li>Java</li>
            <li>Bash</li>
            <li>C</li>
            <li>HTML</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>React-JS</li>
            <li>Node.js</li>
            <li>C++</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <FontAwesomeIcon
            icon="briefcase"
            size="3x"
            className="text-black fill-current my-8"
          />
          <span className="text-2xl font-semibold text-red-600">Work</span>
          <span className="py-4 px-8">
            I am quick at learning a new programming language or style. I can be
            wherever, whenever.
          </span>
          <span className="py-2 text-red-600 font-medium">
            Languages & Tools:
          </span>
          <ul>
            <li>React-JS</li>
            <li>TypeScript</li>
            <li>React Native</li>
            <li>Scala</li>
            <li>Python Django</li>
            <li>GIT</li>
            <li>A/B testing</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <FontAwesomeIcon
            icon="gamepad"
            size="3x"
            className="text-black fill-current my-8"
          />
          <span className="text-2xl font-semibold text-red-600">Play</span>
          <span className="py-4 px-8">
            I enjoy coding small projects in my spare time. This starts with
            finding something I need in my daily life.
          </span>
          <span className="py-2 text-red-600 font-medium">
            Languages & Tools:
          </span>
          <ul>
            <li>React-JS</li>
            <li>C</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>GIT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

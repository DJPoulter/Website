import Spacer from "@/components/Spacer";
import React from "react";
import Particles from "react-particles-js";
import { NavLink } from "react-router-dom";

const HeaderSection: React.FC<any> = () => {
  return (
    <div className="section-content" id="home">
      <Particles
        style={{
          maxWidth: "100%",
          position: "fixed",
          margin: "0",
          padding: "0",
          top: "0",
          left: "0",
          zIndex: "-10",
        }}
        height="100vh"
        width="100vw"
        params={{
          background: {
            color: {
              value: {
                r: 31,
                g: 34,
                b: 41,
              },
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ height: `calc(100vh - 56px)` }}
      >
        <div className="text-4xl font-extrabold text-center text-white">
          <span>{"Hello, I am "}</span>
          <span className="text-red-600">Daniel Poulter</span>
          <span>.</span>
          <br />
          <span className="text-3xl text-white">
            I am a full stack developer.
          </span>
          <Spacer height={5} />
          <NavLink to="/CV-DanielPoulter.pdf" download target="_blank">
            <button
              className="shadow bg-red-400 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-base"
              type="button"
            >
              Download Resume
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

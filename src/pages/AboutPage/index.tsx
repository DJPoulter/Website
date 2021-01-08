import React from "react";
import Particles from "react-particles-js";

const AboutPage: React.FC<any> = () => {
  return (
    <div>
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
        height="95vh"
        width="100vw"
        params={{
          background: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0,
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
        style={{ height: "95vh" }}
      >
        <div className="text-4xl font-extrabold text-center text-white">
          <span>{"Hello, I am "}</span>
          <span className="text-red-600">Daniel Poulter</span>
          <span>.</span>
          <br />
          <span className="text-3xl text-white">
            I am a full stack developer.
          </span>
        </div>
      </div>
      <div className="bg-white" />
    </div>
  );
};

export default AboutPage;

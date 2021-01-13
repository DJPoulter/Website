import Spacer from "@/components/Spacer";
import React from "react";

const AboutSection: React.FC<any> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center section-content bg-white"
      style={{ paddingBottom: "100px" }}
      id="about"
    >
      <div className="text-4xl font-extrabold text-center text-black m-8">
        <span>About me</span>
      </div>
      <div className="text-left text-black font-normal pb-16 text-center grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 max-w-xl">
          <span className="text-lg">
            I am a software engineer from Cape Town, South Africa.
          </span>
          <Spacer height={3} />
          <span className="text-base">
            I am a problem solver at heart, always looking forward to the next
            challenge. Growing up I always knew I wanted to do something with
            technology. When I am not coding, you will find me soldering a
            keyboard together or working on a personal coding project.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

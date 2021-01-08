import NavigationMenu from "@/components/NavigationMenu";
import SplitText from "@/components/SplitText";
import React from "react";

const SkillsPage: React.FC<any> = () => {
  return (
    <>
      <div className="bg-Pastel-Orange dark:bg-gray-800 bg-transparent h-screen flex flex-row z-0">
        <NavigationMenu />
        {/* eslint-disable-next-line react/jsx-boolean-value */}
        <div className="flex flex-wrap content-center">
          <div>
            <span className="text-6xl font-black">
              <SplitText text="Skills & Experience" />
            </span>
            <br />
            <span>Skills</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;

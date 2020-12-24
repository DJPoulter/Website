import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavigationMenu: React.FC<any> = () => {
  return (
    <div className="h-screen bg-CDGreen w-16 flex flex-col content-between justify-between">
      <div>Daniel</div>
      <div className="flex flex-col items-center">
        <a rel="index" href="/" className="h-12">
          <FontAwesomeIcon
            icon="home"
            size="2x"
            className="text-white fill-current"
          />
        </a>
        <a rel="index" href="/" className="h-12">
          <FontAwesomeIcon
            icon="user-tie"
            size="2x"
            className="text-white fill-current"
          />
        </a>
        <a rel="index" href="/" className="h-12">
          <FontAwesomeIcon
            icon="cog"
            size="2x"
            className="text-white fill-current"
          />
        </a>
        <a rel="index" href="/" className="h-12">
          <FontAwesomeIcon
            icon="envelope"
            size="2x"
            className="text-white fill-current"
          />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="https://www.linkedin.com/in/danpoulter"
          className="h-12"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin-in"]}
            size="lg"
            className="text-white fill-current"
          />
        </a>

        <a
          href="http://github.com/djpoulter"
          className="h-12"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="lg"
            className="text-white fill-current"
          />
        </a>
      </div>
    </div>
  );
};

export default NavigationMenu;

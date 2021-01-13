import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterSection: React.FC<any> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center section-content rounded-full border-transparent border-t-4 "
      id="footer"
      style={{ boxShadow: "0px -70px 0px 32px rgba(255,255,255,1)" }}
    >
      <div className="text-white fill-current my-8">
        <a
          href="https://www.linkedin.com/in/danpoulter"
          className="px-4"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
        </a>
        <a
          href="http://github.com/djpoulter"
          className="px-4"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default FooterSection;

import React from "react";

type Props = {
  text: string;
};

const SplitText: React.FC<any> = ({ text }: Props) => {
  return (
    <span>
      {text.split("").map((char, index) => {
        return (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className=" cursor-default hover:text-white hover:animate-pulse"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;

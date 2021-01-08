import Boop from "@/components/Boop";
import React from "react";

type Props = {
  text: string;
};

const SplitText: React.FC<any> = ({ text }: Props) => {
  return (
    <span>
      {text.split("").map((char, index) => {
        return (
          <Boop
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            text={char}
          />
        );
      })}
    </span>
  );
};

export default SplitText;

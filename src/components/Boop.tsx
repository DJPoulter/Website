import useBoop from "@/hooks/use-boop";
import React from "react";
import { animated } from "react-spring";

type Props = {
  text: string;
  rot: number;
};

// eslint-disable-next-line react/prop-types
const Boop: React.FC<any> = ({ text, rot = 45 }: Props) => {
  const [style, trigger] = useBoop({ rotation: rot });
  return (
    <animated.span
      style={style as any}
      onMouseEnter={trigger as any}
      // eslint-disable-next-line react/no-array-index-key
      className="cursor-default inline-block"
    >
      {text}
    </animated.span>
  );
};

export default Boop;

import React from "react";

const Spacer: React.FC<any> = ({ height = 1 }) => (
  <div className={`h-${height}`} />
);

export default Spacer;

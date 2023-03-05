import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Bar = () => {
  return (
    <ProgressBar
      completed={100}
      bgColor="#6e3e37"
      height="8px"
      borderRadius="0"
      labelColor="#6e3e37"
      labelSize="0"
      transitionDuration="5s"
      animateOnRender
    />
  );
};

export default Bar;

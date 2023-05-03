import React from "react";

const LandingImage = (props) => {
  return (
    <>
      <img
        src={props.image}
        alt="landing image"
        style={{ width: "100%", marginRight: "-1", display: "block" }}
      />
    </>
  );
};

export default LandingImage;

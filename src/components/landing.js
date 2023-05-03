import React, { useCallback, useState, useRef } from "react";
import LandingImage from "./landingImage";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Credits = styled.div`
  float: right;
  color: white;
  margin-right: 10px;
  padding-top: 0.5em;
  font-size: 18px;
  font-family: Montserrat;
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const Landing = (props) => {
  let landingGif = props.landing_image;
  let landingStatic = props.landing_image_static;
  let landingCredits = props.landing_credits;

  const gifEndRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);

  const scroller = useCallback(() => {
    setTimeout(() => {
      if (gifEndRef && gifEndRef.current) {
        gifEndRef.current.scrollIntoView({ behavior: "smooth" });
        setFirstTime(false);
      }
    }, 4000);
  }, [gifEndRef]);

  return (
    <>
      {firstTime ? (
        <LandingImage image={landingGif} />
      ) : (
        <LandingImage image={landingStatic} />
      )}
      <div ref={gifEndRef}></div>
      {firstTime ? scroller() : null}
      <Credits>{landingCredits}</Credits>
    </>
  );
};

export default Landing;

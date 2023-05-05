import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  position: relative;
  background: #D9D9D9;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

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

export default function Landing(props) {
    return (
      <Container>
        <Illo src={props.landing_image}></Illo>
        <Credits>{props.landing_credits}</Credits>
      </Container>
    );
  }



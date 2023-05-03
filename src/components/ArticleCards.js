import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import starship from "../images/starship.svg";

let Image = styled.img``;
let ByLine = styled.p``;
let PhotoLine = styled.p``;
let StarshipImg = styled.img``;

export default function ArticleCard(props) {
  const Container = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;
    // box-sizing: content-box;
    // overflow: visible;
    ${mediaQueries.mobile} {
      width: 80%;
    }
  `;

  const Starship = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
  `;

  const Overlay = styled.div`
    width: 50%;
    margin-left: 25%;
    height: 100%;
    position: absolute;
    ${mediaQueries.mobile} {
      width: 100%;
      margin-left: 0%;
    }
  `;

  const Title = styled.a`
    position: absolute;
    top: 66%;
    left: 30%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: inherit;
    ${mediaQueries.mobile} {
      left: 35%;
    }
  `;

  /*FLOAT RIGHT*/
  if (props.article_float == "right") {
    StarshipImg = styled.img`
      height: 100%;
      width: 100%;
    `;
    Image = styled.img`
      position: absolute;
      top: 44%;
      left: 34%;
      width: 140px;
      height: 100px;
      margin: auto;
      box-sizing: content-box;
      object-fit: cover;
      ${mediaQueries.mobile} {
        left: 37%;
      }
    `;

    ByLine = styled.p`
      position: absolute;
      top: 54%;
      left: 11%;
      font-size: 7.5px;
      font-weight: 400;
      text-align: center;
      font-style: italic;
      color: inherit;
      ${mediaQueries.mobile} {
        left: 19%;
      }
    `;

    PhotoLine = styled.p`
      position: absolute;
      top: 58%;
      left: 14%;
      font-size: 7.5px;
      font-weight: 400;
      text-align: center;
      font-style: italic;
      color: inherit;
      ${mediaQueries.mobile} {
        left: 22%;
      }
    `;
  }

  /*FLOAT LEFT*/
  if (props.article_float == "left") {
    StarshipImg = styled.img`
      height: 100%;
      width: 100%;
      transform: scaleX(-1);
    `;
    Image = styled.img`
      position: absolute;
      top: 44%;
      left: 9%;
      width: 58%;
      max-width: 58%;
      height: 20%;
      overflow: auto;
      box-sizing: content-box;
      object-fit: cover;
      ${mediaQueries.mobile} {
        width: 42%;
        left: 20%;
      }
    `;

    ByLine = styled.p`
      position: absolute;
      top: 54%;
      left: 69%;
      font-size: 7.5px;
      font-weight: 400;
      text-align: center;
      font-style: italic;
      color: inherit;
      ${mediaQueries.mobile} {
        left: 64%;
      }
    `;

    PhotoLine = styled.p`
      position: absolute;
      top: 58%;
      left: 69%;
      font-size: 7.5px;
      font-weight: 400;
      text-align: center;
      font-style: italic;
      color: inherit;
      ${mediaQueries.mobile} {
        left: 64%;
      }
    `;
  }

  return (
    <Container>
      <Starship>
        <StarshipImg src={starship}></StarshipImg>
      </Starship>
      <Overlay>
        <a href={props.article_url}>
          <Image src={props.article_image} />
        </a>
        <Title href={props.article_url}>{props.article_title}</Title>
        <ByLine>By: Joe Bruin{props.article_byline}</ByLine>
        <PhotoLine>
          Photo By: <br /> Joe Bruin {props.article_img_credit}
        </PhotoLine>
      </Overlay>
    </Container>
  );
}

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import StarshipLeft from "../images/starshipLeft.svg";
import StarshipRight from "../images/starshipRight.svg";

const Container = styled.div`
    height: 660px;
    width: 600px;
    max-width: 100vw;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    left: 0;
    color: black;
    text-decoration: none;
`

const Background = styled.img`
    height: 656px;
    width: 436px;
    max-width: 100vw;
    position: absolute;
    top: 0;
    left: 0em;
`

const ArticleInfo = styled.div`
    border: 2px red;
    position: absolute;
    width: 300px;
    height: 180px;
    left: 4em;
    top: 18em;
    color: black;
    text-decoration: none;
`

const Image = styled.img`
    width: 60%;
    /* max-width: 100%; */
    position: absolute;
    top: 0;
    right: 1em;
`

const Title = styled.a`
    position: absolute;
    bottom: -0.5em;
    left: 0.4em; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    color: inherit;

    background-color: rgba(255,255,255,0.8);
    border-radius: 1em;
    padding: 0.1em;
`

const Byline = styled.div`
    position: absolute;
    width: 30%;
    left: 0.5em;
    top: 2em;
    font-weight: 500;
`

const PhotoCred = styled.div`
    position: absolute;
    width: 30%;
    left: 0.5em;
    bottom: 4em;
    font-weight: 500;
`

export default function ArticleCard(props) {
    return (
        <Container>
            {props.article_float === "left" && (
                <Background src={StarshipRight} />
            )}
            {props.article_float === "right" && (
                <Background src={StarshipLeft} />
            )}
            <a href={props.article_url}>
                <ArticleInfo>
                    <Image src = {props.article_image} />
                    <Byline> By: {props.article_byline} </Byline>
                    {/* <PhotoCred> Photo By: {props.article_img_credit} </PhotoCred> */}
                    <Title href={props.article_url}> {props.article_title} </Title>
                </ArticleInfo>
            </a>
        </Container>
    )
}
import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import StarshipLeft from "../images/starshipLeft.svg";
import StarshipRight from "../images/starshipRight.svg";
import Strawberry from "../images/strawberry.png"

const Container = styled.div`
    height: 800px;
    width: 800px;
    position: relative;
    font-family: 'Montserrat', sans-serif;
`

const Background = styled.img`
    height: 656px;
    width: 436px;
    position: absolute;
    top: 0;
    left: 0;
`

const ArticleInfo = styled.div`
    border: 2px red;
    position: absolute;
    width: 300px;
    height: 180px;
    left: 4em;
    top: 18em;
`

const Image = styled.img`
    width: 60%;
    position: absolute;
    top: 0;
    right: 1em;
`

const Title = styled.div`
    position: absolute;
    bottom: 0;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
`

const Byline = styled.div`
    position: absolute;
    width: 30%;
    left: 0.5em;
    bottom: 7em;
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
                <Background src={StarshipLeft} />
            )}
            {props.article_float === "right" && (
                <Background src={StarshipRight} />
            )}
            <ArticleInfo>
                <Image src = {props.article_image} />
                <Byline> By: {props.article_byline} </Byline>
                <PhotoCred> Photo By: {props.article_img_credit} </PhotoCred>
                <Title> {props.article_title} </Title>
            </ArticleInfo>
        </Container>
    )
}
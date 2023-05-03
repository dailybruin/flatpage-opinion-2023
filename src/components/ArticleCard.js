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


const ArticleInfo = styled.div`
    border: 2px red;
    position: absolute;
    width: 300px;
    height: 180px;
    left: 4em;
    top: 18em;
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



export default function ArticleCard(props) {
    function getPhotoPlacement(article_float){
        if (article_float == "left"){return ("1em")}
        else if  (article_float == "right"){return ("6em")}
    }
    
    function getBackground(article_float) {
        if (article_float == "left"){return (StarshipLeft)}
        else if  (article_float == "right") {return (StarshipRight)}
    }

    function getByline(article_float){
        if (article_float == "left"){return ("0.5em")}
        else if  (article_float == "right"){return ("12em")}
    }

    function getPhotoCred(article_float){
        if (article_float == "left"){return ("0.5em")}
        else if  (article_float == "right"){return ("12.6em")}
    }

    const Background = styled.img`
        height: 656px;
        width: 436px;
        position: absolute;
        top: 0;
        left: 0;
    `
    const Image = styled.img`
        width: 60%;
        position: absolute;
        top: 0;
        right: #${getPhotoPlacement(props.article_float)};
    `
    const Byline = styled.div`
        position: absolute;
        width: 30%;
        left: #${getByline(props.article_float)};
        bottom: 5em;
        font-weight: 500;
    `

    const PhotoCred = styled.div`
        position: absolute;
        width: 30%;
        left: #${getPhotoCred(props.article_float)};
        bottom: 2em;
        font-weight: 500;
    `
    return (
        <Container>
            <Background src={getBackground(props.article_float)} />
            <ArticleInfo>
                <Image src = {props.article_image} />
                <Byline> By: {props.article_byline} </Byline>
                <PhotoCred> Photo By: {props.article_img_credit} </PhotoCred>
                <Title href={props.article_url}>{props.article_title} </Title>
            </ArticleInfo>
        </Container>
    )
}
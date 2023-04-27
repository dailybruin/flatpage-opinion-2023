import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import Starship from "../images/starship.svg"
import Strawberry from "../images/strawberry.png"

// import IG from "../images/socials/insta.svg"
// import DailyBruinLogo from "../image/DailyBruinLogo.svg"

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
    border: 2px red;
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
    font-weight: 700;
    font-size: 20px;


`

const Credit = styled.div`
    position: absolute;
    width: 30%;
    left: 1em;
    font-weight: 500;
    bottom: 5em;
`

const PhotoCredit = styled.div`
    position: absolute;
    width: 30%;
    left: 1em;
    font-weight: 500;
    bottom: 2em;
`
export default function ArticleCard(props){
    return (
        <Container>
            <Background src = {Starship}/>
            <ArticleInfo>
                <Image src = {Strawberry} />
                <Title> ARTICLE TITLE </Title>
                <Credit> By: Joe Bruin </Credit>
                <PhotoCredit> Photo By: Joe Bruin </PhotoCredit>
            </ArticleInfo>
        </Container>
    )
}
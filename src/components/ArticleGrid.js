import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import {mediaQueries} from '../shared/config';
import Background from '../images/background.svg'

const Container = styled.div`
    max-width: 100vw;
    padding-top: 5em;
    padding-bottom: 42em;
    position: relative;
    
    ${mediaQueries.mobile} {
        margin-bottom: 6em;
    }
`

const Grid = styled.div`
    width: 80%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    column-gap: 2em;
    margin: auto;

    ${mediaQueries.mobile} {
        display: flex;
        width: 60%;
        flex-direction: column;
        justify-items: center;
        margin-left: 15vw;
    }
`

const Caboose = styled.div`
    margin: auto;
    text-align: auto;
    position: absolute;
    left: 32vw;
    bottom: 0em;
    ${mediaQueries.mobile} {
        margin: auto;
        position: relative;
        margin: auto;
        top: 0;
        left: 0;
    }
`

const ArticleGrid = ({articles}) => {
    return (
        <Container>
            <Grid >
                {articles ? articles.map((item, key) => {
                    console.log(key)
                    if (key < 6) {
                        return (
                            <div className="wrapper">
                                <ArticleCard
                                    article_title={item.article_title}
                                    article_byline={item.article_byline}
                                    article_image={item.article_image}
                                    article_url={item.article_url}
                                    article_float={item.article_float}
                                />
                            </div>
                            )
                    } else {
                        return (
                        <Caboose>
                            <ArticleCard
                                article_title={item.article_title}
                                article_byline={item.article_byline}
                                article_image={item.article_image}
                                article_url={item.article_url}
                                article_float={item.article_float}
                            />
                        </Caboose>
                        )
                    }

                }): null}     
            </Grid>
        </Container>
    );
}
export default ArticleGrid;

/*
            <Grid>  
              {articles ? articles.map((item) => {
                    const articleArea = `article_${item.number}`;

                    return (
                        <div class={articleArea}>
                            <ArticleCard
                                article_title={item.article_title}
                                article_byline={item.article_byline}
                                article_image={item.article_image}
                                article_url={item.article_url}
                            />
                        </div>
                    );
                  })
              : null}
          </Grid>
*/
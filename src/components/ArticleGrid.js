import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import {mediaQueries} from '../shared/config';

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 80vh);
    grid-template-columns: 33vw 33vw;
    justify-content: center;
    row-gap: 20vh;
    column-gap: 5vw;
    .wrapper {
    }

    ${mediaQueries.mobile} {
        display: flex;
        gap: 10px;
        width: 50%;
        flex-direction: column;
        justify-items: center;
        margin-left: 15vw;
    }
`;

const Caboose = styled.div`
${mediaQueries.mobile} {
    margin-left: 0vw;
}
margin-left: 18vw;
`

const ArticleGrid = ({articles}) => {
    return (
        <div>
        <Container >
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
                        />
                    </Caboose>
                    )
                }

            }): null}     
        </Container>
        </div>
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
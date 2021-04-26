import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
// import Recipes from '../components/Recipes'
import App from '../news/App'

const NewsPage = () => {
    return (
        <main>
            <PageHero title="news"/>
            <Wrapper className="page section-center">
                <App/>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
//      display: grid;
//   grid-gap: 50px 100px;
    // gap: 4rem;

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`


export default NewsPage

import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import App from '../coupons/App'

const CouponsPage = () => {
    return (
        <div>
            <PageHero title="Coupons"/>
            
            <Wrapper className="page">
                <App/>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.section`
    // display: grid;
    // gap: 4rem;

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
`

export default CouponsPage

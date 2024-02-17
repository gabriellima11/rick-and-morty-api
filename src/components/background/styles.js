import styled from 'styled-components'

import Background from '../../assets/bg-img.svg'

export const Container = styled.div`
    width: 100%;
    height: 480px;
    background: url(${Background}) center;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 100px;
    }

    @media screen and (max-width: 870px) {
        h1{
            font-size:60px
        }
    }
    @media screen and (max-width: 520px) {
        h1{
            font-size:40px
        }
    }
`
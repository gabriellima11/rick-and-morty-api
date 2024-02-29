import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: #202329;

    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        font-size: 18px;
        color: #f5f5f5
    }

    .github-icon{
        width: 32px;

        &:hover{
            filter: brightness(0.7)
        }
    }

    .by{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    span{
        color: #9E9E9E;
        font-size: 19px;

        &:hover{
            color: #ff9800
        }
    }

    img{
        width: 23px;
    }
`
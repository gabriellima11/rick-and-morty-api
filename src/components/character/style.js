import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height:220px;
    background-color: #3C3E44;
    display: flex;
    border-radius: 10px;

    img{
        width: 230px;
        height:220px;
        border-radius: 10px 0 0 10px;
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        height: 450px;

        img{
            margin: 0 auto;
            border-radius: 0 0 10px 10px;
        }
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 12px;

    .title{
        color: #F5F5F5;
        font-weight: 800;
        font-size: 27px;

        &:hover{
            color: #ff9800;
            cursor: pointer;
        }
    }

    .status{
        color: #ffffff;
        text-transform: capitalize;
        font-weight: 500;

        span{
            width: 9px;
            height: 9px;
            display: inline-block;
            margin-right: 5px;
            border-radius: 50%;
            background-color: ${(props) => props.backgroundColor};
        }
    }

    .info{
        color: #9E9E9E;
        font-weight: 500;
    }

    .description{
        color: #F5F5F5;
        font-weight: 500;
        font-size: 18px;

        &:hover{
            color: #ff9800;
            cursor: pointer;
        }
    }

    
`
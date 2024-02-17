import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;

    nav{
        display: flex;
        gap: 34px;
        align-items: center;
    }

    img{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #333333;
        font-size: 18px;

        &:hover{
            color: #ff9800
        }
    }

    .btn-support{
        padding: 8px 20px;
        border: 1px solid #ff9800;
        border-radius: 10px;
        transition: 0.3s;

        &:hover{
            color: #fff;
            background-color: #ff9800;
        }
    }

    @media screen and (max-width: 550px) {
        justify-content: space-around;
        gap: 15px;

        .btn-support{
            padding: 6px 12px;
            text-align: center;
        }
    }

`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    button{
        background-color: transparent;
        border: none;
        color: gray;
        font-size: 35px;
        cursor: pointer;

        &:hover{
            color: #ff9800
        }

        &:disabled{
            color: rgba(158, 158, 158, 0.5);
            cursor: not-allowed;
        }
    }

    .container-page{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .page{
        font-size: 18px;
        color: rgba(158, 158, 158, 0.7);
    }

    .current-page{
        font-size: 26px;
        color: #ffffff;
    }
`
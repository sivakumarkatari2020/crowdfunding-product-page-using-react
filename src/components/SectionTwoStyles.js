import styled, { css } from "styled-components";

export const Analytics = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width : 450px){
        flex-direction: column;
    }
`

export const Box = styled.div`
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.borders && css`
        border-left: 2px solid hsl(0,0%,90%);
        border-right: 2px solid hsl(0,0%,90%);

        @media (max-width : 450px){
            border-top: 2px solid hsl(0,0%,90%);
            border-bottom: 2px solid hsl(0,0%,90%);
            border-left: none;
            border-right: none;
        }
    `}
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 15px;
    border-radius: 10px;
    background-color: hsl(0,0%,90%);
    margin-top : 1rem;
`

export const Progress = styled.div`
    width: 80%;
    height: 100%;
    border-radius: 10px;
    background-color: hsl(176, 50%, 47%);
`
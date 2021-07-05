import styled, { css } from "styled-components";

export const Section = styled.div`
    width: 100%;
    padding : 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    ${props => props.small && css`
        padding: 0;
        border: 1px solid #000;
        box-shadow: none;
    `}

    ${props => props.fade && css`
        padding: 0;
        border: 1px solid #000;
        box-shadow: none;
        opacity: 0.25;
    `}
`
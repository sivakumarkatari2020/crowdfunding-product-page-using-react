import styled, { css } from "styled-components";

export const Button = styled.button`
    width: 200px;
    padding: 1rem 0.5rem;
    font-weight: 700;
    background-color: hsl(176, 50%, 47%);
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    ${props => props.small && css`
        width: 150px;
        font-weight: 600;
    `}
`
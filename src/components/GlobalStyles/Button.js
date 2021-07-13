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
    transition: .5s;

    &:hover{
        background-color: hsl(176, 72%, 28%);
    }

    ${props => props.small && css`
        width: 150px;
        font-weight: 600;
    `}

    ${props => props.round && css`
        width: 15px;
        height: 15px;
        background-color: hsl(176,50%,47%);
        padding: 0;
        border-radius: 50%;
    `}

    ${props => props.ultraSmall && css`
        width: 100px;
        padding: 1rem 0.5rem;
        border-radius: 50px;
        background-color: hsl(176,50%,47%);

        @media (max-width : 450px){
            width: 70px;
            padding: 0.5rem 0.5rem;
        }
    `}
    
`

export const Input = styled.input`
    width: 100px;
    padding: 1rem 0.5rem;
    border: 1px solid rgba(0,0,0,0.5);
    outline: none;
    color : rgba(0,0,0,0.5);
    border-radius: 50px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media (max-width : 450px){
        width: 60px;
        padding: 0.5rem 0.5rem;
    }
`

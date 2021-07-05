import styled,{css} from "styled-components";

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin : 0;
    margin-top: 1rem;
    padding: 0;

    @media (max-width : 450px){
        text-align: center;
    }

    ${props => props.primary && css`
        font-size: 1.2rem;

        @media (max-width : 450px){
            text-align: start;
        }
    `}

    ${props => props.big && css`
        font-size: 3rem;
    `}

`
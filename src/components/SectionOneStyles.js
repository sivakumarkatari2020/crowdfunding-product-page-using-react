import styled, {css} from "styled-components";

export const Logo = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: -1%;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: hsl(0, 0%, 48%);
    line-height: 150%;

    @media (max-width : 450px){
        text-align : center;
    }

    ${props => props.primary && css`
        font-weight: 500;

        @media (max-width : 450px){
            display: none;
        }
    `}

    ${props => props.secondary && css`
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
    `}

    ${props => props.wrap && css`
        width: 90%;
        white-space: pre-wrap;

        @media (max-width : 450px){
            text-align: start;
        }
    `}

    ${props => props.green && css`
        margin: 0;
        color: hsl(176, 50%, 47%);
        font-size: 14px;
        font-weight: 500;
    `}
`

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${props => props.small && css`
        width: 90%;
        margin-bottom: 1rem;

        @media (max-width : 450px){
            flex-direction: column;
            align-items: flex-start;
        }
    `}

    ${props => props.ultraSmall && css`
        justify-content: flex-start;
        margin: 0;
    `}

`

export const Bookmark = styled.div`
    width: 200px;
    background-color: hsl(0,0%,90%);
    border-radius : 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width : 450px){
        width: 50px;
        color: transparent;
    }
`
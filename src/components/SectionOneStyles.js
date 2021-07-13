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
    text-align: center;

    @media (max-width : 450px){
        text-align : center;
    }

    ${props => props.primary && css`
        font-weight: 500;

        @media (max-width : 450px){
            display: none;
        }
    `}

    ${props => props.bookmarked && css`
        color: hsl(176, 72%, 28%);
        font-weight: 500;

        @media (max-width : 450px){
            display: none;
        }
    `}

    ${props => props.bookmark && css`
        color: #000000;
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
            font-size: 14px;
        }
    `}

    ${props => props.green && css`
        margin: 0;
        color: hsl(176, 50%, 47%);
        font-size: 14px;
        font-weight: 500;

        @media (max-width : 450px){
            font-size: 12px;
        }
    `}

    ${props => props.backedText && css`
        width: 90%;
        font-size: 0.9rem;
        text-align: start;
        align-items : flex-start;
    `}
`

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: .5s;

    ${props => props.small && css`
        width: 90%;
        margin-bottom: 1rem;

        @media (max-width : 450px){
            flex-direction: column;
            align-items: flex-start;
        }
    `}

    ${props => props.ultraSmall && css`
        width: 100px;
        justify-content: flex-start;
        margin: 0;
    `}

    ${props => props.bookmark && css`
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        @media (max-width : 450px){
            width: 50px;
            color: transparent;
            margin: 0;
        }
    `}

    ${props => props.backed && css`
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        padding-right: 0;
        margin: 1rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width : 450px){
            width: 90%;
        }
    `}

    ${props => props.backedBorder && css`
        border: 2px solid hsl(176, 50%, 47%);
        border-radius: 10px;
        padding: 1rem;
        padding-right: 0;
        margin: 1rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width : 450px){
            width: 90%;
        }
    `}

    ${props => props.backedFade && css`
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        padding-right: 0;
        margin: 1rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
        pointer-events: none;

        @media (max-width : 450px){
            width: 90%;
        }
    `}

    ${props => props.column && css`
        width: 90%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0;
        margin: 0;
    `}

    ${props => props.row && css`
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
    `}

    ${props => props.rowSmall && css`
        width: 250px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;

        @media (max-width : 450px){
            width: 150px;
        }
    `}

    ${props => props.rowColumn && css`
        width: 70%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        @media (max-width : 450px){
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    `}

    ${props => props.columnSmall && css`
        width: 10%;
        height: 100px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0;
        margin: 0;

        @media (max-width:450px){
            width: 5%;
            font-size: 14px;
        }
    `}

    ${props => props.marginLess && css`
        margin-top: 0;
    `}

    ${props => props.round && css`
        width: 20px;
        height: 20px;
        margin: 0 10px;
        border: solid black 1px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
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
    cursor: pointer;

    ${props => props.checked && css`
            background-color: rgb(225, 247, 245);
            color : hsl(176, 72%, 28%);

            @media (max-width : 450px){
                width: 50px;
                color: transparent;
            }
        `}

    @media (max-width : 450px){
        width: 50px;
        color: transparent;
    }
`

export const Hr = styled.hr`
    width: 90%;
    height: 0px;
    background-color: #000;
`
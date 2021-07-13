import styled from "styled-components";

export const MainFrame = styled.div`
    max-width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,0%);
    z-index: 1;

    @media (max-width : 450px){
        max-width: 280px;
        position: absolute;
    }
`

import styled from "styled-components";

export const FinishedBoard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
`

export const Finish = styled.div`
    width: 320px;
    height: auto;
    padding: 1rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left : 50%;
    transform: translate(-50%,-50%);
`
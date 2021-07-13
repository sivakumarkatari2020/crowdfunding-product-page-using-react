import styled from 'styled-components';
import backGroundImg from './images/image-hero-desktop.jpg';
import backGroundImg2 from './images/image-hero-mobile.jpg';

export const HeaderComponent = styled.div`
    height: 400px;
    background-color: black;
    background: url(${backGroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;

    @media (max-width : 450px){
        width: 100%;
        height: 400px;
        background: url(${backGroundImg2});
        background-repeat: no-repeat;
        background-size: cover;
        background-clip: border-box;
    }
`

export const Wrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);

    @media (max-width : 450px){
        width: 90%;
    }
`

export const Nav = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width : 450px){
        display: none;
    }
`

export const NavLink = styled.a`
    display: block;
    width: 33.3333%;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Hamburger = styled.img`
    display: none;

    @media (max-width : 450px){
        display: block;
    }
`
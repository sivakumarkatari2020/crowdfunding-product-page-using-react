import React from 'react';
import { HeaderComponent,Wrapper,Nav,NavLink,Hamburger } from './HeaderStyles';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';

function Header(props) {
    const {ismenuOpen,openMenu} = props;

    function clickHandler(){
        if(ismenuOpen === true){openMenu(false)}
        else{openMenu(true)}
    }

    return (
        <HeaderComponent>
            <Wrapper>
                <img src={logo} alt="company's logo with name"></img>
                <Nav>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Discover</NavLink>
                    <NavLink href="#">Get Started</NavLink>
                </Nav>
                <Hamburger 
                src={hamburger} 
                alt="Hamburger menu icon only for mobile layout" 
                onClick={clickHandler}
                ></Hamburger>
            </Wrapper>
        </HeaderComponent>
    )
}

export default Header

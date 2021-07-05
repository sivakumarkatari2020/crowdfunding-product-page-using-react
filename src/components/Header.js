import React,{useState,useEffect} from 'react';
import { HeaderComponent,Wrapper,Nav,NavLink,Hamburger } from './HeaderStyles';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';

function Header() {
    const [isOpen,setOpen] = useState(false);

    useEffect(()=>{
        console.log(isOpen);
    },[isOpen]);

    const openMenu = () => {
        if(isOpen){
            setOpen(false);
        }else{
            setOpen(true);
        }
    }

    return (
        <HeaderComponent>
            <Wrapper>
                <img src={logo} alt="company's logo with name"></img>
                {
                isOpen ? '' : 
                <Nav>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Discover</NavLink>
                    <NavLink href="#">Get Started</NavLink>
                </Nav>
                }
                <Hamburger 
                src={hamburger} 
                alt="Hamburger menu icon only for mobile layout" 
                onClick={openMenu}
                ></Hamburger>
            </Wrapper>
        </HeaderComponent>
    )
}

export default Header

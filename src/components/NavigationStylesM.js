import styled,{css} from "styled-components"

export const NavBoard = styled.div`
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

    @media (min-width : 500px){
      display: none;
    }
`

export const Nav = styled.div`
    width: 300px;
    height: 210px;
    margin-top: 4rem;
    border-radius: 10px;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const NavLink = styled.a`
    display: block;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #000;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Img = styled.img`
  margin-top: 4rem;

  ${props => props.marginLess && css`
    margin-top: 0;
  `}
`
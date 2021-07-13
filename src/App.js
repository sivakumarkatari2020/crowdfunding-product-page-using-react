import React,{useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {NavBoard,Img,Nav,NavLink} from './components/NavigationStylesM';
import { FinishedBoard,Finish } from './components/FinishedStyles';
import { H1 } from './components/GlobalStyles/heading';
import { Paragraph } from './components/SectionOneStyles';
import { Button } from './components/GlobalStyles/Button';
import crossLogo from './components/images/icon-close-menu.svg';
import checkLogo from './components/images/icon-check.svg';


function App() {
  const [ismenuOpen,openMenu] = useState(false);
  const [isFinished, finishIt] = useState(false);
  const [isBacked,backProject] = useState(false);

  return (
    <div className="App">
      <Header ismenuOpen={ismenuOpen} openMenu={openMenu}/>
      {
          ismenuOpen ?
          <NavBoard>
              <Img 
              src={crossLogo} 
              alt="close" 
              onClick={()=>openMenu(false)}></Img>
              <Nav>
                  <NavLink href="#">About</NavLink>
                  <NavLink href="#">Discover</NavLink>
                  <NavLink href="#">Get Started</NavLink>
              </Nav>
          </NavBoard> : ''
      }
      {
        isFinished ? 
        <FinishedBoard>
          <Finish>
              <Img marginLess src={checkLogo} alt="check mark"></Img>
              <H1 small>Thanks for your support!</H1>
              <Paragraph>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
              an email once our campaign is completed.</Paragraph>
              <Button small onClick={()=>finishIt(false)}>Got it!</Button>
          </Finish>
        </FinishedBoard> : ''
      }
      <Main isBacked={isBacked} backProject={backProject} finishIt={finishIt}/>
    </div>
  );
}

export default App;

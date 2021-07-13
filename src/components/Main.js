import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import BackedSection from './BackedSection';
import { MainFrame } from './MainStyles';

function Main(props) {
    const {finishIt,isBacked,backProject} = props;

    return (
        <MainFrame>
            {
                isBacked ? 
                <BackedSection 
                backProject={backProject} 
                finishIt={finishIt}/> : ''
            }
            <SectionOne backProject={backProject}/>
            <SectionTwo />
            <SectionThree backProject={backProject}/>
        </MainFrame>
    )
}

export default Main

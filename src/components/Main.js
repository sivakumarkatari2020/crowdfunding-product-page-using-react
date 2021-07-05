import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { MainFrame } from './MainStyles';

function Main() {
    return (
        <MainFrame>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </MainFrame>
    )
}

export default Main

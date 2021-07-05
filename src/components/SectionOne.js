import React from 'react';
import {Section} from './GlobalStyles/Section';
import {Logo,Paragraph,Wrapper,Bookmark} from './SectionOneStyles';
import { Button } from './GlobalStyles/Button';
import { H1 } from './GlobalStyles/heading';
import  bookmarkLogo from './images/icon-bookmark.svg';
import logo from './images/logo-mastercraft.svg';

function SectionOne() {
    return (
        <Section>
            <Logo><img src={logo} alt="floating logo"></img></Logo>
            <H1>Mastercraft Bamboo Monitor Riser</H1>
            <Paragraph>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</Paragraph>
            <Wrapper>
                <Button>Back this project</Button>
                <Bookmark>
                    <img src={bookmarkLogo} alt="Bookmark Logo"></img>
                    <Paragraph primary>Bookmark</Paragraph>
                    <Paragraph></Paragraph>
                </Bookmark>
            </Wrapper>
        </Section>
    )
}

export default SectionOne

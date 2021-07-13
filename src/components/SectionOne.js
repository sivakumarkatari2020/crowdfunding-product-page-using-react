import React,{useState} from 'react';
import {Section} from './GlobalStyles/Section';
import {Logo,Paragraph,Wrapper,Bookmark} from './SectionOneStyles';
import { Button } from './GlobalStyles/Button';
import { H1 } from './GlobalStyles/heading';
import  bookmarkLogo from './images/icon-bookmark.svg';
import bookmarkLogo2 from './images/icon-bookmark2.svg';
import logo from './images/logo-mastercraft.svg';

function SectionOne(props) {
    const [isBookmarked,makeBookmark] = useState(false);
    const {backProject} = props;

    return (
        <Section>
            <Logo><img src={logo} alt="floating logo"></img></Logo>
            <H1>Mastercraft Bamboo Monitor Riser</H1>
            <Paragraph>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</Paragraph>
            <Wrapper>
                <Button onClick={()=>{backProject(true)}}>Back this project</Button>
                <Wrapper onClick={()=>{makeBookmark(true)}} bookmark>
                    {
                    isBookmarked ?  
                    <Bookmark checked>
                        <img src={bookmarkLogo2} alt="Bookmark Logo"></img>
                        <Paragraph bookmarked>Bookmark</Paragraph>
                        <Paragraph></Paragraph>
                    </Bookmark> :
                    <Bookmark>
                        <img src={bookmarkLogo} alt="Bookmark Logo"></img>
                        <Paragraph bookmark>Bookmark</Paragraph>
                        <Paragraph></Paragraph>
                    </Bookmark>
                    }
                </Wrapper>
            </Wrapper>
        </Section>
    )
}

export default SectionOne

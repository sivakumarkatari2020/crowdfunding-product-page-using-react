import React from 'react';
import {Section} from './GlobalStyles/Section';
import { H1 } from './GlobalStyles/heading';
import {Button} from './GlobalStyles/Button'
import { Paragraph,Wrapper } from './SectionOneStyles';
import {AboutSection} from './SectionThreeStyles';

function SectionThree() {
    return (
        <Section>
            <AboutSection>
                <H1 primary>About this project</H1>
                <Paragraph wrap>
                    The  Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </Paragraph>
                <Paragraph wrap>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </Paragraph>
            </AboutSection>
            <InnerSections 
                type=""
                heading="Bamboo Stand"
                pledge="Pledge $25 or more"
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                left="101"
                buttontxt="Select Reward"
            />
            <InnerSections 
                type=""
                heading="Edition Stand"
                pledge="Pledge $75 or more"
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                left="64"
                buttontxt="Select Reward"
            />
            <InnerSections
                type="fadeOut"
                heading="Mahogany Special Edition"
                pledge="Pledge $25 or more"
                description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included."
                left="0"
                buttontxt="Out of Stock"
            />
        </Section>
    )
}

function InnerSections({type,heading,pledge,description,left,buttontxt}){
    if(type === 'fadeOut'){
        return(
            <Section fade>
                <Wrapper small>
                    <H1 primary>{heading}</H1>
                    <Paragraph green>{pledge}</Paragraph>
                </Wrapper>
                <Paragraph wrap>{description}</Paragraph>
                <Wrapper small>
                    <Wrapper ultraSmall>
                        <H1 big>{left}</H1>
                        <Paragraph>left</Paragraph>
                    </Wrapper>
                    <Button small>{buttontxt}</Button>
                </Wrapper>
            </Section>
        )
    }
    else{
        return(
            <Section small>
                <Wrapper small>
                    <H1 primary>{heading}</H1>
                    <Paragraph green>{pledge}</Paragraph>
                </Wrapper>
                <Paragraph wrap>{description}</Paragraph>
                <Wrapper small>
                    <Wrapper ultraSmall>
                        <H1 big>{left}</H1>
                        <Paragraph>left</Paragraph>
                    </Wrapper>
                    <Button small>{buttontxt}</Button>
                </Wrapper>
            </Section>
        )
    }
}

export default SectionThree

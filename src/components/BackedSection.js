import React,{useState} from 'react';
import {Section} from './GlobalStyles/Section';
import { Button,Input } from './GlobalStyles/Button';
import { H1 } from './GlobalStyles/heading';
import {Wrapper,Paragraph,Hr} from './SectionOneStyles';
import crossLogo from './images/icon-close-modal.svg';


function BackedSection(props) {
    const {backProject,finishIt} = props;
    const [bamboo,selectBamboo] = useState(false);
    const [blackEdition,selectblackEdition] = useState(false);

    function toggleBamboo(){
        if(bamboo === true){selectBamboo(false);}
        else{
            if(blackEdition === true){
                selectblackEdition(false);
                selectBamboo(true);
            }else{selectBamboo(true);}
        }
    }

    function toggleBlackEdition(){
        if(blackEdition === true){selectblackEdition(false);}
        else{
            if(bamboo === true){
                selectBamboo(false);
                selectblackEdition(true);
            }
            else{selectblackEdition(true);}
        }
    }

    return (
        <Section backed>
            <Section innerBacked>
                <Wrapper>
                    <H1>Back this project</H1>
                    <img src={crossLogo} alt="close" onClick={()=>{backProject(false)}}></img>
                </Wrapper>
                <Paragraph wrap>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Paragraph>
                <InnerSections 
                    type="unpledged" 
                    heading="Pledge with no reward" 
                    pledge="" 
                    left="" 
                    text="Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email."
                ></InnerSections>
                <BambooSection 
                    isSelected = {bamboo}
                    onClick={toggleBamboo} 
                    heading="Bamboo Stand" 
                    pledge="Pledge $25 or more" 
                    left="101" 
                    text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list."
                    finishIt={finishIt}
                    backProject={backProject}
                ></BambooSection>
                <BlackEditionSection 
                    isSelected={blackEdition} 
                    onClick={toggleBlackEdition} 
                    heading="Black Edition Stand" 
                    pledge="Pledge $75 or more" 
                    left="64" 
                    text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included."
                    finishIt={finishIt}
                    backProject={backProject}
                ></BlackEditionSection>
                <InnerSections 
                    type="fadeOut" 
                    heading="Mahogany Special Edition" 
                    pledge="Pledge $200 or more" 
                    left="0" 
                    text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included."
                ></InnerSections>
            </Section>
        </Section>
    )
}

function InnerSections({type,heading,pledge,left,text,isSelected,selectIt}){
    if(type === 'fadeOut'){
        return(
            <Wrapper backedFade>    
                <Wrapper row>
                    <Wrapper round></Wrapper>
                    <Wrapper>
                        <Wrapper rowColumn>
                            <H1 small>{heading}</H1>
                            <Paragraph green>{pledge}</Paragraph>
                        </Wrapper>
                        <Wrapper ultraSmall>
                            <H1>{left}</H1>
                            <Paragraph secondary>items</Paragraph>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Paragraph wrap>{text}</Paragraph>
            </Wrapper>
        )
    }
    else{
        return(
            <Wrapper backed>
                <Wrapper row>
                    <Wrapper round></Wrapper>
                    <Wrapper rowColumn>
                        <H1 small>{heading}</H1>
                    </Wrapper>
                    <Wrapper ultraSmall></Wrapper>
                </Wrapper>
                <Paragraph backedText wrap>{text}</Paragraph>
            </Wrapper>
        )
    }        
}

function BambooSection({heading,pledge,left,text,isSelected,onClick,finishIt,backProject}){
    return(
        isSelected ? 
        <Wrapper backedBorder>
            <Wrapper row onClick={onClick}>
                <Wrapper round>
                    <Button round></Button>
                </Wrapper>
                <Wrapper rowColumn>
                    <H1 small>{heading}</H1>
                    <Paragraph green>{pledge}</Paragraph>
                </Wrapper>
                <Wrapper ultraSmall>
                    <H1>{left}</H1>
                    <Paragraph>items</Paragraph>
                </Wrapper>
            </Wrapper>
            <Paragraph backedText wrap>{text}</Paragraph>
            <Hr />
            <Wrapper row>
                <Paragraph secondary>Enter your pledge</Paragraph>
                <Wrapper rowSmall>
                    <Input placeholder="$ 25"></Input>
                    <Button ultraSmall onClick={()=>{finishIt(true);backProject(false)}}>continue</Button>
                </Wrapper>
            </Wrapper>
        </Wrapper> :
        <Wrapper backed onClick={onClick}>
        <Wrapper row>
            <Wrapper round></Wrapper>
            <Wrapper rowColumn>
                <H1 small>{heading}</H1>
                <Paragraph green wrap>{pledge}</Paragraph>
            </Wrapper>
            <Wrapper ultraSmall>
                <H1>{left}</H1>
                <Paragraph>items</Paragraph>
            </Wrapper>
        </Wrapper>
        <Paragraph backedText wrap>{text}</Paragraph>
    </Wrapper> 
    );
}

function BlackEditionSection({heading,pledge,left,text,isSelected,onClick,finishIt,backProject}){
    return(
        isSelected ? 
        <Wrapper backedBorder>
            <Wrapper row onClick={onClick}>
                <Wrapper round>
                    <Button round></Button>
                </Wrapper>
                <Wrapper rowColumn>
                    <H1 small>{heading}</H1>
                    <Paragraph green>{pledge}</Paragraph>
                </Wrapper>
                <Wrapper ultraSmall>
                    <H1>{left}</H1>
                    <Paragraph>items</Paragraph>
                </Wrapper>
            </Wrapper>
            <Paragraph backedText wrap>{text}</Paragraph>
            <Hr />
            <Wrapper row>
                <Paragraph secondary>Enter your pledge</Paragraph>
                <Wrapper rowSmall>
                    <Input placeholder="$ 75"></Input>
                    <Button ultraSmall onClick={()=>{finishIt(true);backProject(false)}}>continue</Button>
                </Wrapper>
            </Wrapper>
        </Wrapper> :
        <Wrapper backed onClick={onClick}>
        <Wrapper row>
            <Wrapper round></Wrapper>
            <Wrapper rowColumn>
                <H1 small>{heading}</H1>
                <Paragraph green>{pledge}</Paragraph>
            </Wrapper>
            <Wrapper ultraSmall>
                <H1>{left}</H1>
                <Paragraph>items</Paragraph>
            </Wrapper>
        </Wrapper>
        <Paragraph backedText wrap>{text}</Paragraph>
    </Wrapper> 
    );
}

export default BackedSection

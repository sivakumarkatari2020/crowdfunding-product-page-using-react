import React from 'react';
import {Section} from './GlobalStyles/Section';
import { H1 } from './GlobalStyles/heading';
import {Paragraph} from './SectionOneStyles';
import {Analytics,Box,ProgressBar,Progress} from './SectionTwoStyles';

function SectionTwo() {
    return (
        <Section>
            <Analytics>
                <Box>
                    <H1>$89,914</H1>
                    <Paragraph secondary>of $1,00,000 backend</Paragraph>
                </Box>
                <Box borders>
                    <H1>5,007</H1>
                    <Paragraph secondary>total backers</Paragraph>
                </Box>
                <Box>
                    <H1>56</H1>
                    <Paragraph secondary>days left</Paragraph>
                </Box>
            </Analytics>
            <ProgressBar>
                <Progress></Progress>
            </ProgressBar>
        </Section>
    )
}

export default SectionTwo

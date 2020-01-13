import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { AccordionItem } from '.';

export default {
    title: 'Accordion Item',
    componentSubtitle: '',
    decorators: [withTests({ results, filesExt: '((\\.specs?)|(\\.test?))?(\\.tsx)?$' })],
};

export const accordionItem = () => (
    <AccordionItem isActive title="Hello World" text="This is some hello world text." />
);

accordionItem.story = {
    parameters: {
        jest: ['AccordionItem.test.tsx'],
    },
};
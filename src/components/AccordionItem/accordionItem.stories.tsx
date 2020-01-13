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
    <>
        <AccordionItem/>
    </>
);

accordionItem.story = {
    parameters: {
        jest: ['accordionItem.test.tsx'],
    },
};
import React from 'react';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { Accordion } from '.';

const items = [
    {
        title: 'Hello World',
        text: 'This is some hello world text.'
    },
    {
        title: 'Hello World',
        text: 'This is some hello world text.'
    },
    {
        title: 'Hello World',
        text: 'This is some hello world text.'
    },
    {
        title: 'Hello World',
        text: 'This is some hello world text.'
    }
];

export default {
    title: 'Accordion',
    componentSubtitle: '',
    decorators: [withTests({ results, filesExt: '((\\.specs?)|(\\.test?))?(\\.tsx)?$' })],
};

export const accordion = () => (
    <Accordion items={items} />
);

accordion.story = {
    parameters: {
        jest: ['Accordion.test.tsx'],
    },
};
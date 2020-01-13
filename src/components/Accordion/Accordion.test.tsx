import React from 'react';
import { render, cleanup } from '@testing-library/react';
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

afterEach(() => {
    cleanup();
});

describe('<Accordion />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Accordion items={items} />);

        expect(true).toEqual(true);
    });

    xit('should check how many items render when passing in the items prop', () => {
        // queryAllByTestId is the prop you want from the render method
        // then expect(queryAllByTestId(idOfyouAccordionItem).length).toEqual(items.length);
    });

    xit('should set an active accordion when an item is selected', () => {
        // container is the prop you want from the render method
        // const el = container.querySelector('[data-test-id="accordion-item"]')
        // get the fireEvent method from the react-testing-library
        // trigger a click event
        // then expect(container.querySelector('.c-accordion__link--selected')).toNotBeNull();
    });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { AccordionItem } from '.';

afterEach(() => {
    cleanup();
});

describe('<AccordionItem />', () => {
    it('should match snapshot', () => {
        const { container } = render(<AccordionItem title="Hello" text="World" />);

        expect(true).toEqual(true);
    });

    xit('should have a href that matches with the id of the region', () => {
        // so the href and aria-controls need to match the id of the region element.
        // render the accordion item
        // query for the link and query for the region
        // get the attributes
        // expect the strings to match
    });

    xit('should set an active c-accordion__link--selected class when isActive is set true', () => {
        // query for the link and check if the class exists
    });

    xit('should set an aria-expanded to true when isActive is set true', () => {
        // query for the link and check if aria-expanded exists
    });

    xit('should set an aria-expanded to false when isActive is set false', () => {
        // query the link and check the attribute
    });

    xit('should set an tabindex to 0 when isActive prop is true', () => {
        // query the region and check the attribute
    });

    xit('should set an tabindex to -1 when isActive prop is false', () => {
        // query the region and check the attribute
    });
});

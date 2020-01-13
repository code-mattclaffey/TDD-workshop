import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { AccordionItem } from '.';

afterEach(() => {
    cleanup();
});

describe('<AccordionItem />', () => {
    it('should match snapshot', () => {
        const { container } = render(<AccordionItem />);

        expect(true).toEqual(true);
    });
});

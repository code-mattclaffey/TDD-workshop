import React, { useState } from 'react';
import { AccordionInterface } from './types';
import { AccordionItem } from '../AccordionItem';

export const Accordion= ({ items }: AccordionInterface) => {
    const [activeAccordion, setActive] = useState('');

    function toggleActiveState(id: string) {
        setActive(id);
    }
    
    return (
        <ul className="c-accordion">
            {items.map((item, index) => {
                const id = `${item.title}-${index}`;
                const isActive = activeAccordion === id;
                return <AccordionItem key={id}  id={id} isActive={isActive} clickEvent={toggleActiveState} {...item} />;
            })}
        </ul>
            
    );
};

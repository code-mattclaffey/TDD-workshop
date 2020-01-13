import React from 'react';
import { AccordionItemInterface } from './types';
import classNames from 'classnames';

export const AccordionItem = ({ title, text, isActive = false, clickEvent = () => {}, id = '' }: AccordionItemInterface) => {
    const classes = classNames('c-accordion__link');

    function handleClick(event: any) {
        event.preventDefault();
        clickEvent(id);
    }
    
    return (
        <li className="c-accordion__item">
            <a className={classes} href="" onClick={handleClick}>{title}</a>
            <div className="c-accordion__region">
                <p>
                    {text}
                </p>
            </div>
        </li>
            
    );
};

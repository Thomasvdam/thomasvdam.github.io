import React from 'react';
import $ from './firstWordHighlight.module.scss';

type props = {
    children: string;
};

const FirstWordHighlight = ({ children }: props) => {
    const words = children.split(' ');
    const firstWord = words.shift();
    const remainder = words.join(' ');

    return (
        <>
            <span className={$.highlight}>{firstWord}</span> {remainder}
        </>)
    ;
};

export default FirstWordHighlight;

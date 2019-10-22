import React from 'react';
import $ from './infoBlock.module.scss';

type props = {
    className: string;
    title: string;
    children: React.ReactChild | React.ReactChild[];
};

const InfoBlock = ({ className = '', title, children }: props) => (
    <div className={`${className} ${$.container}`}>
        <h3 className={$.infoHeader}>{title}</h3>
        {children}
    </div>
);

export default InfoBlock;

import React from 'react';
import $ from './infoBlock.module.scss';

const InfoBlock = ({ className = '', title, children }) => (
    <div className={`${className} ${$.container}`}>
        <h3 className={$.infoHeader}>{title}</h3>
        {children}
    </div>
);

export default InfoBlock;

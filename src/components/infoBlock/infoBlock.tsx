import React from 'react';
import classNames from 'classnames';
import $ from './infoBlock.module.scss';

type props = {
    className: string;
    title: string;
    children: React.ReactChild | React.ReactChild[];
};

const InfoBlock = ({ className = '', title, children }: props) => {
    const infoBlockClassnames = classNames([
        className,
        $.container,
    ]);

    return (
        <div className={infoBlockClassnames}>
            <h3 className={$.infoHeader}>{title}</h3>
            {children}
        </div>
    );
};

export default InfoBlock;

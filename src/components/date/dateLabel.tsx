import React from 'react';
import $ from './dateLabel.module.scss';

type props = {
    date: string;
};

const DateLabel = ({ date }: props) => (<i className={$.date}>{date}</i>);

export default DateLabel;

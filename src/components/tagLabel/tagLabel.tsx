import React from 'react';
import { Link } from 'gatsby';
import $ from './tagLabel.module.scss';

type props = {
    tag: string;
};

const tagToClass = (tag: string): string => $[`tag__${tag}`];

const TagLabel = ({ tag }: props) => (
    <Link activeClassName={$.tag__active} className={`${$.tag} ${tagToClass(tag)}`} to={`/category/${tag}`}>
        <span className={$.text}>{tag}</span>
    </Link>
);

export default TagLabel;

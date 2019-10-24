import React from 'react';
import { Link } from 'gatsby';
import $ from './categoryLabel.module.scss';

type props = {
    category: string;
};

const categoryToClass = (category: string): string => $[`category__${category}`];

const CategoryLabel = ({ category }: props) => (
    <Link activeClassName={$.category__active} className={`${$.category} ${categoryToClass(category)}`} to={`/category/${category}`}>
        <span className={$.text}>{category}</span>
    </Link>
);

export default CategoryLabel;

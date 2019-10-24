import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import $ from './categoryLabel.module.scss';

type props = {
    category: string;
};

const categoryToClass = (category: string): string => $[`category__${category}`];

const CategoryLabel = ({ category }: props) => {
    const categoryClassnames = classNames([
        $.category,
        categoryToClass(category),
    ]);

    return (
        <Link activeClassName={$.category__active} className={categoryClassnames} to={`/category/${category}`}>
            <span className={$.text}>{category}</span>
        </Link>
    );
};

export default CategoryLabel;

import { Link } from 'gatsby';
import React from 'react';
import classNames from 'classnames';
import $ from './header.module.scss';

import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

type props = {
    back?: string;
    siteTitle: string;
};

const navigationLinkClassnames = classNames($.link, $.navigation__item);

const isPostsListingActive = ({ location }) => {
    const isPostSubnav = location.pathname.startsWith('/category') || location.pathname.startsWith('/post');
    const className = classNames([
        navigationLinkClassnames,
        isPostSubnav && $.link__active,
    ]);

    return { className };
};

const Header = ({ back = '', siteTitle }: props) => {
    return (
        <header className={$.header}>
            <div className={$.container}>
                <h1 className={$.title}>
                    <Link className={$.link} to="/">
                        <FirstWordHighlight>{siteTitle}</FirstWordHighlight>
                    </Link>
                </h1>
                <nav className={$.navigationContainer}>
                    <span>
                        {back && <Link className={navigationLinkClassnames} to={back}>&lt; <FirstWordHighlight>cd</FirstWordHighlight> ..</Link>}
                    </span>
                    <span>
                        <Link className={navigationLinkClassnames} activeClassName={$.link__active} to="/">Home</Link>
                        <Link getProps={isPostsListingActive} to="/category/all">Posts</Link>
                        <Link className={navigationLinkClassnames} activeClassName={$.link__active} to="/about">About</Link>
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;

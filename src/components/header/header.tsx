import { Link } from 'gatsby';
import React from 'react';
import $ from './header.module.scss';

import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

type props = {
    siteTitle: string;
};

const Header = ({ siteTitle }: props) => {
    return (
        <header className={$.header}>
            <div className={$.container}>
                <h1 className={$.title}>
                    <Link className={$.link} to="/">
                        <FirstWordHighlight>{siteTitle}</FirstWordHighlight>
                    </Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;

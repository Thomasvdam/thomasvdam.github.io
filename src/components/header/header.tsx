import { Link } from 'gatsby';
import React from 'react';
import $ from './header.module.scss';

console.log('[DEBUG]: $ ::: ', $);

const Header = ({ siteTitle }) => (
  <header className={$.header}>
    <div className={$.container}>
      <h1 className={$.title}>
        <Link className={$.link} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;

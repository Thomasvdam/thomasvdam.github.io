import { Link } from 'gatsby';
import React from 'react';
import $ from './header.module.scss';

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
type props = {
    siteTitle: string;
};

const Header = ({ siteTitle }: props) => {

export default Header;

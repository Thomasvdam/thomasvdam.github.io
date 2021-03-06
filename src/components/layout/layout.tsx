/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import $ from './layout.module.scss';

type props = {
    back?: string;
    children: React.ReactChild | React.ReactChild[];
};

const Layout = ({ back, children }: props) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
    <>
      <Header back={back} siteTitle={data.site.siteMetadata.title} />
      <div className={$.container}>
        <main>{children}</main>
        <footer className={$.footer}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
    );
};

export default Layout;

import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/components/layout/layout';
import Image from '~/components/image';
import SEO from '~/components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Under construction</h2>
    <p>Eventually this will contain navigation and the most recent items. For now it's just a lonely link at the bottom.</p>
    <Link to="/about">About</Link>
  </Layout>
);

export default IndexPage;

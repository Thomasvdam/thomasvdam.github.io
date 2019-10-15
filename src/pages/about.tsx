import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/components/layout/layout';
import Image from '~/components/image';
import SEO from '~/components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="About me" />
    <h2>About me</h2>
    <p></p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image filename="gatsby-astronaut.png" alt="Astronaut"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

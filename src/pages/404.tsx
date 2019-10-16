import React from 'react';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Not found</h2>
    <p>We did find this 404 page though so at least that's something.</p>
  </Layout>
);

export default NotFoundPage;

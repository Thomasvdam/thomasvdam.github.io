import React from 'react';
import { graphql } from 'gatsby';
import $ from './blogTemplate.module.scss';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';

const Template = ({ data, pageContext }) => {
    const { markdownRemark } = data;
    const { frontmatter: { title, date }, html } = markdownRemark;

    return (
        <Layout>
            <SEO title={title} />
            <div className={$.titleContainer}>
                <h2 className={$.title}>{title}</h2>
                <i className={$.date}>{date}</i>
            </div>

            <div dangerouslySetInnerHTML={{ __html: html }}/>
        </Layout>
    );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;

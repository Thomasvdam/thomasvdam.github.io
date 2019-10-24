import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import $ from './index.module.scss';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';
import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';
import PostListing from '~/components/postListing/postListing';

const LandingPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 5
            ) {
                edges {
                node {
                    fields {
                    slug
                    }
                    frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    categories
                    subject
                    }
                }
                }
            }
        }`);

    const { allMarkdownRemark: { edges } } = data;

    return (
        <Layout>
            <SEO title="Home" />
            <h2><FirstWordHighlight>What is this?</FirstWordHighlight></h2>
            <p>
                This is as much a platform for helping me structure my thoughts as it is an exercise in getting to know
                Gatsby and the development workflow. It may not look the part and the UX can also use some TLC, but it
                has the bare necessities. I'll try to improve it as I go along and learn new things.
            </p>
            <h2><FirstWordHighlight>Latest posts</FirstWordHighlight></h2>
            <PostListing edges={edges} from="/"></PostListing>
            <div className={$.linkContainer}>
                <Link className={$.link} to="/category/all">All posts -&gt;</Link>
            </div>
        </Layout>
    );
};

export default LandingPage;

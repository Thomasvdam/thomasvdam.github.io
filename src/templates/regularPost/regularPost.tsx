import React from 'react';
import { graphql } from 'gatsby';
import $ from './regularPost.module.scss';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';
import DateLabel from '~/components/date/dateLabel';
import TagLabel from '~/components/tagLabel/tagLabel';
import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

const RegularPostTemplate = ({ data, pageContext, location }) => {
    let from = '/category/all';

    if (location && location.state && location.state.from) {
        from = location.state.from;
    }

    const { markdownRemark } = data;
    const { frontmatter: { title, date, tags }, html } = markdownRemark;

    return (
        <Layout back={from}>
            <SEO title={title} />
            <div className={$.titleContainer}>
                <h2 className={$.title}><FirstWordHighlight>{title}</FirstWordHighlight></h2>
                <DateLabel date={date}/>
            </div>

            <div className={$.tagContainer}>
                {tags.map(tag => (<TagLabel key={tag} tag={tag}/>))}
            </div>

            <div dangerouslySetInnerHTML={{ __html: html }}/>
        </Layout>
    );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;

export default RegularPostTemplate;

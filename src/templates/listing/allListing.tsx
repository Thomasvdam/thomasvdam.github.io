import { graphql } from 'gatsby';

import ListingTemplate from './listing';

export default ListingTemplate;

export const pageQuery = graphql`
query allPostsQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          subject
        }
      }
    }
  }
}
`;

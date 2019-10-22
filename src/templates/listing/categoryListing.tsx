import { graphql } from 'gatsby';

import ListingTemplate from './listing';

export default ListingTemplate;

export const pageQuery = graphql`
query categoryPostsQuery($skip: Int!, $limit: Int!, $category: String!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
    filter: { frontmatter: { tags: { in: [$category] } } }
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

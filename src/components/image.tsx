import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

type props = {
    filename: string;
    alt: string;
    title?: string;
    className?: string;
};

const Image = ({ filename, alt, title = '', className = '' }: props) => {
    const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

    const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(filename);
    });
    if (!image) { return null; }

    const { fluid } = image.node.childImageSharp;

    return (
        <Img className={className} title={title} alt={alt} fluid={fluid}/>
    );
};

export default Image;

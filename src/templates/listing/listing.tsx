import React from 'react';
import { Link } from 'gatsby';
import $ from './listing.module.scss';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';
import Button from '~/components/button/button';
import PostListing from '~/components/postListing/postListing';

type props = {
    data: markdownData;
    pageContext: {
        category: string;
        currentPage: number;
        totalPages: number;
        previousPage: string | null;
        nextPage: string | null;
    },
    path: string;
    linkTo?: string;
};

const ListingTemplate = ({ data, pageContext, path, linkTo }: props) => {
    const { category: categoryRaw, currentPage, totalPages, previousPage, nextPage } = pageContext;
    const category = categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1);
    const { allMarkdownRemark: { edges } } = data;

    return (
        <Layout back={linkTo}>
            <SEO title={category}/>
            <h2>{category} posts</h2>
            <PostListing edges={edges} from={path}></PostListing>
            <div className={$.footer}>
                {previousPage ?
                    <Link className={$.link} to={previousPage}><Button>←</Button></Link>
                    : <span/> }
                <span>
                    {currentPage} / {totalPages}
                </span>
                {nextPage ?
                    <Link className={$.link} to={nextPage}><Button>→</Button></Link>
                    : <span/>}
            </div>
        </Layout>
    );
};

export default ListingTemplate;

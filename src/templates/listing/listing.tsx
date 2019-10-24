import React from 'react';
import { Link } from 'gatsby';
import $ from './listing.module.scss';

import Layout from '~/components/layout/layout';
import SEO from '~/components/seo';
import Button from '~/components/button/button';
import PostPreview from '~/components/postPreview/postPreview';

type props = {
    data: {
        allMarkdownRemark: {
            edges: {
                node: {
                    fields: {
                        slug: string;
                    }
                    frontmatter: {
                        date: string;
                        categories: string[],
                        title: string,
                        subject: string,
                    },
                },
            }[];
        }
    };
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
            <div className={$.postsContainer}>
                {edges.map((edge) => {
                    const { node: { fields: { slug }, frontmatter: { date, categories, title, subject } } } = edge;

                    return <PostPreview
                        className={$.listingPreview}
                        key={slug}
                        date={date}
                        from={path}
                        categories={categories}
                        title={title}
                        slug={slug}
                        subject={subject}
                    />;
                })}
            </div>
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

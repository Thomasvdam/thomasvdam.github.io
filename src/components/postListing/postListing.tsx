import React from 'react';
import $ from './postListing.module.scss';

import PostPreview from '~/components/postPreview/postPreview';

type props = {
    className?: string;
    edges: markdownEdge[];
    from: string;
};

const PostListing = ({ className = '', edges, from }: props) => {
    return (
        <div className={className}>
            {edges.map((edge) => {
                const { node: { fields: { slug }, frontmatter: { date, categories, title, subject } } } = edge;

                return <PostPreview
                    className={$.listingPreview}
                    key={slug}
                    date={date}
                    from={from}
                    categories={categories}
                    title={title}
                    slug={slug}
                    subject={subject}
                />;
            })}
        </div>
    );
};

export default PostListing;

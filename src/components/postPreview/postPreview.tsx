import React from 'react';
import { Link } from 'gatsby';
import $ from './postPreview.module.scss';

import DateLabel from '~/components/date/dateLabel';
import CategoryLabel from '~/components/categoryLabel/categoryLabel';
import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

type props = {
    className?: string;
    date: string;
    from: string;
    slug: string;
    subject: string,
    categories?: string[],
    title: string,
};

const PostPreview = ({ className = '', date, slug, subject, categories = [], title, from }: props) => (
    <div className={`${$.container} ${className}`}>
        <div>
            <Link className={$.previewLink} to={`/${slug}`} state={{ from, }}>
                <h3 className={$.title}><FirstWordHighlight>{title}</FirstWordHighlight></h3>
            </Link>
            <DateLabel date={date}/>
            <p className={$.subject}>
                {subject}
            </p>
        </div>
        <div>
            {categories.map(category => (<CategoryLabel key={category} category={category}/>))}
        </div>
    </div>
);

export default PostPreview;

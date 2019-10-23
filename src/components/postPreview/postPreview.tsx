import React from 'react';
import { Link } from 'gatsby';
import $ from './postPreview.module.scss';

import DateLabel from '~/components/date/dateLabel';
import TagLabel from '~/components/tagLabel/tagLabel';
import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

type props = {
    className?: string;
    date: string;
    from: string;
    slug: string;
    subject: string,
    tags?: string[],
    title: string,
};

const PostPreview = ({ className = '', date, slug, subject, tags = [], title, from }: props) => (
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
            {tags.map(tag => (<TagLabel key={tag} tag={tag}/>))}
        </div>
    </div>
);

export default PostPreview;

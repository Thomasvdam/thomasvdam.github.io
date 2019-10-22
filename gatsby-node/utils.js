const extractTags = (allMarkdownPages) => {
    return allMarkdownPages.data.allMarkdownRemark.edges.reduce((acc, { node }) => {
        const { fields: { slug }, frontmatter: { tags } } = node;
        tags.forEach(tag => {
            if (Array.isArray(acc[tag])) {
                acc[tag].push(slug);
            } else {
                acc[tag] = [slug];
            }
        });

        return acc;
    }, {});
}

const listingPathFromIndexForCategory = (category) => {
    const listingPathFromIndex = i => i === 0 ? `/category/${category}` : `/category/${category}/${i + 1}`;
    return listingPathFromIndex;
}

const surroundingPages = (index, totalPages) => {
    const pages = {};

    if (index === 0) {
        pages.previousPage = null;
    } else {
        pages.previousPage = listingPathFromIndex(index - 1);
    }

    if ((index + 1) === totalPages) {
        pages.nextPage = null;
    } else {
        pages.nextPage = listingPathFromIndex(index + 1);
    }

    return pages;
}


module.exports = {
    extractTags,
    listingPathFromIndexForCategory,
    surroundingPages,
};

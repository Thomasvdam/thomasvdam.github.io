const extractCategories = (allMarkdownPages) => {
    return allMarkdownPages.data.allMarkdownRemark.edges.reduce((acc, { node }) => {
        const { fields: { slug }, frontmatter: { categories } } = node;
        categories.forEach(category => {
            if (Array.isArray(acc[category])) {
                acc[category].push(slug);
            } else {
                acc[category] = [slug];
            }
        });

        return acc;
    }, {});
}

const listingPathFromIndexForCategory = (category) => {
    const listingPathFromIndex = i => i === 0 ? `/category/${category}` : `/category/${category}/${i + 1}`;
    return listingPathFromIndex;
}

const surroundingPages = (index, totalPages, listingPathFromIndex) => {
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
    extractCategories,
    listingPathFromIndexForCategory,
    surroundingPages,
};

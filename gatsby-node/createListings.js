const path = require('path');

const { CATEGORY_ALL, POSTS_PER_LISTING } = require('./constants');
const {
    extractCategories,
    listingPathFromIndexForCategory,
    surroundingPages,
} = require('./utils');

const createAllListing = (createPage, allMarkdownPages) => {
    const allListingTemplate = path.resolve("./src/templates/listing/allListing.tsx");
    const allPosts = allMarkdownPages.data.allMarkdownRemark.edges;
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_LISTING);
    const allListingPathFromIndex = listingPathFromIndexForCategory(CATEGORY_ALL);

    Array.from({ length: totalPages }).forEach((_, i) => {
        createPage({
            path: allListingPathFromIndex(i),
            component: allListingTemplate,
            context: {
                category: CATEGORY_ALL,
                limit: POSTS_PER_LISTING,
                skip: i * POSTS_PER_LISTING,
                totalPages,
                currentPage: i + 1,
                ...surroundingPages(i, totalPages),
            },
        });
    });
};

const createCategoryListings = (createPage, allMarkdownPages) => {
    const categoryListingTemplate = path.resolve("./src/templates/listing/categoryListing.tsx");
    const taggedPages = extractCategories(allMarkdownPages);

    Object.keys(taggedPages).forEach(category => {
        const categoryPosts = taggedPages[category];
        const categoryPages = Math.ceil(categoryPosts.length / POSTS_PER_LISTING);
        const categoryListingPathFromIndex = listingPathFromIndexForCategory(category);

        categoryPosts.forEach((_, i) => {
            createPage({
                path: categoryListingPathFromIndex(i),
                component: categoryListingTemplate,
                context: {
                    category,
                    limit: POSTS_PER_LISTING,
                    skip: i * POSTS_PER_LISTING,
                    totalPages: categoryPages,
                    currentPage: i + 1,
                    ...surroundingPages(i, categoryPages),
                }
            })
        });
    });
}

module.exports = {
    createAllListing,
    createCategoryListings,
};

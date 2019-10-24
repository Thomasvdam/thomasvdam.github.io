declare module '*.scss' {
    interface ClassNames {
        [prop: string]: string;
    }
    const classNames: ClassNames;
    export default classNames;
}

type markdownEdge = {
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
};

type markdownData = {
    allMarkdownRemark: {
        edges: markdownEdge[];
    }
};

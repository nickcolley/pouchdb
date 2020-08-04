module.exports = eleventyConfig => {
    // Allow assets e.g. images, css to be accessed
    eleventyConfig.addPassthroughCopy('static')

    eleventyConfig.addLiquidTag('highlight', () => {
        return {
            render: () => ''
        };
    });
    eleventyConfig.addLiquidTag('endhighlight', () => {
        return {
            render: () => ''
        };
    });
    eleventyConfig.addLiquidTag('markdown', () => {
        return {
            render: () => ''
        };
    });
    eleventyConfig.addLiquidTag('endmarkdown', () => {
        return {
            render: () => ''
        };
    });

    return {
        passthroughFileCopy: true
    }
};
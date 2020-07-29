module.exports = function(eleventyConfig) {
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

    return {
        passthroughFileCopy: true
    }
};
module.exports = function(eleventyConfig) {
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
};
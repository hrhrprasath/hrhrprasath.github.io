const eleventyEjsPlugin = require("@11ty/eleventy-plugin-ejs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyEjsPlugin);
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "ejs", "html"],
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs"
  };
};

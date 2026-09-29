module.exports = function(eleventyConfig) {
  // Pass through raw content or images if needed
  eleventyConfig.addPassthroughCopy("src/media");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("mapcollection", collection => {
    return new Map([
      ["three", "String number three"],
      ["four", "String number four"]
    ]);
  });

  return {};
};

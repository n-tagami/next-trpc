const withTM = require("next-transpile-modules")(["ui", "shared-types"]);

module.exports = withTM({
  reactStrictMode: true,
});

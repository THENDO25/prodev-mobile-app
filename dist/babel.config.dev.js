"use strict";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {
      jsxImportSource: "nativewind"
    }], "nativewind/babel"]
  };
};
//# sourceMappingURL=babel.config.dev.js.map

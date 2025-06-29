// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const baseConfig = getDefaultConfig(__dirname);

const { resolver } = baseConfig;

baseConfig.resolver = {
  ...resolver,
  assetExts: [
    ...resolver.assetExts.filter((ext) => ext !== "svg"),
    "glb",
    "gltf",
    "png",
    "jpg",
    "ttf",
  ],
  sourceExts: [
    ...resolver.sourceExts,
    "svg",
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
    "cjs",
    "mjs",
  ],
};

module.exports = wrapWithReanimatedMetroConfig(baseConfig);

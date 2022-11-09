/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const defaultSourceExts =
  require("metro-config/src/defaults/defaults").sourceExts;
module.exports = {
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ["js", "json", "ts", "tsx", "cjs", "obj"],
    assetExts: ["db", "mp3", "ttf", "obj", "png", "jpg", "otf", "mtl"],
  },
};

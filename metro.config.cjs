const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('svg');
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'react-native-svg') {
        return context.resolveRequest(context, 'react-native-svg/lib/commonjs/index.js', platform);
    }
    return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './app/globals.css' });

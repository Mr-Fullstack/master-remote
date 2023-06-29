module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: 
  [
    ['babel-plugin-module-resolver',{
        "root": [
          "./src"
        ],
        "alias": {
          "dashboard": './src/dashboard',
          "assets": "./src/assets",
          "routes":"./src/routes",
          "helpers":"./src/helpers"
        }
    }],
    [
      'react-native-reanimated/plugin',
      { relativeSourceLocation: true, }
    ],
  ],
};

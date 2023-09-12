// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-navigation/.*|@unimodules/.*|@react-native-community/.*|@react-native-picker/.*))',
  ],
  moduleNameMapper: {
    '^@react-native-firebase/app$':
      '<rootDir>/node_modules/react-native-firebase/app/index.js',
  },
};

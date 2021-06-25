module.exports = {
  transform: {
    '^.+\\.js?$': require.resolve('babel-jest'),
    '^.+\\.ts?$': 'ts-jest',
  },
};

module.exports = api => {
  return {
    presets: [['@babel/preset-env', { targets: { browsers: '>1%' } }]],
    plugins: api.env('test') ? [] : [['add-module-exports']],
  };
};

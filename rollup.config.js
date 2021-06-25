import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  plugins: [babel({ babelHelpers: 'bundled' })],
  output: [
    {
      file: 'build/bundle.min.js',
      format: 'iife',
      name: 'nearest',
      plugins: [terser()],
    },
  ],
};

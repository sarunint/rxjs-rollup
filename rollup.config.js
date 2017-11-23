import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import uglify from 'rollup-plugin-uglify-es';


const rxjsPathMapping = require('rxjs/_esm2015/path-mapping')();

export default {
  input: 'index.js',
  output: {
    format: 'iife',
    file: './dist/bundle.js'
  },
  plugins: [
    alias(
      rxjsPathMapping
    ),
    resolve(),
    commonjs(),
    // uglify()
  ]
};

import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import progress from 'rollup-plugin-progress';
import builtins from 'rollup-plugin-node-builtins';

const pkg = require('./package.json');

const production = process.env.BUILD === 'production';
const file = production ? 'index.js' : 'index.debug.js';
const banner = `/*!
 * Name: ${pkg.name}
 * Description: ${pkg.description}
 * Author: ${pkg.author}
 * Version: v${pkg.version}
 */
`;

const config = {
  input: 'src/index.js',
  output: {
    file,
    format: 'umd',
    name: 'Tiny.BitmapText',
    banner,
  },
  plugins: [
    resolve(),
    commonjs(),
    builtins(),
    babel({
      babelrc: false,
      include: ['./src/**/*.js'],
      presets: [
        [
          'env', {
            modules: false,
          },
        ],
        'stage-0',
      ],
      plugins: [
        'external-helpers',
      ],
      comments: false,
    }),
    cleanup(),
    progress(),
    (production && uglify({
      output: {
        comments: /^!/,
      },
    })),
  ],
};

if (process.argv.includes('--watch')) {
  config.plugins.push(serve({
    contentBase: '',
    host: 'localhost',
    port: 8080,
  }));
}

export default config;

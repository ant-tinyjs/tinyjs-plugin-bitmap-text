/**
 * @file        Create a line or multiple lines of text using bitmap font
 * @author      fangjun.yfj
 */

/**
 * Tiny.js
 * @external Tiny
 * @see {@link http://tinyjs.net/}
 */

import bitmapFontParser from './bitmapFontParser';
import BitmapText from './BitmapText';

const loader = Tiny.loaders.Loader;
loader.addTinyMiddleware(bitmapFontParser);

// Tiny1 覆盖 Tiny.Loader
// Tiny2 中 Tiny.Loader 指向了 Tiny.loaders.Loader，不要覆盖
if (Tiny.Loader && Tiny.Loader !== loader) {
  Tiny.Loader = loader ? new loader() : null; // eslint-disable-line
}

export default BitmapText;

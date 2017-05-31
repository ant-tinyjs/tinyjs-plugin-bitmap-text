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

module.exports = BitmapText;

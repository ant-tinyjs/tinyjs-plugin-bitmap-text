# tinyjs-plugin-bitmap-text

> 位图文字

## 查看demo

`demo/index.html`

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-bitmap-text --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-bitmap-text/0.0.3/index.js
  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-bitmap-text/0.0.3/index.debug.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以使用`CDN`或下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="https://a.alipayobjects.com/g/tiny/tiny/1.1.4/tiny.js"></script>
```
``` js
var BitmapText = require('tinyjs-plugin-bitmap-text');
// 或者
// import BitmapText from 'tinyjs-plugin-bitmap-text';
var loader = new Tiny.loaders.Loader();
loader.add([{
  name: 's_font_fnt',
  url: 'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/bitmaptext/FontEng.xml',
}]).load(function () {
  var fontText = new BitmapText('fnt fonts are supported!\ncreated by \n"Tiny.BitmapText()\n1234567890"', {
    font: '32px Impact',
    tint: '0xff6600',
  });
  // container.addChild(fontText);
});
```

## 依赖
- `Tiny.js`: [Link](http://tinyjs.net/#/docs/api)

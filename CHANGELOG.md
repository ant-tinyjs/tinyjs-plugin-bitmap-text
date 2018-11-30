## 0.1.0

`2018-11-30`
- 此版本需要基于 TinyJS v1.2.0
- 构建方式从 webpack@1.* 换成 rollup

### Fixed
- `maxWidth` 属性在变更时会触发 `dirty`
- 修复了设置 loader 的 `baseUrl` 后造成 `bitmapFontParser` 在解析时重复 `baseUrl` 的问题
- 增加了 `letterSpacing` 属性

### Added
- 单个 bitmap 字体可以支持多个纹理

## 0.0.4

`2017-12-12`


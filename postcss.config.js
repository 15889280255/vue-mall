module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,//指定px转化后视窗单位的小数点位数
      viewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar',],//指定不转化的css class
      minPixelValue: 1, //小于1px将不进行转化
      mediaQuery: false,//允许媒体查询中转换px
      exclude:[/TabBar/]
    }
  }
}
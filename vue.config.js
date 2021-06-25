const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  runtimeCompiler: true,
  parallel: false,
  
  publicPath: process.env.NODE_ENV === 'production' ? '/gui/struts2-vue-app/dist/' : '/static/',

  productionSourceMap: process.env.NODE_ENV !== 'production',

  chainWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.optimization
        .splitChunks({
          maxSize: 200000
        });
      config.optimization.minimizer = [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
    }
    config.module.rules.delete('images');
    config.module.rules.delete('svg');
    config.plugin('html')
      .tap((args) => {
        args[0].inject = false;
        args[0].template = 'footer.htmlx';
        args[0].filename = 'vueapp_footer.jsp';
        return args;
      });

    config.plugin('html2').use('html-webpack-plugin', [{
      inject: false,
      template: 'header.htmlx',
      filename: 'vueapp_header.jsp',
      title: 'header',
    }]);

    config.module.rule('html1')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();

    config.module.rule('imageloaders')
      .test(/\.(png|jpe?g|gif|svg|cur|ico)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .end();


    config.module.rule('fontloaders')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .end();

  },
};

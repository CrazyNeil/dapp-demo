module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                // 页面title
                args[0].title = 'DEMO';
                return args;
            });
    },
}

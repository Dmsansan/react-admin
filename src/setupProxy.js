const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/produce-api',
        {
            target: 'http://localhost:8067/',
            pathRewrite: {
                '^/produce-api': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};

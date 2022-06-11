const { createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function(app) {
    app.use("/api1",createProxyMiddleware({
        target:'http://127.0.0.1:5000', //配置转发目标地址
        changeOrigin:true, //控制服务器接收到的请求头中host字段的值
        pathRewrite:{
            "^/api1":""     //去除请求前缀址(必须配置)
        }
    }))}
    
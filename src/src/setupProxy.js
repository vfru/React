const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use("/api",createProxyMiddleware({
        target:'http://127.0.0.1:5000',
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
     app.use("/api1",createProxyMiddleware({
        target:'http://127.0.0.1:5002',
        changeOrigin:true,
        pathRewrite:{
            "^/api1":""
        }
    }))
  }
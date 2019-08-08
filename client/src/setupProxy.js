const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(["/api", "/api/users/auth", "/api/users/register", "/api/users/login"], { target: "http://localhost:3002/" || process.env.PORT })
  );
};
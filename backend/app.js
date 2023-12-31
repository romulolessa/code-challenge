var createError = require("http-errors");
var express = require("express");
const cors = require('cors')
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var apiRouter = require("./routes/api");
var indexRouter = require("./routes/index");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.toString() });
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
  var serverUrl = `http://localhost:${port}`;

  console.log(`Servidor BACKEND rodando em: ${serverUrl}`);
});

module.exports = app;

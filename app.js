const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const { readFile } = require("node:fs");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/big-file', function (req, res, next) {
    readFile(path.join('data', 'some-file.json'), (err, data) => {
        if (err) throw err;

        setTimeout(()=>{
            res.json(data.toString());
        },3000);
    });
});

app.get('/another-file', function (req, res, next) {
    readFile(path.join('data', 'electronics.json'), (err, data) => {
        if (err) throw err;

        setTimeout(()=>{
            res.json(data.toString());
        },4000);
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

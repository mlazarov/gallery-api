


var express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override');


var app = express();

app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: 'snapsecret', saveUninitialized: true, resave: true}));
app.use(methodOverride('X-HTTP-Method-Override'));


var port = 8001
app.listen(port);
console.log("App started listening on " + port + "!");

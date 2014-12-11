


var express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    multer  = require('multer');


var app = express();

app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: 'snapsecret', saveUninitialized: true, resave: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(multer({
        dest: './public/uploads'
    }));

// Routes
require('./modules/router.js')(app);


var port = 8001
app.listen(port);
console.log("App started listening on " + port + "!");

require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const ejs =require('ejs');
const Nexmo =require('nexmo');
const socketio =require('socket.io');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
var insrancecontroller = require('./controllers/insurance.controller');
var policecontroller = require('./controllers/police.controller');
var drivercontroller = require('./controllers/driver.controller');
var messagecontroller = require('./controllers/message.controller');
var finecontroller = require('./controllers/fine.controller');
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/insurance', insrancecontroller);
app.use('/police',policecontroller);
app.use('/driver',drivercontroller);
app.use('/insurance/user',insrancecontroller);
app.use('/driver/user',drivercontroller);
app.use('/police/user',policecontroller);
app.use('/message',messagecontroller);
app.use('/fine',finecontroller);
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

// engine setup
//app.set('view engine','html');
//app.engine('html',ejs.renderFile);

//public folder setup
//app.use(express.static(__dirname+'/public'));

//body parser middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extend:true}));

//Define port
//const port =3000;

//Start server
//const server =app.listen(port, () => console.);
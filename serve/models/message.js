const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var Message = mongoose.model('Message',{
driverId:{type:String}, 
mobile:{type:Number}

});

module.exports = { Message };
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var SpotFine = mongoose.model('SpotFine',{
fine_id:{type:String}, 
name :{type:String},
amount:{type:String},
description:{type:String},


});

module.exports = { SpotFine };

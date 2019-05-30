const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const Driver = mongoose.model('Driver');
//const Police = mongoose.model('Police');
//const SpotFine = mongoose.model('SpotFine');
var Driver=require('mongoose').model('Driver').schema
var Police=require('mongoose').model('Police').schema
//var SpotFine=require('mongoose').model('SpotFine',SpotFine).schema
//var SpotFine = mongoose.model('SpotFine',SpotFine);

var fineTicket = mongoose.model('FineTicket',{
vehicleNumber:{type:String}, 
fine :[],
driver:[],
police:[],
timeStamp:{type:Date, default: Date.now},
paid:{type:Boolean,default:false}


});

module.exports = { fineTicket };
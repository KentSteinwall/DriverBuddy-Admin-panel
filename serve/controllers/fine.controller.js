const mongoose = require('mongoose');
//const User = mongoose.model('Insurance');
const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;
var { Driver } =require('../models/driver');
var { Insurance } =require('../models/insurance');
var { Police } =require('../models/police');
var { Fine }=require('../models/fine');
var { SpotFine }=require('../models/spotfine');

router.get('/',(req, res) => {
    Fine.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Driver :' + JSON.stringify(err, undefined, 2));}
    });

});
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id: ${req.params.id}');

      Fine.findById(req.params.id, (err ,doc) => {
        if(!err) {res.send(doc); }
        else {console.log('Error in Retriving Driver :' + JSON.stringify(err, undefined, 2));}

      });
});

router.delete('/:id', (req ,res) => {
    if(!ObjectId.isValid(req.params.id))
       return res.status(400).send('No record with given id : ${req.params.id}');   
       
    Fine.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Police Officer Delete :' + JSON.stringify(err, undefined, 2)); }

    });
});

module.exports = router;
const mongoose = require('mongoose');
//const User = mongoose.model('Insurance');
const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;
var { Message } =require('../models/message');

router.get('/',(req, res) => {
    Message.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Police Officer :' + JSON.stringify(err, undefined, 2));}
    });

});
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id: ${req.params.id}');

      Message.findById(req.params.id, (err ,doc) => {
        if(!err) {res.send(doc); }
        else {console.log('Error in Retriving Police officer :' + JSON.stringify(err, undefined, 2));}

      });
});
router.post('/', (req, res) => {
   
    var po =new Message({
        driverId:req.body.driverId, 
        mobile:req.body.mobile,
       
        


    });
    po.save((err, doc)=>{
       if(!err){res.send(doc);
        const accountSid = 'ACe749e98354fe7a37b7582dcf5f9ea790';
            const authToken = '2869b92854cefb0f95e0fc73399ef927';
            const client = require('twilio')(accountSid, authToken);
            
            client.messages
                  .create({from: '+18633757748', body: req.body.driverId, to: '+94774739464'})
                  .then(message => console.log(message.sid))
                  .done();
       
    }
       else if(err.code == 11000)
          {res.status(422).send(['Duplicate NIC found.']); }
          else {return next(err);}
    });
});
module.exports = router;
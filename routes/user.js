const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    let user = new User(req.body)
    user.save()
    .then(user => {
        res.status(201).json({'message': 'SUCCESS', 'id': user._id})
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    }) 
});

router.post('/login',async (req, res, next) => {
    const query =  User.findOne({ mail: req.body.mail })
    const doc = await query.exec();
    // console.log(doc);

    if(!doc){
        res.status(404).json({'message': 'USER_NOT_EXIST' })
    }else if(doc.password===req.body.password){
        res.status(201).json({'message': 'LOGIN_SUCCESSFUL' })
    }else{
        res.status(401).json({'message': 'INVALID_PASSWORD' })
    }
});

module.exports = router;
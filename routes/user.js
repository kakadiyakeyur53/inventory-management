const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res, next) => {
    let user = new User(req.body)
    user.save()
    .then(user => {
        res.status(201).json({'message': 'User Sign up successfull.', 'id': user._id})
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    }) 
});

module.exports = router;
const express = require('express');
const router = express.Router();
const User =  require('../models/user');

router.post("/register", function (req,res) {
//    console.log(req.body);
    const newUser = new User ({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.saveUser(newUser, function (err, user){
            if(err){

                res.json({state: false, msg: 'data not inserted'});
            }
            if(user){
                res.json({state: true, msg: 'data inserted'});
            }

    })

});

router.post("/login", function(req,res){
    const email = req.body.email;
    const password = req.body.password;
});

module.exports = router;

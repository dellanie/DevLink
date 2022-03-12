const express = require('express');
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

const User = require('../../modules/User')

//@route GET api/users
//@desc register user
//@access Public no token(create middleware)
router.post('/',
[
    check('name','Name is required')
        .not()
        .isEmpty(),
    check('email','Please include a valid email')
        .isEmail(),
    check('password','Please enter a password with 6 or more characters')
        .isLength({min:6})
],//name,email,password validator

async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body; // destructure the users auth details
    
    try {   
    // see if user exists
    let user = await User.findOne({email});

    if(user){
        res.status(400).json({errors: [{msg: 'User already exists'}] });
    }

    //get users gravatar
    const avatar = gravatar.url(email,{
        s:'200',
        r:'pg',
        d:'mm',
    })

    user = new User({
        name,
        email,
        avatar,
        password
    });

    //encrypt password

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //return jsonwebtoken
    res.send('User registered');
    
    }   catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }  
}
); // sending data to this route

module.exports = router;


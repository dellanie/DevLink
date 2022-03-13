const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../modules/User');
//@route GET api/auth
//@desc Test route
//@access Public no token(create middleware) --middleware created
router.get('/', auth, async (req,res) => {

    try{
        const user = await User.findById(req.user.id).select('-password');//leave off the password in the data
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route GET api/auth
//@desc Authenticate user and get token
//@access Public

router.post('/',
[
    check('email','Please include a valid email')
        .isEmail(),
    check('password','Please is required')
        .exists()
],//name,email,password validator

    async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body; // destructure the users auth details
    
    try {   
    // see if user exists
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}] });
        }

        //bcrypt
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
            return res
                .status(400)
                .json({errors: [{msg: 'Invalid Credentials'}] });
        }

        const payload ={
            user:{
                id:user.id
            }
        }
        
        //jwt
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:360000},
            (err,token) =>{
                if(err) throw err;
                res.json({token})
            }
            );
    
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }  
}
); // sending data to this route


module.exports = router;
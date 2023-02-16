const router = require('express').Router();
const {User} = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(!user)
        return res.status(400).send({
            message: "Invalid email"
        })
    
    const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );
    if(!isValidPassword)
        return res.status(400).send({
            message: "Invalid Password",
        });
    
    let token = user.generateAuthToken();
    return res.status(200).status({
        data: token, 
        message: "Signing in please wait"
    });
})

module.exports = router;
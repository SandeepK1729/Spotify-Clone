const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

// create user 
router.post('/', async (req, res) => {
    const { err } = validate(req.body);
    if(err) 
        return res.status(400).send({
            message: err.details[0].message
        });
    
    const user = await User.findOne({ email : req.body.email });
    if(user)
        return res.status(403).send({
            message: "User with given mail already exist"
        });
    
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let newUser = await new User({
        ...req.body,
        password: hashPassword
    }).save();

    newUser.password = undefined;
    newUser.__v = undefined;

    return res.status(200).send({
        data: newUser,
        message: "User Account created Successfully"
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signup, login, verifyToken } = require('../controllers/user-controllers');


// routes
router.get('/', verifyToken ,  (req, res) => {
    res.json({
        username: req.user.username
    })
})

router.post("/register", passport.authenticate('signup' , {session: false}) , signup);

router.post("/login", login)



module.exports = router;
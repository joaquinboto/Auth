const passport = require('passport');
const jwt = require('jsonwebtoken');


const signup = async (req, res, next) => {
    res.send('signup');
}

const login = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user) {
                res.status(400).json({
                    message: "Something is not right",
                })
                return next(err)
            }
            req.login(user, {session: false}, async (err) => {
                if(err) {
                    res.send(err);
                }
                const body = {_id: user._id, username: user.username};
                const token = jwt.sign({user: body}, 'secret');
                return res.json({user, token});
            })

        } catch (error) {
            return next(error);
        }
    })(req, res, next);
}

const verifyToken = async (req, res, next) => {
    const headers = req.headers['authorization'];
    const token = headers.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            message: "No token provided"
        })
    }
    jwt.verify(token, 'secret', (err, decoded) => {
        if(err) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        req.user = decoded.user;
        next();
    })  
}

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
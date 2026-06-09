import express from 'express'
const route = express.Router()

route.post('/login', (req, res) => {
    res.status(200).json({
        message:'User login successful'
    })
})
route.post('/register', (req, res) => {
    res.status(201).json({
        message : 'User register successfully',
        data  : {
            id:'fnasjlk23kn13',
            username : 'jack',
            email : 'jack@gmail.com',
            phone:1213323,
            role : 'admin',
            accessToken : 'asoifuuhwf1hy21uu029fj92hjfhj9y9yh912f',
            refreshToken : 'aslkfja;lksjfasnjlkfjna;lsjfl;ajsl;fjla',

        }
    })
})
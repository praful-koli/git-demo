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
            username : 'jack',
            email : 'jack@gmail.com',
            phone:1213323,
            role : 'admin'
        }
    })
})
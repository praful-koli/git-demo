import express from 'express'
const route = express.Router()

route.post('/login', (req, res) => {
    res.status(200).json({
        message:'User login successful'
    })
})
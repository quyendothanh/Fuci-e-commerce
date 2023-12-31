const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const register = asyncHandler(async(req, res) => {
    const {email, password, username, firstname, lastname} = req.body
    if(!email || !password || !username || !firstname || !lastname){
        return res.status(400).json({
            sucess: false,
            mes: 'Missing inputs'
        })
    }
    const response = await Users.create(req.body)
    return res.status(200).json({
        sucess: response ? true : false,
        response
    })
})

module.exports = {
    register
}
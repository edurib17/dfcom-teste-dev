import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

import generateToken from '../utils/generateToken.js';



const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    const userExists = await User.findOne({ email })

    if (!name || name == undefined || name == null) {
        res.status(400)
        throw new Error('Campo nome incorreto!!')
    }


    if (!reg.test(email)) {
        res.status(400)
        throw new Error('Campo email incorreto!!')
    }


    if (!password || password.length < 8) {
        res.status(400)
        throw new Error('Campo senha precisa de 8 caracteres!!')
    }


    if (userExists) {
        res.status(400)
        throw new Error('Usuário já existe!!')
    }

    const user = await User.create({ name, email, password })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid user data')
    }
})



const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('E-mail ou senha inválidos')
    }
})

export { registerUser, authUser }
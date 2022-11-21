import User from '../models/user.js'

export const getUsers = async (request, response) => {
    try {
        const user = await User.find()
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({ message: error })
    }
}

export const createUser = async (request, response) => {
    const user = request.body
    const newUser = new User(user)
    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error })
    }
}
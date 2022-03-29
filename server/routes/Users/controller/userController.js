const User = require("../model/User")

const createUserDB = async (req, res) => {

    try {
        const { id, name, age, favoriteMovies } = req.body

        let newUser = new User({
            id: id,
            name: name,
            age: age,
            favoriteMovies: favoriteMovies,
        })

        let savedUser = await newUser.save()

        res.status(200).json({
            message: 'New user has been saved',
            payload: savedUser
        })
    } catch (error) {
        res.status(500).json({ message: "Could not  user", error: error })
    }
}

const getUserDB = async (req, res) => {

    try {
        const { id } = req.params
        const foundUser = await User.findById(id)

        res.status(200).json({
            message: "Found user",
            payload: foundUser
        })

    } catch (error) {
        res.status(500).json({ message: "Could not find user", error: error })
    }
}

const updateUserDB = async (req, res) => {

    try {
        const { id } = req.body
        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        res.status(200).json({
            message: 'User has been updated',
            payload: updatedUser
        })

    } catch (error) {
        res.status(500).json({ message: "Could not update user", error: error })
    }

}

const deleteUserDB = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json({
            message: 'User deleted',
            payload: deletedUser
        })
    } catch (error) {
        res.status(500).json({ message: "Could not delete user", error: error })
    }
}

module.exports = {
    createUserDB,
    getUserDB,
    updateUserDB,
    deleteUserDB
}
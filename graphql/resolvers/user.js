const User = require("../../models/User")

module.exports = {
    Mutation : {
        async register({registerInput: { username, email, password, confirmPassword }}){
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            })

            const res = await newUser.save()

            return {
                ...res._doc,
                id: res.id,
                username,
                password
            }
        }
    }
}
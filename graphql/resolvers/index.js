// const UserResolvers = require('./user.js')
const User = require("../../models/User")


module.exports = {
    Query :{
        async getUsers(){
            try {
                const user = await User.find()
                return user
            } catch (error) {
                throw new Error(err)
            }
        }
    },
    Mutation : {
        // ...UserResolvers.Mutation
        async register(_, {registerInput: { username, email, password, confirmPassword }}){
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
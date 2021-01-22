const { ApolloServer, PubSub } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs.js')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config.js')

const pubsub = new PubSub()

const PORT = process.env.port || 5001



// const { gql } = require('apollo-server')
// const typeDefs = gql`
//     type Query {
//         SayHi: String!
//     }
// `;

// const resolvers = {Query: {SayHi: () => "heloooo"}}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({req}) => ({req, pubsub})
})

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connect to db")
        return server.listen({port: PORT})
    }).then((res) => {
        console.log(`listen to ${res.url}`)
    }).catch(err => console.log("error aa:",err))



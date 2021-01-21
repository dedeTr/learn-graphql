const { ApolloServer } = require("apollo-server")

const { ApolloServer, PubSub } = require('apollo-server')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const pubsub = new PubSub()

const PORT = process.env.port || 5000


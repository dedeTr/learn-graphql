import { gql } from 'apollo-server'

module.exports = gql`
    type User {
        id: ID!,
        email: String!
        token: String!
        username: String!
        createAt: String!
    }
    input ReqisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Mutation {
        register(registerInput: ReqisterInput): User!
        login(username: String!, password: String!): User!
    }
`
import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    password: String
    image: String
  }
  input GetUserInput {
    email: String!
    password: String
  }

  input UserRegisterInput {
    email: String!
    password: String!
    name: String!
    image: String!
  }

  type Query {
    getUsers: [User]!
    getUser(input: GetUserInput): User
    getUserById(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
  }
`;

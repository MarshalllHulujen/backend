import gql from "graphql-tag";

export const historyTypeDefs = gql`
  type History {
    id: ID!
    userId: String!
    title: String
    link: String
  }

  type Query {
    getHistory(userId: String!): [History!]!
  }

  type Mutation {
    createHistory(title: String!, userId: String!, link: String!): History!
  }
`;

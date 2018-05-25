const Query = `
  type Query {
    channels(id: String!): [Channel]
    history(id: String! sequence: Int): [Message]
    profile(id: String!): User
    whoami: String
  }
`
module.exports = () => [Query]

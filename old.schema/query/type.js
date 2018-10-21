const Query = `
  type Query {
    channels(id: String!): [Channel]
    history(id: String! sequence: Int): [Message]
    about(id: String): User
    blob(hash: String): SSBBlob
    whoami: String
  }
`
module.exports = () => [Query]

const Query = `
  type Query {
    connectedPeers: [Peer]
    history(id: String! sequence: Int): [Message]
    profile(id: String!): User
    whoami: String
  }
`
module.exports = () => [Query]

const DefaultMessage = `
  type DefaultMessage {
    content: String
    key: String!
    sequence: Int!
    timestamp: Float!
    type: String!
    author: String!
  }
`
module.exports = () => [ DefaultMessage ]
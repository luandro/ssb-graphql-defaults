const AboutMessage = `
  type AboutMessage {
    content: String
    key: String!
    name: String
    sequence: Int!
    timestamp: Float!
    type: String!
    author: String
  }
`
module.exports = () => [ AboutMessage ]
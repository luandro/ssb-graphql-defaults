const DefaultMessage = `
  type DefaultMessage implements Message {
    content: String
    key: ID
    sequence: Int
    timestamp: Float
    type: String
    author: String
  }
`
module.exports = () => [ DefaultMessage ]
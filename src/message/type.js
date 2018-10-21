const DefaultMessage = require('./default/type')

const Message = `
  input contentInput {
    type: String!
    data: String
  }
  input publishInput {
    content: contentInput
  }
  type Link {
    key: String
  }
  interface Message {
    content: String
    key: String
    sequence: Int
    timestamp: Float
    type: String!
}
`

module.exports = () => [ Message, DefaultMessage ]
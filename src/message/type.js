const DefaultMessage = require('./default/type')
const PostMessage = require('./post/type')
const AboutMessage = require('./about/type')
const ChannelMessage = require('./channel/type')

const Message = `
  input publishInput {
    content: String
    type: String!
  }
  interface Message {
    key: ID
    sequence: Int
    timestamp: Float
    type: String
    author: String
  }
`

module.exports = () => [
  Message,
  DefaultMessage,
  PostMessage,
  AboutMessage,
  ChannelMessage
]
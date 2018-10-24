const PrivateMessage = `
  type PostContent {
    type: String
    text: String
  }
  type PrivateMessage implements Message {
    content: PostContent
    key: ID
    sequence: Int
    text: String
    timestamp: Float
    type: String
    author: String
  }
`
module.exports = () => [PrivateMessage]
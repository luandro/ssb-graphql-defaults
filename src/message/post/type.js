const PostMessage = `
  type PostContent {
    type: String
    text: String
  }
  type PostMessage implements Message {
    content: PostContent
    key: ID
    sequence: Int
    text: String
    timestamp: Float
    type: String
    author: String
    root: String
    branch: String
    revisionRoot: String
    revisionBranch: String
  }
`
module.exports = () => [PostMessage]

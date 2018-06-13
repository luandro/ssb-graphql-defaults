const Mutation = `
  input postInput {
    text: String
  }
  input aboutInput {
    name: String
    description: String
  }
  type Mutation {
    postMessage(input: postInput): PostMessage
    aboutMessage(id: String!, input: aboutInput): User
  }
`
module.exports = () => [Mutation]

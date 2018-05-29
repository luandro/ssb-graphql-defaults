const User = `
  type User {
    channels: [Channel]
    id: String!
    name: String
    image: String
    imageBlob: String
    description: String
  }
`

module.exports = () => [User]

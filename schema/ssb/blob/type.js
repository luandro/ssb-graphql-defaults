const SSBBlob = `
  type SSBBlob {
    id: String!
    hex: String
    path: String
  }
`
module.exports = () => [SSBBlob]
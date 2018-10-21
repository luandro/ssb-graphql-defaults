const DefaultMessage = require('./message/default/type') // only default for now
const Message = require('./message/type') // only default for now

// 
// blob
// hasBlob
// listBlobs
// wantsBlob
// isFollowing
// isBlocking
// peers
// unboxPrivate
// getMessage(id: String!): Message

const Query = `
  type Query {
    whoami: String
    message(id: String!): DefaultMessage
    messagesByType(type: String!): [DefaultMessage]
  }
`

const Mutation = `
  type Mutation {
    publish(input: publishInput): DefaultMessage
    publishPost(text: String): DefaultMessage
  }
`

const Subscription = `
input linkInput {
  source: String
  dest: String
  rel: String
}
  type Subscription {
    links(input: linkInput): [Link]
  }
`

const Schema = () => [`
  schema {
    query: Query
    mutation: Mutation
  }
`]

module.exports = [
  Schema,
  Query,
  Mutation,
  // Subscription,
  DefaultMessage,
  Message,
]
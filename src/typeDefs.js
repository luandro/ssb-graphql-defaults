const DefaultMessage = require('./message/default/type') // only default for now
const Message = require('./message/type') // only default for now
const Replication = require('./replication/type')
const Gossip = require('./gossip/type')
const Blob = require('./blobs/type')

// hasBlob
// listBlobs
// wantsBlob
// isFollowing
// isBlocking
// unboxPrivate
// getMessage(id: String!): Message

const Query = `
  type Query {
    whoami: String
    message(id: String!): Message
    blob(hash: String): Blob
  }
`

const Mutation = `
  type Mutation {
    publish(input: publishInput): Message
    publishPost(text: String): PostMessage
  }
`

const Subscription = `
  input linkInput {
    source: String
    dest: String
    rel: String
  }
  type Subscription {
    messagesByType(type: String!): Message
    history(id: String! sequence: Int): Message
    feed: Message
    log: Message
    replication: Replication
    gossip: Gossip
  }
`

const Schema = () => [`
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`]

module.exports = [
  Schema,
  Query,
  Mutation,
  Subscription,
  DefaultMessage,
  Message,
  Blob,
  Replication,
  Gossip,
]
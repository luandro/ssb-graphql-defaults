const DefaultMessage = require('./message/default/type')
const Message = require('./message/type')
const Revisions = require('./revisions/type')
const SsbThreads = require('./threads/type')
const Replication = require('./replication/type')
const Gossip = require('./gossip/type')
const Blob = require('./blobs/type')

// TODO:
// hasBlob
// isFollowing
// isBlocking
// unboxPrivate

const Query = `
  type Query {
    whoami: String
    message(id: String!): Message
    revisionStats: RevisionStats
    revisionHistory(id: String!): [PostMessage]
    threads(id: String reverse: Boolean limit: Int threadMaxSize: Int allowlist: [String] blocklist: [String]): [Thread]
    thread(id: String! reverse: Boolean limit: Int threadMaxSize: Int allowlist: [String] blocklist: [String]): [Thread]
    blob(hash: String): Blob
    peers: [Peer]
    unbox: Message
  }
`

const Mutation = `
  type Mutation {
    publish(input: publishInput): Message
    publishPost(text: String): Message
    blobRemove(hash: String): Blob
    publishPrivate(content: String recipients: [String]): Message
    publishPrivatePost(text: String recipients: [String]): Message
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
    blobsList: Blob
    blobsChanges: Blob
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
  Revisions,
  SsbThreads,
  Blob,
  Replication,
  Gossip,
]
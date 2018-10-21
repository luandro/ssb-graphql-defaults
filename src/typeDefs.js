// import AboutMessage from '../old.schema/ssb/message/about/type'
// import Channel from '../old.schema/ssb/channel/type'
// import ChannelMessage from '../old.schema/ssb/message/channel/type'
// import ContactMessage from '../old.schema/ssb/message/contact/type'
// import DefaultMessage from '../old.schema/ssb/message/default/type'
// import Message from '../old.schema/ssb/message/type'
// import PostMessage from '../old.schema/ssb/message/post/type'
// import User from '../old.schema/ssb/user/type'
// import SSBBlob from '../old.schema/ssb/blob/type'
// import Query from '../old.schema/query/type'
// import Mutation from '../old.schema/mutation/type'
// import Subscription from '../old.schema/subscription/type'
// import Gossip from '../old.schema/ssb/gossip/type'
// import Progress from '../old.schema/ssb/progress/type'

// const Schema = () => [`
//   schema {
//     query: Query
//     mutation: Mutation,
//     subscription: Subscription
//   }
// `]

// export default [
//   AboutMessage,
//   Channel,
//   ChannelMessage,
//   ContactMessage,
//   DefaultMessage,
//   Message,
//   PostMessage,
//   User,
//   SSBBlob,
//   Query,
//   Mutation,
//   Subscription,
//   Gossip,
//   Progress,
//   Schema,
// ]
const Message = require('./message/type')
const Mutation = `
`
// messagesByType
// links
// relatedMessages
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
    message(id: String!): Message
  }
`

const Schema = () => [`
  schema {
    query: Query
  }
`]

module.exports = [
  Schema,
  Query,
  Message,
]
import AboutMessage from './ssb/message/about/type'
import Channel from './ssb/channel/type'
import ChannelMessage from './ssb/message/channel/type'
import ContactMessage from './ssb/message/contact/type'
import DefaultMessage from './ssb/message/default/type'
import Message from './ssb/message/type'
import PostMessage from './ssb/message/post/type'
import User from './ssb/user/type'
import SSBBlob from './ssb/blob/type'
import Query from './query/type'
import Mutation from './mutation/type'
import Subscription from './subscription/type'
import Gossip from './ssb/gossip/type'
import Progress from './ssb/progress/type'

const Schema = () => [`
  schema {
    query: Query
    mutation: Mutation,
    subscription: Subscription
  }
`]

export default [
  AboutMessage,
  Channel,
  ChannelMessage,
  ContactMessage,
  DefaultMessage,
  Message,
  PostMessage,
  User,
  SSBBlob,
  Query,
  Mutation,
  Subscription,
  Gossip,
  Progress,
  Schema,
]

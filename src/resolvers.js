const { whoami } = require('./user/resolver')
const { Message, DefaultMessage, PostMessage, message, publish, publishPost, links } = require('./message/resolver') // only default for now
const { messagesByType, log, feed, history } = require('./message/streams/resolver')
const { replication } = require('./replication/resolver')
const { gossip } = require('./gossip/resolver')
const { blob } = require('./blobs/resolver')

const Mutation = {
  publish,
  publishPost,
}

const Query = {
  whoami,
  message,
  blob,
}

const Subscription = {
  messagesByType,
  feed,
  history,
  log,
  replication,
  gossip,
}

module.exports = {
  Query,
  Mutation,
  Message,
  DefaultMessage,
  PostMessage,
  Subscription,
}
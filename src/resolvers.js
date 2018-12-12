const { whoami } = require('./user/resolver')
const {
  Message,
  DefaultMessage,
  PostMessage,
  message,
  publish,
  publishPost,
  links
} = require('./message/resolver') // only default for now
const { messagesByType, log, feed, history } = require('./message/streams/resolver')
const { unbox, publishPrivate, publishPrivatePost } = require('./message/private/resolver')
const { replication } = require('./replication/resolver')
const { revisionStats, revisionHistory } = require('./revisions/resolver')
const { thread, threads } = require('./threads/resolver')
const { peers, gossip } = require('./gossip/resolver')
const { blob, blobRemove, blobsList, blobsChanges } = require('./blobs/resolver')

const Query = {
  whoami,
  message,
  revisionStats,
  revisionHistory,
  thread,
  threads,
  blob,
  peers,
  unbox
}

const Mutation = {
  publish,
  publishPost,
  publishPrivate,
  publishPrivatePost,
  blobRemove,
  publishPrivate,
  publishPrivatePost
}

const Subscription = {
  messagesByType,
  feed,
  history,
  log,
  blobsList,
  blobsChanges,
  replication,
  gossip
}

module.exports = {
  Query,
  Mutation,
  Subscription,
  Message,
  DefaultMessage,
  PostMessage
}
const { whoami } = require('./user/resolver')
const { Message, message, messagesByType, publish, publishPost, links } = require('./message/resolver') // only default for now


const Mutation = {
  publish,
  publishPost,
}

const Query = {
  whoami,
  message,
  messagesByType,
}

const Subscription = {
  links,
}

module.exports = {
  Query,
  Mutation,
  Message,
  // Subscription,
}
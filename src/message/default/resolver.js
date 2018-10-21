
module.exports = {
  key: (msg) => msg.key,
  content: (msg) => JSON.stringify(msg.content),
  author: (msg) => msg.author,
  sequence: (msg) => msg.sequence,
  timestamp: (msg) => msg.timestamp,
  type: (msg) => msg.content.type,
}

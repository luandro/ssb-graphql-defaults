const typeDefs = require('./lib/typeDefs')
const resolvers = require('./lib/resolvers')
module.exports = {
  typeDefs: typeDefs.default,
  resolvers: resolvers.default
}
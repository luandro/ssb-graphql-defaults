const Subscription=`
  type Subscription {
    gossip(connected: Boolean): Gossip
    history(id: String): PostMessage
  }
`

module.exports = () => [Subscription]
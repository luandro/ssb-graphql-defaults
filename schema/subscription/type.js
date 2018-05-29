const Subscription=`
  type Subscription {
    gossip(connected: Boolean): Gossip
    progress: Progress
    history(id: String): PostMessage
  }
`

module.exports = () => [Subscription]
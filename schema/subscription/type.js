const Subscription=`
  type Subscription {
    gossip(connected: Boolean): Gossip!
  }
`

module.exports = () => [Subscription]
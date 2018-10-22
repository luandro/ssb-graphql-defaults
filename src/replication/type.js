const Replication=`
  type PendingPeer {
    id: String
    number: Int
  }
  type Replication {
    rate: Float
    feeds: Int
    pendingPeers: PendingPeer
    incompleteFeeds: Int
    progress: Int
    total: Int
  }
`

module.exports = () => [ Replication ]
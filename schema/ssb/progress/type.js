const Progress=`
  type PendingPeer {
    id: String
    number: Int
  }
  type Progress {
    rate: Int
    feeds: Int
    pendingPeers: [PendingPeer]
    incompleteFeeds: Int
    progress: Int
    total: Int
  }
`

module.exports = () => [Progress]
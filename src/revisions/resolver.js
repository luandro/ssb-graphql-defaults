const pull = require('pull-stream')

module.exports = {
  revisionStats: (_, {}, {sbot}) => new Promise((resolve, reject) => {
    pull(
      sbot.revisions.stats(),
      pull.collect((err, stats) => {
        if(err) { reject(err) }
        resolve(stats[0])
      })
    )
  }),
  revisionHistory: (_, {id}, {sbot}) => new Promise((resolve, reject) => {
    pull(
      sbot.revisions.history(id),
      pull.collect((err, msgs) => {
        if(err) { reject(err) }
        resolve(msgs)
      })
    )
  })
}

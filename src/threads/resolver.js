const pull = require('pull-stream')

module.exports = {
  threads: (_, {id}, {sbot}) => new Promise((resolve, reject) => {
    pull(
      sbot.threads.thread({root: id}),
      pull.collect(function(err, msgs) {
        if(err) { reject(err) }
        else {
          resolve(msgs)
        }
      })
    )
  })
}

const pull = require('pull-stream')

module.exports = {
  threads: (_, opts, {sbot}) => new Promise((resolve, reject) => {
    if(!opts.id) {
      pull(
        sbot.threads.public(opts),
        pull.collect(function(err, msgs) {
          if(err) { reject(err) }
          else {
            resolve(msgs)
          }
        })
      )
    } else {
      pull(
        sbot.threads.profile(opts),
        pull.collect(function(err, msgs) {
          if(err) { reject(err) }
          else {
            resolve(msgs)
          }
        })
      )
    }
    
  }),
  thread: (_, opts, {sbot}) => new Promise((resolve, reject) => {
    opts.root = opts.id
    pull(
      sbot.threads.thread(opts),
      pull.collect(function(err, msgs) {
        if(err) { reject(err) }
        else {
          resolve(msgs)
        }
      })
    )
  })
}

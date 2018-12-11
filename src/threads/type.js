const Threads = `
  type Thread {
    messages: [Message]
    full: Boolean
  }
  type Threads {
    threads: [Thread]
  }
`

module.exports = () => [Threads]

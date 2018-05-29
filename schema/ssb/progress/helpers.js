import pull from 'pull-stream'

export const getProgress = (sbot, pubsub, channel) => {
  if (!sbot) {
    console.log('ERROR! Pass sbot to the function')
  }
  pull(
    sbot.progress(),
    pull.drain(progress => {
      console.log('progress', progress)
      return pubsub.publish(channel, { gossip })
    })
  )
}
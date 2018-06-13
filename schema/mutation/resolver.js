import { publishMessage } from 'ssb-helpers'

export default {
  postMessage: (_, { input: { text } }, { sbot }) => publishMessage({ type: 'post', text }, sbot),
  aboutMessage: (_, { input}, { sbot }) => {
    const { id, name, description } = input
    return publishMessage({
      type: 'about',
      about: id,
      name,
      description,
      // image: {
      //   link: fileID,       // required
      //   width: widthInPx,   // optional, but recommended
      //   height: heightInPx, // optional, but recommended
      //   name: fileName,     // optional, but recommended
      //   size: sizeInBytes,  // optional, but recommended
      //   type: mimeType      // optional, but recommended
      // },
    }, sbot)
    .then(msg => {
      return {
        id: msg.value.content.about,
        ...msg.value.content
      }
    })
  },
}

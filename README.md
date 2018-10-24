# SSB GraphQL Schema

[![npm version](https://badge.fury.io/js/ssb-graphql-defaults.svg)](https://badge.fury.io/js/ssb-graphql-defaults)

GraphQL schema for Secure Scuttlebot, meant to be used as a plugin with [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server). You can also add it to your existing schema using [schema stitching](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html).

## Usage

Install it with `npm i -S ssb-graphql-defaults` and use it with your GraphQL server, or use it as a plugin with the [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server).

## API

### Query

##### `whoami`
Get id of the current sbot user.

#### messages

##### `message({ id: String })`
Get a message by its hash-id. Use fragments to get the content of specific messages such as a `post`:
```
query {
  message(id: "%NgcMlAco0ZKI8lIteD/LRJMHKhFZrQxJvUrXaFmEIcQ=.sha256") {
    key
    author
    ... on PostMessage {
      content {
        type
        text
      }
    }
  }
}
```

#### blobs

##### `blob ({ id: String })`
Get a blob by its ID.

#### gossip

##### `peers`
Get the current peerlist.

### Mutation

#### messages

##### `publish ({ type: String content: String })`
Construct a message using sbot's current user, and add it to the DB.

- `content` ([stringified](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) object): The content of the message.
- - `type` (string): The object's type.

##### `publishPost ({ text: String })`
Publish `post` message with text.

### Subscription

#### gossip

##### `gossip`
Listen for gossip events.

#### replicate

##### `replicate`
Listen to replicate events.

## To be included

### Query

#### friends

##### `isFollowing ({ source: String, dest: String })`
Callsback true if source follows dest, false otherwise.

##### `isBlocking ({ source: String, dest: String})`
Callsback true if source blocks dest, false otherwise.

#### private

##### `unbox ({ ciphertext: String })`
Attempt to decrypt the content of an encrypted message.

### Mutation

#### blobs

##### `wantBlob ({ id: String })`
Begin searching the network for the blob of the given hash.

##### `addBlob ({ source: File, id: String })`
Add a new blob to the DB.

##### `removeBlob ({ id: String })`
Remove a blob from the store.

#### private

##### `publishPrivate({ content, recps })`
Publish an encrypted message.

- `content` (object): The content of the message.
- `recps` (array of feedids): The recipients of the message (limit 7).

### Subscription

#### messages

##### `messagesByType ({ type: String })`
Retrieve messages with a given type, ordered by receive-time.

##### `feed`
Fetch messages ordered by their claimed timestamps

##### `log`
Fetch messages ordered by the time received.

##### `history ({ id: String })`
Fetch messages from a specific user, ordered by sequence numbers.

##### `user ({ id: String })`
Fetch messages from a specific user, ordered by sequence numbers.

- `rel` (string, optional): Filters the links by the relation string.

##### `links ({ source: String, dest: String, rel: String })`
Get a stream of messages, feeds, or blobs that are linked to/from an id.

#### blobs

##### `listBlobs`
List the hashes of the blobs in the DB.

##### `blobChanges`
Listen for any newly-downloaded blobs.

#### friends

##### `creaFriendStream({ start: String, graph:, dunbar:, hops:, meta:})`
Live-stream the ids of feeds which meet the given hops query. If meta option is set, then will return steam of {id, hops}

## Future plans

- https://github.com/ssbc/ssb-backlinks
- https://github.com/ssbc/ssb-threads
- https://github.com/dominictarr/ssb-query
- https://github.com/ssbc/ssb-contacts

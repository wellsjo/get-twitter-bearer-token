'use strict'

// Example code
const twitter_consumer_key = 'your-consumer-key'
const twitter_consumer_secret = 'your-consumer-secret'

const getBearerToken = require('./')

getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
    console.error(err)
  } else {
    console.log(res.body)
  }
})

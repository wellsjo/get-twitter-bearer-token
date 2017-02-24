# get-twitter-bearer-token
This is a convenience method to obtain an application bearer token for the Twitter api. It sends a request to `/oauth2/token` endpoint with the correctly formatted credentials (base64 encoded consumer key and secret) and headers.

This is only meant to be used once per application/token, since the token needs to be explicitly invalidated to stop working. 

## Install
```
npm i
```

## Usage
```javascript
const getBearerToken = require('get-twitter-bearer-token')

const twitter_consumer_key = 'your-consumer-key'
const twitter_consumer_secret = 'your-consumer-secret'

getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
    // handle error
  } else {
  
    // bearer token
    console.log(res.body.access_token)
  }
})
```

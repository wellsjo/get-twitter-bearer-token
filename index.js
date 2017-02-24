'use strict'

const http = require('superagent')

/**
 * Obtain Twitter bearer token used for application api calls. Base64 encodes
 * consumer key and secret, then sends request to /oauth2/token endpoint.
 *
 * @param {String} consumerKey
 * @param {String} consumerSecret
 * @param {Function} callback
 */

function getBearerToken(consumerKey, consumerSecret, callback) {
  const base64EncodedKey = new Buffer(`${consumerKey}:${consumerSecret}`).toString('base64')
  http
    .post('https://api.twitter.com/oauth2/token?grant_type=client_credentials')
    .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    .set('Authorization', `Basic ${base64EncodedKey}`)
    .end(callback)
}

/**
 * Exports
 */

module.exports = getBearerToken

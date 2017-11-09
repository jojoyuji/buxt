//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//
// });

const functions = require('firebase-functions')
const { Nuxt } = require ('nuxt')

const config = require('./nuxt.config.js')
config.dev = false
const nuxt = new Nuxt(config)
exports.app = functions.https.onRequest(nuxt.render)

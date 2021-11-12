
var firebase = require('firebase-admin');
const serviceAccount = require('./presentit-bf2b5-6de55f7d3b77.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
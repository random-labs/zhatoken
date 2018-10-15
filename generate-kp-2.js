const StellarSdk = require('stellar-sdk');

var pair = StellarSdk.Keypair.random();

var keys = {};

keys.secret = pair.secret();
keys.public = pair.publicKey();


console.log(keys);

// Output - ACCOUNT 2
/*
{ secret: 'SCV3GSTS3A6UDKCH2MLLZ74RMXEAPMF6UHMUQ4FBZT2WRXWIWPR6EFZN',
  public: 'GA7U3OZ2ZH7NCQJ7EUPP3RHU2KHQ7QJRXDDZJWQCN7ESL22QIXZYBS2B' }

*/
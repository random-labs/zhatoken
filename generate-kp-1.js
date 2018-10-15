const StellarSdk = require('stellar-sdk');

var pair = StellarSdk.Keypair.random();

var keys = {};

keys.secret = pair.secret();
keys.public = pair.publicKey();


console.log(keys);

// Output
/*
{ secret: 'SADGEY5M27Y5FXIST3AZF7FUGGFL376UTSCO67JWX5BLYJL2ZECLTBEQ',
  public: 'GDOYNHELLWFQ52FTZHTTIB3IL4ZIWIB6JE43QLKYUIC3MT7YSGA4KYWY' }

*/
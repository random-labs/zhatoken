// The SDK does not have tools for creating test accounts, so you'll have to
// make your own HTTP request.

/*
In the real world, you’ll usually pay an exchange that sells lumens in order to create a new account.
On Stellar’s test network, however, you can ask Friendbot, our friendly robot with a very fat wallet, to create an account for you.
To create a test account, send Friendbot the public key you created.
It’ll create and fund a new account using that public key as the account ID.

*/

var request = require('request');

request.get({
  url: 'https://friendbot.stellar.org',
  qs: { addr:"GA7U3OZ2ZH7NCQJ7EUPP3RHU2KHQ7QJRXDDZJWQCN7ESL22QIXZYBS2B" },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
  }
});

/*
OUTPUT

SUCCESS! You have a new account :)
 { _links:
   { transaction:
      { href: 'https://horizon-testnet.stellar.org/transactions/107a864273370b7a4eb2c6a0df297d72383dc2412254f92c9b3300b96730d6cb' } },
  hash: '107a864273370b7a4eb2c6a0df297d72383dc2412254f92c9b3300b96730d6cb',
  ledger: 9836915,
  envelope_xdr: 'AAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAAAZABiwhcAAoQ3AAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAP027Osn+0UE/JR79xPTSjw/BMbjHlNoCb8kl61BF84AAAAAXSHboAAAAAAAAAAABhlbgnAAAAEBAcod946IHGZCfJCsx2fH8dzAvhBiWcS3vaP4DWQVyaeU2OkmlnbQRKp2dAwtGY7haSUfB8ZlE+QrcUfr8OWIA',
  result_xdr: 'AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA=',
  result_meta_xdr: 'AAAAAAAAAAEAAAADAAAAAACWGXMAAAAAAAAAAD9NuzrJ/tFBPyUe/cT00o8PwTG4x5TaAm/JJetQRfOAAAAAF0h26AAAlhlzAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAwCWGXMAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAEZSqw3CT8AYsIXAAKENwAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQCWGXMAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAEZM2PAIT8AYsIXAAKENwAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA' }

  */

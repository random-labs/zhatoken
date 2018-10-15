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
  qs: { addr:"GDOYNHELLWFQ52FTZHTTIB3IL4ZIWIB6JE43QLKYUIC3MT7YSGA4KYWY" },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
  }
});

//output
/*
SUCCESS! You have a new account :)
 { _links:                                                                              
    { transaction:
        { 
          href: 'https://horizon-testnet.stellar.org/transactions/bc4679ac0e7a4248d00bedd48ed22b95699733b71d999486f3c9b76bad505d06' 
        } 
    },
  hash: 'bc4679ac0e7a4248d00bedd48ed22b95699733b71d999486f3c9b76bad505d06',
  ledger: 9823140,
  envelope_xdr: 'AAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAAAZABiwhcAAoL5AAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA3Yaci12LDuizyec0B2hfMosgPkk5uC1YogW2T/iRgcUAAAAXSHboAAAAAAAAAAABhlbgnAAAAEAtMTqgC/ia62hPCPBnD1331VHcCYCeFtZFJBGjna2PPvj9l06/ut8HCzUbm9vUm9WsEfDSK8usAnlbqIeIoo8B',
  result_xdr: 'AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA=',
  result_meta_xdr: 'AAAAAAAAAAEAAAADAAAAAACV46QAAAAAAAAAAN2GnItdiw7os8nnNAdoXzKLID5JObgtWKIFtk/4kYHFAAAAF0h26AAAleOkAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAwCV46QAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAEzNlnI+6MAYsIXAAKC+QAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQCV46QAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAEzHxFSE6MAYsIXAAKC+QAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA'
}
*/
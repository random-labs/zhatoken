/*
Now for the last step: Getting the account’s details and checking its balance. 
Accounts can carry multiple balances—one for each type of currency they hold.
*/

const StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount("GDOYNHELLWFQ52FTZHTTIB3IL4ZIWIB6JE43QLKYUIC3MT7YSGA4KYWY").then(function(account) {
  console.log('Balances for first account : ' + "GDOYNHELLWFQ52FTZHTTIB3IL4ZIWIB6JE43QLKYUIC3MT7YSGA4KYWY" );

  //Accounts can carry multiple balances—one for each type of currency they hold.

  account.balances.forEach(function(balance) {
    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  });
});


// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount("GA7U3OZ2ZH7NCQJ7EUPP3RHU2KHQ7QJRXDDZJWQCN7ESL22QIXZYBS2B").then(function(account) {
    console.log("-----------------------------------------------------------------------------------");

    console.log('Balances for second account : ' + "GA7U3OZ2ZH7NCQJ7EUPP3RHU2KHQ7QJRXDDZJWQCN7ESL22QIXZYBS2B" );
  
    //Accounts can carry multiple balances—one for each type of currency they hold.
  
    account.balances.forEach(function(balance) {
      console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
    });
  });

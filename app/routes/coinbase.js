import Route from '@ember/routing/route';
import Coinbase from 'npm:coinbase'
import $ from 'jquery';



export default Route.extend({

    actions: {
        test() {
            console.log("HELLO");
            var CoinbaseClient = Coinbase.Client;
            var client = new Coinbase.Client({'apiKey': "5kCrvNfxdlQFKdcr", 'apiSecret': "O74jlIfNsUBo9qOAzjBTghYAVVWvnVfg"});
            client.getAccounts({}, function(err, accounts) {
                console.log("accounts" + accounts);
            });
        }
    }

});

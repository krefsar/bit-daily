import Controller from '@ember/controller';
import coinbase from 'npm:coinbase';
import { inject as service } from '@ember/service';

export default Controller.extend({
	emberOauth2: service(),
	courses1: [
		{
			icon: 'user',
			title: 'Coinbase Account',
			description: 'Start using your very own Bitcoin wallet, made easy with Coinbase',
			status: 'complete'
		},
		{
			icon: 'bitcoin',
			title: 'Your First Bitcoin',
			description: 'Learn how and why to invest in Bitcoin',
			status: 'complete'
		},
		{
			icon: 'laptop',
			title: 'Sending Bitcoin',
			description: 'Spend your hard-earned coins at your favorite stores',
			status: 'pending'
		}
	],
	courses2: [
		{
			icon: 'shield',
			title: 'Security',
			description: 'Don\'t get taken advantage of. Learn how to protect yourself and your funds'
		},
		{
			icon: 'usd',
			title: 'Getting Paid',
			description: 'Start accepting payments for your services, in Bitcoin'
		},
		{
			icon: 'globe',
			title: 'Currency Exchange',
			description: 'Learn the ins and outs of converting your funds between different currencies'
		}
	],

	actions: {
		testCoinbase() {
			this.get('emberOauth2').setProvider('coinbase');
			this.get('emberOauth2').authorize().then(function(response) {
				console.log(response);
			});
		}
	}
});

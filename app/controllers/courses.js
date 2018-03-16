import Controller from '@ember/controller';

export default Controller.extend({
	courses1: [
		{
			icon: 'user',
			title: 'Coinbase Account',
			description: 'Start using your very own Bitcoin wallet, made easy with Coinbase'
		},
		{
			icon: 'bitcoin',
			title: 'Your First Bitcoin',
			description: 'Learn how and why to invest in Bitcoin'
		},
		{
			icon: 'usd',
			title: 'Getting Paid',
			description: 'Start accepting payments for your services, in Bitcoin'
		}
	],
	courses2: [
		{
			icon: 'shield',
			title: 'Security',
			description: 'Don\'t get taken advantage of. Learn how to protect yourself and your funds'
		},
		{
			icon: 'laptop',
			title: 'Sending Bitcoin',
			description: 'Spend your hard-earned coins at your favorite stores'
		},
		{
			icon: 'globe',
			title: 'Currency Exchange',
			description: 'Learn the ins and outs of converting your funds between different currencies'
		}
	]
});

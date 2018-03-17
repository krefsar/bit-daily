import Controller from '@ember/controller';
import { computed } from '@ember/object';

const fees = 0.35;

export default Controller.extend({
	amountToSend: 0,
	balance: 500,
	breadcrumbs: Ember.A(['Sending Bitcoin']),
	currency: 'USD',
	currencyOptions: ['BTC', 'USD'],
	currentCurrency: 'USD',
	afterCurrency: 'USD',
	dialogStep: 0,
	majorityThreshold: 0.75,
	publicAddress: '',
	tutorialStep: 1,
	usdToBtc: 8046.63,

	addressErrorMessages: computed('publicAddress', function() {
		let checks = [this.get('isTooShort'), this.get('isTooLong')];

		return checks.reduce((total, validation) => {
			if (validation(this.get('publicAddress')).type === 'error') {
				total.pushObject(validation(this.get('publicAddress')).message);
			}

			return total;
		}, Ember.A([]));
	}),

	addressSuccessMessages: computed('publicAddress', function() {
		let checks = [this.get('isRightLength')];

		return checks.reduce((total, validation) => {
			if (validation(this.get('publicAddress')).type === 'success') {
				total.pushObject(validation(this.get('publicAddress')).message);
			}

			return total;
		}, Ember.A([]));
	}),

	convertedCurrent: computed('currentCurrency', function() {
		if (this.get('currentCurrency') === 'BTC') {
			return this.get('balance') / this.get('usdToBtc');
		}

		return this.get('balance');
	}),

	convertedAfter: computed('afterCurrency', 'amountToSend', 'currency', function() {
		if (this.get('afterCurrency') === 'BTC') {
			let convertedBalance = this.get('balance') / this.get('usdToBtc');
			return convertedBalance - fees - (this.get('amountToSend'));
		}

		return this.get('balance') - fees - this.get('amountToSend');
	}),

	amountErrorMessages: computed('amountToSend', 'currency', function() {
		let checks = [this.get('insufficientFunds')];

		return checks.reduce((total, validation) => {
			if (validation(this.get('amountToSend'), this.get('balance'), this.get('currency'), this.get('usdToBtc'), this.get('majorityThreshold')).type === 'error') {
				total.pushObject(validation(this.get('amountToSend'), this.get('balance'), this.get('currency'), this.get('usdToBtc'), this.get('majorityThreshold')).message);
			}

			return total;
		}, Ember.A([]));
	}),

	insufficientFunds(amount = 0, balance) {
		return (+amount + +fees) > balance ? { type: 'error', message: 'After fees, you\'re sending more funds than you have. ' } : {};
	},

	amountSuccessMessages: computed('amountToSend', function() {
		let checks = [];

		return checks.reduce((total, validation) => {
			if (validation(this.get('publicAddress')).type === 'success') {
				total.pushObject(validation(this.get('publicAddress')).message);
			}

			return total;
		}, Ember.A([]));
	}),

	amountWarningMessages: computed('amountToSend', 'currency', function() {
		let messages = Ember.A([]);

		if (this.get('currency') === 'BTC') {
			messages.pushObject('You\'re using BTC as your currency type. Be sure to check its corresponding USD amount.');
		}

		let checks = [this.get('isTooMuch')];

		let additional = checks.reduce((total, validation) => {
			if (validation(this.get('amountToSend'), this.get('balance'), this.get('currency'), this.get('usdToBtc'), this.get('majorityThreshold')).type === 'warning') {
				total.pushObject(validation(this.get('amountToSend'), this.get('balance'), this.get('currency'), this.get('usdToBtc'), this.get('majorityThreshold')).message);
			}

			return total;
		}, Ember.A([]));

		return messages.concat(additional);
	}),

	addressWarningMessages: computed('publicAddress', function() {
		return ['Make sure you\'re sending to a reliable source'];
	}),

	isRightLength(address = '') {
		return address.length >= 25 && address.length <= 34 ? { type: 'success', message: 'That bitcoin address looks good!' } : {}
	},

	isTooLong(address = '') {
		return address.length > 0 && address.length > 34 ? { type: 'error', message: 'Your address is too long. Try copying and pasting the address again.' } : {};
	},

	isTooMuch(amount = 0, balance, currency, usdConversion, threshold) {
		if (amount > 0) {
			let adjustedAmount = amount;

			if (currency === 'BTC') {
				adjustedAmount = amount * usdConversion;
			}

			return adjustedAmount >= (balance * threshold) ? { type: 'warning', message: 'You\'re sending a large portion of your funds! Be careful, transfers are nonrefundable.'} : {};
		} else {
			return {};
		}
	},

	isTooShort(address = '') {
		return address.length > 0 && address.length < 25 ? { type: 'error', message: 'Your address looks like it\'s missing characters. Try copying and pasting it again.' } : {};
	},

	actions: {
		addBreadcrumb(crumb) {
			this.get('breadcrumbs').pushObject(crumb);
		},

		incrementDialog() {
			this.incrementProperty('dialogStep');
		},

		incrementTutorial() {
			this.incrementProperty('tutorialStep');
			this.incrementProperty('dialogStep');
			this.get('breadcrumbs').pushObject('Complete Payment')
		},

		sendMoney() {
			this.set('submissionModalOpen', true);
			this.set('submissionLoading', true);
			setTimeout(() => {
				this.set('submissionLoading', false);
			}, 2300);
		},

		quitLesson() {

		}
	}
});

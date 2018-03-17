import Controller from '@ember/controller';

export default Controller.extend({
	breadcrumbs: Ember.A(['Sending Bitcoin']),
	dialogStep: 0,

	actions: {
		addBreadcrumb(crumb) {
			this.get('breadcrumbs').pushObject(crumb);
		},

		incrementDialog() {
			this.incrementProperty('dialogStep');
		}
	}
});

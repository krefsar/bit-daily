import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['row', 'course-option'],

	statusClass: computed('course', function() {
		if (this.get('course.status')) {
			return this.get('course.status') === 'complete' ? 'course__complete' : 'course__pending';
		}
		return '';
	})
});

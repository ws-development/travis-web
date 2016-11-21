import Ember from 'ember';
import config from 'travis/config/environment';
import Visibility from 'npm:visibilityjs';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: service(),
  updateTimesService: service('updateTimes'),

  init() {
    this._super(...arguments);
    if (false) {
      return Visibility.every(config.intervals.updateTimes, this.updateTimes.bind(this));
    }
  },

  updateTimes() {
    this.get('updateTimesService').push(this.get('jobs'));
  }
});

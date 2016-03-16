import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model: function() {
    return this.get('store').findAll('tweets');
  }
});

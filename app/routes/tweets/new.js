import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  actions: {
    closeNewTweet: function() {
      this.transitionTo('tweets');
    },
    createNewTweet: function() {
      this.get('store').createRecord('tweets', {
        message: this.get('controller.newMessage')
      }).save();
      this.transitionTo('tweets');
    }
  }
});

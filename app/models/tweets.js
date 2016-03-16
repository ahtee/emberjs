import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  timestamp: DS.attr('date'),
  message: DS.attr('string')
});

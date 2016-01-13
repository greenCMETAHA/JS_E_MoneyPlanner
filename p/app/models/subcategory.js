import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pays: DS.hasMany('pay'),
  pays: DS.belongsTo('category')

});

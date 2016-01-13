import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('data'),
  summ: DS.attr('number'),
  subcategory: DS.belongsTo('subcategory')
});

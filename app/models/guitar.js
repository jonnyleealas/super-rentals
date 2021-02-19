import DS from 'ember-data';

export default DS.Model.extend({
    
    name: DS.attr('string'),
    make: DS.attr('string'),
    model: DS.attr('string'),
    yearMade: DS.attr('number'),
    description: DS.attr('string'),
    color: DS.attr('string'),

});

import DS from 'ember-data';

export default DS.Model.extend({
    
    make: DS.attr('string'),
    model: DS.attr('string'),
    yearMade: DS.attr('number'),
    description: DS.attr('string'),
    color: DS.attr('string'),

});

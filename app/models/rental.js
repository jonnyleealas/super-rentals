import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
    gameRoom: 'yes',
    coolFactor: 10,
    description: DS.attr(),
    partyRoom: 'yes',
    coolLevel: 10
});

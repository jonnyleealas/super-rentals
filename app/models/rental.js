import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
    gameroom: DS.attr(),
    coolFactor: DS.attr(),
    description: DS.attr(),
    partyroom: DS.attr(),
    coollevel: DS.attr()
});

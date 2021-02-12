import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCity(param) {
            if(param !== '') {
                return this.store
                .query('guitars', { city: param }).then((results) => {
                  return { query: param, results: results };
                });
            } else {
                return this.store
                .findAll('guitars').then((results) => {
                  return { query: param, results: results };
                });
            }
        }
    }
});

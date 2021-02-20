import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
      console.log(params,"fuck")
        return this.store.findRecord('guitar', params.guitar_id);

      }
    });

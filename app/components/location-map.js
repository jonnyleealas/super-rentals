import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let mapElement = this.maps.getMapElement(this.location);
    this.$('.map-container').append(mapElement);
  }
});
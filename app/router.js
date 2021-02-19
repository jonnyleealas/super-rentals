import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('guitars', function() {
    this.route('show', { path: '/:guitar_id'});
  });
  this.route('chris');
});

export default Router;

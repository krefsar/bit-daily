import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('courses', function() {
    this.route('coinbase-info');
    this.route('buying');
    this.route('sending');
    this.route('purchasing');
  });
});

export default Router;

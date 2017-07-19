import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add');
  this.route('show');
  this.route('edit');
  this.route('display');
});

export default Router;

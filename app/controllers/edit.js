import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['id'],
	id: 0,
	blog: Ember.inject.service(),
	name: Ember.computed('blog','id',function() {
		console.log(this.get('id'))
	 return this.get('blog').get('data')[this.get('id')].name; }),
	type: Ember.computed('blog','id',function() { return this.get('blog').get('data')[this.get('id')].type; }),
	content: Ember.computed('blog','id',function() { return this.get('blog').get('data')[this.get('id')].content; }),
	actions: {
		update(){
			var obj = {};
			obj.id = this.get('id');
			obj.name = this.get('name');
			obj.type = this.get('type');
			obj.content = this.get('content');
			this.get('blog').get('data')[this.get('id')]=obj;
			this.send('back');
		}
	}
});

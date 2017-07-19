import Ember from 'ember';

export default Ember.Controller.extend({
	name: '',
	type: '',
	content: '',
	blog: Ember.inject.service(),
	actions: {
		add(){
			var obj = {};
			obj.id = this.get('blog').get('data').length;
			obj.name = this.get('name');
			obj.type = this.get('type');
			obj.content = this.get('content');
			//this.get('blog').get('add')(obj);
			this.get('blog').get('data').addObjects([obj]);
			console.log(this.get('blog').get('data'));
			this.send('back');
		}
	}
});

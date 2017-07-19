import Ember from 'ember';

export default Ember.Service.extend({
	data: [ { 'id':0, 'name': 'Test1', 'type':'test1', 'content': 'this is a test1 content'}, { 'id':1, 'name': 'Test2', 'type':'test2', 'content': 'this is a test2 content'},{ 'id':2,'name': 'Test3', 'type':'test3', 'content': 'this is a test3 content'}],
	add(obj) {
		this.get('data').addObjects([obj]);
	}	
});

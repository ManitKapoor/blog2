import Ember from 'ember';

export default Ember.Component.extend({

	init(){
		this._super(...arguments);
		this.set('data',this.get('blog').get('data'));
		this.set('currentid',0);
		this.set('cdblog',this.get('data')[this.get('currentid')]);
	},

	blog: Ember.inject.service(),
	data: null,
	currentid: 0,
	open: null,

	cblog: Ember.computed('data','currentid',function() {
		 console.log(this.get('currentid'))
		return this.get('data')[this.get('currentid')];
		 }),
	prev: Ember.computed('data','currentid',function() { return this.get('currentid') > 0; }),
	next: Ember.computed('data','currentid',function() { return this.get('currentid') < this.get('data').length-1; }),

	actions: {
		setprev(){
			if(this.get('currentid')-1 >= 0){
				this.$('#k'+this.get('currentid').toString()).attr('class','');
				this.set('currentid',this.get('currentid')-1);
				console.log(this.$('#k'+this.get('currentid')))
				this.$('#k'+this.get('currentid')).attr('class','active');
			}
		},
		setnext(){
			if(this.get('currentid')+1 < this.get('data').length){
				this.$('#k'+this.get('currentid').toString()).attr('class','');
				this.set('currentid',this.get('currentid')+1);
				this.$('#k'+this.get('currentid').toString()).attr('class','active');
			}
		},
		setid(id){
			this.set('open',true);
			this.$('#k'+this.get('currentid').toString()).attr('class','');
			this.set('currentid',id);
			this.$('#k'+this.get('currentid').toString()).attr('class','active');
		},
		close(){
			this.$('#k'+this.get('currentid').toString()).attr('class','');
			this.set('open',null);
		}
	}

});

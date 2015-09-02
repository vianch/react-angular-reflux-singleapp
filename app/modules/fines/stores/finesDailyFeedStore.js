import Reflux from 'reflux';
import {finesDailyFeedAction} from '../actions/finesActions';
import {Parse} from 'parse';

const FinesDailyFeedStore = Reflux.createStore({
	listenables: [finesDailyFeedAction],

	init: function() {
		Parse.initialize('Yya18e2HqyVrAoT1YzYXa3TqYZhSfz2ij4ysFxaW', 'OG3pSDuI5AT5KiN8akUFJNqTXBG6iXcpkBFENOSQ');
	},

	fetchDailyFeed: function() {

		let finesDetail = Parse.Object.extend("finesDetail");
		let query = new Parse.Query(finesDetail);
		query.descending("createdAt");
		query.include("workerId");
		
		query.find({
		  success: (data) =>{
		    this.trigger(data);
		  },
		  error: (error) => {
		  	console.error(error);
		  }
		});
	}
});

export default FinesDailyFeedStore;



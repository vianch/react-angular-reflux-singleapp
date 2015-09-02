import Reflux from 'reflux';
import {finesDailyFeedAction} from '../actions/finesActions';
import {Parse} from 'parse';

const FinesDailyFeedStore = Reflux.createStore({
	listenables: [finesDailyFeedAction],

	init: function() {
		Parse.initialize('KEY','KEY');	
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



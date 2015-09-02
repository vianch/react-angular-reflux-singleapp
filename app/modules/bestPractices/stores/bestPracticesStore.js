import Reflux from 'reflux';
import {bestPracticesActions} from '../actions/bestPracticesActions';
import {Parse} from 'parse';

const BestPracticesStore = Reflux.createStore({

	listenables: [bestPracticesActions],

	init: function() {
		Parse.initialize('KEY','KEY');	
	},

	fetchBestPracticesData: function() {
		let bestPracticesData = Parse.Object.extend("bestPracticesData");
		let queryObject = new Parse.Query(bestPracticesData);
		queryObject.ascending("order");

		queryObject.find({
			success: (data) => {
				this.trigger(data);
			},
			error: (error) => {
				console.error(error);
			}
		});
	}

});

export default BestPracticesStore;
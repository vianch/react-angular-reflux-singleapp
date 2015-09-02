import Reflux from 'reflux';
import {finesActions} from '../actions/finesActions';
import {Parse} from 'parse';

const FinesStore = Reflux.createStore({

	listenables: [finesActions],

	init: function() {
		Parse.initialize('KEY','KEY');	
	},

	fetchFinesData: function() {
		let finesClass = Parse.Object.extend("finesData");
		let queryObject = new Parse.Query(finesClass);
		queryObject.ascending("worker");

		queryObject.find({
			success: (finesData) => {
				this.trigger(finesData);
			},
			error: (error) => {
				console.error(error);
			}
		});
	}

});

export default FinesStore;

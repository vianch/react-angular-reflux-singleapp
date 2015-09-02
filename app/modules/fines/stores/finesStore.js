import Reflux from 'reflux';
import {finesActions} from '../actions/finesActions';
import {Parse} from 'parse';

const FinesStore = Reflux.createStore({

	listenables: [finesActions],

	init: function() {
		Parse.initialize('Yya18e2HqyVrAoT1YzYXa3TqYZhSfz2ij4ysFxaW', 'OG3pSDuI5AT5KiN8akUFJNqTXBG6iXcpkBFENOSQ');	
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

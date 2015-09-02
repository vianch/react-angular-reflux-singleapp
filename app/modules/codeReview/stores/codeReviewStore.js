import Reflux from 'reflux';
import {codeReviewActions} from '../actions/codeReviewActions';
import {Parse} from 'parse';

const CodeReviewStore = Reflux.createStore({

	listenables: [codeReviewActions],

	init: function() {
		Parse.initialize('Yya18e2HqyVrAoT1YzYXa3TqYZhSfz2ij4ysFxaW', 'OG3pSDuI5AT5KiN8akUFJNqTXBG6iXcpkBFENOSQ');	
	},

	fetchCodeReviewData: function() {
		let codeReviewDataClass = Parse.Object.extend("codeReviewData");
		let queryObject = new Parse.Query(codeReviewDataClass);
		queryObject.ascending("day");

		queryObject.find({
			success: (codeReviewData) => {
				this.trigger(codeReviewData);
			},
			error: (error) => {
				console.error(error);
			}
		});
	}

});

export default CodeReviewStore;
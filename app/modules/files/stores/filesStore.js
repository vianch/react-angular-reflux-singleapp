import Reflux from 'reflux';
import {filesActions} from '../actions/filesActions';
import {Parse} from 'parse';


const FilesStore = Reflux.createStore({

	listenables: [filesActions],

	init: function() {
		Parse.initialize('KEY','KEY');	
	},

	fetchFileActions: function(cateogryName) {
		let documentData = Parse.Object.extend("document");
		let queryObject = new Parse.Query(documentData);
		queryObject.equalTo("category", cateogryName);
		queryObject.ascending("name");

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

export default FilesStore;
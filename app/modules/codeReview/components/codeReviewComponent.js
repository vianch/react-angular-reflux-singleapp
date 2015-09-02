import React from 'react';
import CodeReviewOfDayComponent from './codeReviewOfDayComponent';
import CodeReviewCalendarComponent from './codeReviewCalendarComponent';
import {codeReviewActions} from '../actions/codeReviewActions';
import CodeReviewStore from '../stores/codeReviewStore';
import LoaderComponent from '../../commons/components/loaderComponent';

export default class CodeReviewComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			eventsData: [],
			reviewersOfTheDayData: []
		}

		codeReviewActions.fetchCodeReviewData();
	}

	componentDidMount() {
		this.unsubscribe = CodeReviewStore.listen((data) => {
			this.setState(this.initializeEvents(data));
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	initializeEvents(data) {
		let eventsData = [];
		let date = this.initializeDate();
		let reviewersOfTheDayData = [{
			avatar:'none.png',
			name: 'No one does code review'
		}];

		if(data) {
			for(let i=0, dataLength = data.length; i<dataLength; i++) {
				eventsData[i] = {
					title: data[i].attributes.reviewers,
	                start: new Date(date.y, data[i].attributes.month - 1, data[i].attributes.day),
	                allDay: true
				}

				if(( (data[i].attributes.month - 1) === date.m) && (data[i].attributes.day === date.d)) {
					reviewersOfTheDayData = this.setReviewersOfTheDayData(data[i].attributes.reviewers);
				}
			}

			return {
				eventsData: eventsData,
				reviewersOfTheDayData: reviewersOfTheDayData
			}
		} 
	}

	setReviewersOfTheDayData(reviewers) {
		let vocalDictionary = {"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u"}
		let reviewersArray = reviewers.split("y");
		let reviewersOfTheDayData = [];

		for(let i=0, reviewersArrayLength =reviewersArray.length; i<reviewersArrayLength; i++) {
			reviewersOfTheDayData[i] = {
				avatar: reviewersArray[i].toLowerCase().replace(/ /g,'').replace(/[^\w ]/g, function(char) {
			  		return vocalDictionary[char] || char;
				}),
				name: reviewersArray[i]

			}
		}

		return reviewersOfTheDayData;
	}

	initializeDate() {
		let date = new Date();
	    return {
		     d: date.getDate(),
		     m: date.getMonth(),
		     y: date.getFullYear()
	    };
	}

	render() {
		if(this.state.eventsData.length > 0 && this.state.reviewersOfTheDayData.length >0) {
			return <div className="row">
				<CodeReviewOfDayComponent reviewers={this.state.reviewersOfTheDayData} />
				<CodeReviewCalendarComponent events={this.state.eventsData} />
			</div>
		} else {
			return <LoaderComponent />
		}
	}
}
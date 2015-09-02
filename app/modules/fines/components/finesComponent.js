import React from 'react';
import FinesStore from '../stores/finesStore';
import FinesTableComponent from './finesTableComponent';
import FinesMoneyReportBoxes from './finesMoneyReportBoxesComponent';
import FinesDailyFeedComponent from './finesDailyFeedComponent';
import LoaderComponent from '../../commons/components/loaderComponent';
import {finesActions} from '../actions/finesActions';

export default class FinesComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			finesData : [],
			totalMoney : 0
		}

		finesActions.fetchFinesData();
	}

	componentDidMount() {
		this.unsubscribe = FinesStore.listen((data) => {
			this.setState(this.calculateTotalMoney(data));
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	calculateTotalMoney(data) {
		let totalMoney = 0;
		let totalDebt = 0;
		let totalCashOnHand = 0;
		if(data) {
			for(let i=0, finesDataLength = data.length; i<finesDataLength; i++) {
				totalMoney = totalMoney 
				+ data[i].attributes.meeting
				+ data[i].attributes.jira
				+ data[i].attributes.buildBreak
				+ data[i].attributes.cellPhone;

				totalDebt += data[i].attributes.due;
			}
			totalCashOnHand = totalMoney - totalDebt;
		}

		return {
			finesData: data,
			totalMoney: totalMoney,
			totalDebt: totalDebt,
			totalCashOnHand: totalCashOnHand
		};
	}

	render() {
				if(this.state.finesData.length > 0) {
					return <div className="wrapper-component"> 
						<FinesMoneyReportBoxes total={this.state.totalMoney} debt={this.state.totalDebt} hand={this.state.totalCashOnHand}/>
						<div className="row">
							<FinesDailyFeedComponent />
							<FinesTableComponent data={this.state.finesData} />
						</div>
					</div>
				} else {
					return <LoaderComponent />
				}
	}
}


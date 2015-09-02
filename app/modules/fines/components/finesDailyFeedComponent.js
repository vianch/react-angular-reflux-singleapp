import React from 'react';
import FinesDailyFeedStore from '../stores/finesDailyFeedStore';
import FinesFeedElementComponent from './finesFeedElementComponent';
import LoaderComponent from '../../commons/components/loaderComponent';
import Uid from 'uid';
import {finesDailyFeedAction} from '../actions/finesActions';

class FinesDailyFeedComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			daily : []
		}

		finesDailyFeedAction.fetchDailyFeed();
	}

	componentDidMount() {
		this.unsubscribe = FinesDailyFeedStore.listen((data) => {
			this.setState({
				daily:data
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		if(this.state.daily.length > 0) {
			return 	<div className="col-lg-4 col-sm-4 col-xs-12"> 
						<div className="ibox float-e-margins">

							<div className="ibox-title">
								<h5>Daily fines feed</h5>
							</div>

							<div className="ibox-content daily-fines-content">
								<div className="feed-activity-list">
								{
									this.state.daily.map((feedData) => {
										return <FinesFeedElementComponent 
											detail={feedData.attributes.detail}
											date={feedData.attributes.finesDate}
											worker={feedData.attributes.workerId.attributes.worker}
											avatar={feedData.attributes.workerId.attributes.avatar}
											key={Uid(10)} />
									})
								}
								</div>
							</div>
						</div>
					</div>
				} else {
					return <LoaderComponent />
				}
		
	}
		

}

export default FinesDailyFeedComponent;
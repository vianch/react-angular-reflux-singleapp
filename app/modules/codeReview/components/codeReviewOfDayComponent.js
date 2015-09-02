import React from 'react';
import {imagesTeamFolder} from '../../commons/utilities/constants';
import Uid from 'uid';

export default class CodeReviewOfDayComponent extends React.Component {
	render(){
		let avatar = "";
		return <div className="col-lg-3 col-sm-3">

			<div className="widget yellow-bg p-lg text-center">
			     <div className="m-b-md">
			    	<p><small>Code review document</small></p>
			        <i className="fa fa-file fa-4x"></i>
			        <br /> <a href="assets/downloads/checkList2.0.xlsx" target="_blank" className="document-download">Download</a>
			        <br /> <a href="https://agora.bizagi.com/bizagi/dev/Docs/_layouts/15/WopiFrame2.aspx?sourcedoc=/bizagi/dev/Docs/TeamDocuments/06_BizagiStudio/Quality/CheckList2.0.xlsx&action=default" target="_blank" className="document-download">Open</a>
			    </div>
			</div>

			<div className="ibox float-e-margins">
				 <div className="ibox-title">
				 	<h5>Code review of the day</h5>
				 </div>

				 <div className="ibox-content">
				 	<div className="feed-activity-list">
					{
						this.props.reviewers.map((reviewersData) => {
							avatar = `${imagesTeamFolder}${reviewersData.avatar}.jpg`;
							return <div className="feed-element" key={Uid(4)}>
										<img className="avatar circle" src={avatar}  />
									 	<div className="media-body ">
											<strong>{reviewersData.name}:</strong> Reviewer <br />
											<small className="text-muted">Today</small>
										</div>
									</div>
						})
					}	
				 	</div>
				 </div>
			</div>

			
		</div>

	}
}


import React from 'react';
import Uid from 'uid';
import FinesRowComponent from './finesRowComponent';

export default class FinesTableComponent extends React.Component {
	render() {
		return  <div className="col-lg-8 col-sm-8 col-xs-12"> 
					<div className="ibox float-e-margins">
						<div className="ibox-title">
							<h5>Debt report</h5>
						</div>

						<div className="ibox-content">
							<div className="table-responsive table-debt">
								<table className="table table-hover">
							     <thead>
							       <tr>
							         <th>Team member</th>
							         <th>Build Break</th>
							         <th>Jira</th>
							         <th>Meetings</th>
							         <th>Cell phone</th>
							         <th>Debt</th>
							       </tr>
							     </thead>
							     <tbody>
							     {
							     	this.props.data.map((componentData) => {
							     		return <FinesRowComponent attributes = {componentData.attributes} key={Uid()} />
							     	})
							     }
							     </tbody>
							   </table>
							</div>
						</div>
					</div>
				</div>

				
	}
}
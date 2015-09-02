import React from 'react';
import {imagesTeamFolder} from '../../commons/utilities/constants';

class FinesRowComponent extends React.Component {

		getColorClass() {
			return (this.props.attributes.due > 0) ? "text-center danger" : "text-center success";
		}

		render() {

			let avatar = `${imagesTeamFolder}${this.props.attributes.avatar}`;

			return <tr> 
				<td className="bold">
				 <img className="avatar circle" src={avatar} alt={this.props.attributes.worker} />
				 <span>{this.props.attributes.worker}</span>
				</td>
				<td className="text-center"> ${this.props.attributes.buildBreak} </td>
				<td> ${this.props.attributes.jira} </td>
				<td> ${this.props.attributes.meeting} </td>
				<td> ${this.props.attributes.cellPhone} </td>
				<td className={this.getColorClass()}> ${this.props.attributes.due} </td>
			</tr>
		}

}

export default FinesRowComponent;
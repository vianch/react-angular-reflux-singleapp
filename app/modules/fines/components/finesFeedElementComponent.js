import React from 'react';
import {imagesTeamFolder} from '../../commons/utilities/constants';

class FinesFeedElementComponent extends React.Component {
		render() {
			let avatar = `${imagesTeamFolder}${this.props.avatar}`;
			return <div className="feed-element">
						<img className="avatar circle" src={avatar}  />
						 <div className="media-body ">
							<strong>{this.props.worker}:</strong> {this.props.detail}. <br />
							<small className="text-muted">{this.props.date}</small>
						</div>
					</div>
		}

}

export default FinesFeedElementComponent;
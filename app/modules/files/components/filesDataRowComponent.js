import React from 'react';
import PieChart from 'react-simple-pie-chart';

 export default class FilesDataRow extends React.Component {

 	calculatePieData() {
 		if(this.props.filedata.attributes.complete 
 			&& this.props.filedata.attributes.complete < 101) {
 			let missing = 100 - this.props.filedata.attributes.complete;
 			return [
 				{ color: '#fff',value: missing },
 			    { color: '#a9be01', value: this.props.filedata.attributes.complete }
 			];
 		} else {
 			return [];
 		}
 		
 	}

 	getColorClass() {
 		return (this.props.filedata.attributes.complete > 50) ? "non-danger" : "danger";
 	}

    render() {
        return  <tr className={this.getColorClass()}>
                    <td>< a href={this.props.filedata.attributes.url} >{this.props.filedata.attributes.name}</a> </td>
                    <td>{this.props.filedata.attributes.description}</td>
                    <td><div className="pie-container"><PieChart slices={this.calculatePieData()} /></div> {this.props.filedata.attributes.complete}%</td>
                    <td><a href={this.props.filedata.attributes.documentUrl} ><i className="fa fa-floppy-o"></i> DOWNLOAD</a></td>
                </tr> 
    }
 }

                       

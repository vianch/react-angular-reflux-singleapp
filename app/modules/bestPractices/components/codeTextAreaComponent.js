import React from 'react';
import CodeMirror from 'codemirror';
import $ from 'jquery';

export default class CodeTextAreaComponent extends React.Component {

    constructor(props) {

        super(props);
        this.wrongClass = `${this.props.id}_wrong`;
        this.rightClass = `${this.props.id}_right`;
    }

    componentDidMount() {
        this.initializeCodeMirror();
    }

    initializeCodeMirror() {
 

       CodeMirror.fromTextArea(
            document.getElementById(this.wrongClass),{
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true
       });

       CodeMirror.fromTextArea(
            document.getElementById(this.rightClass),{
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true
       });

    }

    render(){
        return <div className="ibox"  >
                                    <div className="ibox-title">
                                        <h5>{this.props.attributes.title}</h5>
                                    </div>
                                    <div className="row ibox-content">
                                        <p className="ibox-detail">
                                            <strong>DETAIL:</strong> {this.props.attributes.detail}.
                                        </p>

                                        <div className="row">
                                            <div className="col-sm-6 col-sx-12">
                                                <div className="ibox float-e-margins panel panel-danger">
                                                    <div className="panel-heading">
                                                        <h5 className="panel-title">Wrong</h5>
                                                    </div>
                                                    <div className="ibox-content">
                                                        
                                                       <textarea id={this.wrongClass}
                                                                 ref="textarea"
                                                                 value={this.props.attributes.wrong} readOnly />
                                                    </div>
                                                </div>
                                            </div>   
                                             <div className="col-sm-6 col-sx-12">
                                                <div className="ibox float-e-margins panel panel-success">
                                                    <div className="panel-heading">
                                                        <h5 className="panel-title">Right </h5>
                                                    </div>
                                                    <div className="ibox-content">
                                                        
                                                       <textarea id={this.rightClass}
                                                                 ref="textarea"
                                                                 value={this.props.attributes.right} readOnly />
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>

                                    </div> 
                </div>


          
    }
}
 
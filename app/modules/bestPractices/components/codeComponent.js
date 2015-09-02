import React from 'react';
import 'codemirror/mode/javascript/javascript';
import Uid from 'uid';

import BestPracticesStore from '../stores/bestPracticesStore';
import {bestPracticesActions} from '../actions/bestPracticesActions';
import LoaderComponent from '../../commons/components/loaderComponent';
import CodeTextAreaComponent from './codeTextAreaComponent';

export default class CodeReviewCalendarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            codeData: []
        }

        bestPracticesActions.fetchBestPracticesData();
    }

    componentDidMount() {
        this.unsubscribe = BestPracticesStore.listen((data) => {
           
            this.setState({
                codeData: data
            });
        });
       
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {

       if(this.state.codeData.length) {
        return <div className="row">
                
                <div className="col-lg-12 col-sm-12">
                 {
                    this.state.codeData.map((data) => {
                         let id = `code_${Uid(10)}`;
                        return  <CodeTextAreaComponent attributes={data.attributes} key={id} id={id} />                   
                    })
                }
                </div>
        </div>
        } else {
            return <LoaderComponent />
        }
        
    }
}


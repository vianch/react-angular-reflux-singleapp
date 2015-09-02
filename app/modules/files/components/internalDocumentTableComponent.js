import React from 'react';
import Uid from 'uid';
import {filesActions} from '../actions/filesActions';
import FilesStore from '../stores/filesStore';
import LoaderComponent from '../../commons/components/loaderComponent';
import FilesDataRow from './filesDataRowComponent';
import $ from 'jquery';

export default class InternalDocumentTableComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filesData: []
        }

        filesActions.fetchFileActions("rubik");
    }

    componentDidMount() {
        this.unsubscribe = FilesStore.listen((data) => {
            this.setState({filesData: data});
        });

        this.initializeFetchEvents();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    initializeFetchEvents() {
        let that = this;
        $(".catalog-document").on('click', function(event) {
            event.preventDefault();
            let category = $(this).attr('category');
            that.setState({filesData: []});
            filesActions.fetchFileActions(category);
        });
    }

    render() {
        if(this.state.filesData.length > 0) {
            return  <div className="table-responsive">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Document name</th>
                                <th>Description</th>
                                <th>Complete</th>
                                <th>Documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filesData.map((fileData) => {
                                   return <FilesDataRow filedata ={fileData} key ={Uid()} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                } else {
                    return <LoaderComponent />
                }
        
               
    }
}


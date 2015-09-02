import React from 'react';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

export default class CodeReviewCalendarComponent extends React.Component {

    componentDidMount() {
        this.initializeCalendar();
    }

    initializeCalendar() {
        let events = this.props.events;
        
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaDay'
            },
             events: events
        });
    }

    render() {
        return <div className="col-lg-9 col-sm-9">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Review code calendar </h5>
                    </div>
                    <div className="ibox-content">
                        <div id="calendar"></div>
                    </div>
                </div>
            </div>
    }
}


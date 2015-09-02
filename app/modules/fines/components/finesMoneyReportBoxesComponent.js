import React from 'react';

export default class FinesMoneyReportBoxesComponent extends React.Component {
        render() {

            return <div className="row"> 
               <div className="col-md-4 col-sm-12">
                   <div className="ibox float-e-margins">
                       <div className="ibox-title">
                                     <span className="label label-primary pull-right">Season</span>
                                     <h5>Total money</h5>
                       </div>
                       <div className="ibox-content">
                           <h1 className="no-margins">${this.props.total}</h1>
                               <div className="stat-percent font-bold text-success">20% <i className="fa fa-level-up"></i></div>
                               <small>Monthly increase</small>
                       </div>
                   </div>
               </div>

               <div className="col-md-4 col-sm-12">
                   <div className="ibox float-e-margins">
                       <div className="ibox-title">
                                     <span className="label label-warning pull-right">Month</span>
                                     <h5>Total debt</h5>
                       </div>
                       <div className="ibox-content">
                           <h1 className="no-margins">${this.props.debt}</h1>
                               <div className="stat-percent font-bold text-success">20% <i className="fa fa-level-up"></i></div>
                               <small>Monthly increase</small>
                       </div>
                   </div>
               </div>

               <div className="col-md-4 col-sm-12">
                   <div className="ibox float-e-margins">
                       <div className="ibox-title">
                                     <span className="label label-success pull-right">Week</span>
                                     <h5>Total cash on hand</h5>
                       </div>
                       <div className="ibox-content">
                           <h1 className="no-margins">${this.props.hand}</h1>
                               <div className="stat-percent font-bold text-success">20% <i className="fa fa-level-up"></i></div>
                               <small>Monthly increase</small>
                       </div>
                   </div>
               </div>
            </div>
        }
}



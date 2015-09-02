import React from 'react';  
import angular from 'angular';
import angularRoute from 'angular-route';
import './commons/utilities/events';

import RegisterRouteForReactComponent from './commons/controllers/registerRouteForReactComponent';
import FinesComponent from './fines/components/finesComponent';
import CodeReviewComponent from './codeReview/components/codeReviewComponent';
import CodeComponent from './bestPractices/components/codeComponent';
import InternalDocumentTableComponent from './files/components/internalDocumentTableComponent'

angular.module('bizagiTeamApp', [angularRoute]).config(['$routeProvider',($routeProvider) =>{

    $routeProvider
        .when('/', RegisterRouteForReactComponent(<FinesComponent />,'app',null))
        .when('/review', RegisterRouteForReactComponent(<CodeReviewComponent />,'app',null))
        .when('/practices', RegisterRouteForReactComponent(<CodeComponent />,'app',null))
        .when('/team', {
            templateUrl : 'templates/pages/contacts.html'
        })
        .when('/resources', {
            templateUrl : 'templates/pages/resources.html'
        })
        .when('/files', RegisterRouteForReactComponent(
            <InternalDocumentTableComponent />,'table-document','templates/pages/file_manager.html')
        )
        .when('/files/article', {
            templateUrl : 'templates/pages/article.html'
        })
        .when('/document_wizard', {
            templateUrl : 'templates/pages/document_wizard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]); 


      
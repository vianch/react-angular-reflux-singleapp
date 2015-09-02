import React from 'react';

 let RegisterRouteForReactComponent = (componentClass, containerId, templateUrl) => {

    let controller = ($scope, $injector) => {
        if (componentClass) {
            let container = document.getElementById(containerId);

            // Mount Component
            React.render(componentClass, container);

            // Unmount Component
            $scope.$on('$destroy', function () {
                React.unmountComponentAtNode(container);
            });
        }
    };

    controller.$inject = ['$scope', '$injector'];

    if(templateUrl === null) {
        return {
            'template': '<main id="' + containerId + '"></main>',
            'controller': controller
        };
    } else {
        return {
            'templateUrl': templateUrl,
            'controller': controller
        }
    }
   
};

export default RegisterRouteForReactComponent;
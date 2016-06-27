hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactoryBackup',
    function ($scope, $http, $location,commonResourcesFactoryBackup) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory


       $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl)
           .success(function (data) {
               $scope.employees=data;
           })
           .error(function (error) {

           });
        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);
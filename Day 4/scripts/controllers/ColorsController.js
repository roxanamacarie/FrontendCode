/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('ColorsController', ['$scope', function($scope) {
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted"
        },
        {
            "text" : "primary",
            "class": "text-primary"
        },
        {
            "text" : "success",
            "class": "text-success"
        },
        {
            "text" : "info",
            "class": "text-info"
        },
        {
            "text" : "warning",
            "class": "text-warning"
        },
        {
            "text" : "danger",
            "class": "text-danger"
        }
    ];

    $scope.colorClass= undefined;
    $scope.changeColor = function () {
        $scope.colorClass= $scope.selectedText;
    }
}]);
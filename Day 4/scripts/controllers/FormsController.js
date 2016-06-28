/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormsController', ['$scope', function($scope) {
    
    $scope.submitFunction = function(){

        if($scope.myForm.$valid == true)
            alert("Submit!");
        else
            alert("Your submit is not valid!");
    }
}]);
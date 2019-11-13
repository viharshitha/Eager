var app=angular.module('myapp',[]);
app.controller('mycontl',function($scope) {
    $scope.Name="Alekhya";
    $scope.age=35;
    $scope.incage = function() {
        $scope.age =  $scope.age*2;
        $scope.sum = $scope.age
    }
});
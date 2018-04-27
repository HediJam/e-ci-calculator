var app = angular.module('CalculatorApp', []);
    app.controller('CalculatorController',  function($scope) {
        
        $scope.result = function() {
            if ($scope.operator == '+') {
                $scope.res = $scope.operand1 + $scope.operand2;
            }
            else if ($scope.operator == '-') {

                $scope.res = $scope.operand1 - $scope.operand2;
            }
            else if ($scope.operator == '*') {
                $scope.res = $scope.operand1 * $scope.operand2;
            }
            else if ($scope.operator == '/') {
                $scope.res = $scope.operand1 / $scope.operand2;
            }
        };
    });
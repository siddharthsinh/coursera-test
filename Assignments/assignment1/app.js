(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.item="";
  $scope.msg="";
  $scope.split = function () {
    if($scope.item != "") {
      var iteams = $scope.item.split(',');
      if(iteams.length<=3){
        $scope.msg = "Enjoy!";
        $scope.color="green";
      }
      else{
        $scope.msg = "Too much!";
        $scope.color="green";
      }
    }
    else {
       $scope.msg = "Please enter the data first";
       $scope.color="red";
    }
    };
}
})();

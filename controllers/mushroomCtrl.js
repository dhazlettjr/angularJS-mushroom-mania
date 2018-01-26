'use strict';

angular.module("MushroomApp").controller("mushroomCtrl", function($scope, mushroomFactory) {

  mushroomFactory.getMushrooms()
  .then( (mushroomData) => {
      $scope.mushroomArray = [];
      for (let mushroom in mushroomData.data){
          $scope.mushroomArray.push(mushroomData.data[mushroom]);
      }
    console.log($scope.mushroomArray);
  });

});
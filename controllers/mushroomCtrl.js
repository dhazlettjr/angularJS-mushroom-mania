'use strict';

angular.module("MushroomApp").controller("MushroomCtrl", function($scope, MushroomFactory) {

  MushroomFactory.getMushrooms()
  .then( (mushroomData) => {
      $scope.mushroomArray = [];
      for (let mushroom in mushroomData.data.mushrooms){
          $scope.mushroomArray.push(mushroomData.data.mushrooms[mushroom]);
      }
    console.log($scope.mushroom);
  });

});
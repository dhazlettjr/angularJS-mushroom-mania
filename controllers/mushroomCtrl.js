'use strict';

angular.module("MushroomApp").controller("mushroomCtrl", function($scope, mushroomFactory) {

  mushroomFactory.getMushrooms()
  .then( (mushroomData) => {
    console.log('mushroomData', mushroomData);
    $scope.mushrooms = mushroomData.data.mushrooms;
  });

});
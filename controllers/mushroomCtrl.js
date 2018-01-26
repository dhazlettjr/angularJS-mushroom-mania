'use strict';

// this will set up the controller for the project
angular.module("MushroomApp").controller("mushroomCtrl", function($scope, mushroomFactory) {

  // getmushrooms is a function that will push the firebase data in a new array
  mushroomFactory.getMushrooms()
  .then( (mushroomData) => {
      $scope.mushroomArray = [];
      for (let mushroom in mushroomData.data){
        // scope.mushroomarray is the new array that will recieve the old data
          $scope.mushroomArray.push(mushroomData.data[mushroom]);
      }
    console.log($scope.mushroomArray);
  });

});
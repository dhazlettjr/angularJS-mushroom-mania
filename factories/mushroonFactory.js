'use strict';

angular.module("MushroomApp").factory("mushroomFactory", function($q,$http){

// Return a promise for our async XHR
let getMushrooms = () => {
return $q(function(resolve, reject) {
    $http
      .get("https://fuck-firebase.firebaseio.com/mushrooms.json")
      .then(
        function(mushrooms) {
          resolve(mushrooms);
        },function(error) {
          reject(error);
        }
      );
  });
}
return { getMushrooms };
});

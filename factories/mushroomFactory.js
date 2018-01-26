'use strict';

// initialize the module to encorporate the factory
angular.module("MushroomApp").factory("mushroomFactory", function($q,$http){

// Return a promise with XHR
let getMushrooms = () => {
return $q(function(resolve, reject) {
    $http
      .get(####)
      .then(
        (mushrooms) => {
          resolve(mushrooms);
        })
         .catch((err)=> {
           reject(err);
         })
  });
}
// this will return the firebase data
return { getMushrooms };
});

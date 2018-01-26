'use strict';

angular.module("MushroomApp").factory("MushroomFactory", function($q,$http){

// Return a promise for our async XHR
let getMushrooms = () => {
return $q(function(resolve, reject) {
    $http
      .get
      .then(
        (mushrooms) => {
          resolve(mushrooms);
        })
         .catch((err)=> {
           reject(err);
         })
  });
}
return { getMushrooms };
});

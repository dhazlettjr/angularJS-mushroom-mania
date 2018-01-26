"use strict";

angular.module("MushroomApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/mushroomList.html",
      controller: "MushroomCtrl"
    })
    .otherwise("/")
})
 .controller("MushroomCtrl", function($scope, $rootScope){
     $scope.mushrooms = "welcome to Angular!";
 });
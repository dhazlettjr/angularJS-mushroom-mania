"use strict";

const app = angular.module("MushroomApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/mushroomList.html",
      controller: "mushroomCtrl"
    })
    .otherwise("/")
})
 .controller("mushroomCtrl", function($scope, $rootScope){
     $scope.message = "welcome to Angular!";
 });
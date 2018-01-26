"use strict";

angular.module("MushroomApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/mushroomList.html",
      controller: "mushroomCtrl"
    })
    .otherwise("/")
});

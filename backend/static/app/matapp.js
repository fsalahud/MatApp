(function(){
     "use strict";

    var app= angular.module('matapp', ['ngRoute','ui.bootstrap', 'ngAnimate']);
   
     app.config(function($routeProvider, $interpolateProvider){

             $routeProvider  
                .when('/', {
                     templateUrl: '/static/includes/home.html',
                 }) 
    
                 .otherwise({redirectTo:'/'});
         })

         .run(["$location", "$rootScope","$http","matappService", function ($location, $rootScope, $http,matappService) {
             // detect url change
             $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
                 // update headers
                 if(current.$$route){
                     $rootScope.title = current.$$route.title;
                     $rootScope.buttonClass = current.$$route.buttonClass;
                     $rootScope.buttonUrl = current.$$route.buttonUrl;
                 }
             });
         }])



         app.controller("matappController",function($http,matappService,$scope){
            var home=this;



           
         });



        
})()
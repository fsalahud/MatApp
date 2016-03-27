angular.module('starter.services', [])
  .service('artService',function($http){
    var service=this;

    service.getInfo = function(callback){
      $http.get('http://172.20.70.0:8000/api/helloWorld/')
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getArtist = function(id,callback){
      $http.get('http://172.20.70.0:8000/api/' + id + 'getartist/')
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getArt = function(id,callback){
      $http.get('http://172.20.70.0:8000/api/getartifact/' + id )
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getImage = function(callback){
      $http.get('http://172.20.70.0:8000/api/' + id + 'getimage/')
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };
  });
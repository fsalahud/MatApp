angular.module('starter.services', [])
  .service('artService',function($http){
    var service=this;


    service.getArtist = function(id,callback){
      $http.get('https://mathafapp.herokuapp.com/api/getartist/'+id)
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getArt = function(id,callback){
      $http.get('https://mathafapp.herokuapp.com/api/getartifact/' + id )
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getImage = function(id, callback){
      $http.get('https://mathafapp.herokuapp.com/api/getimage/' + id)
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

    service.getAudio = function(id, callback){
      $http.get('https://mathafapp.herokuapp.com/api/getaudio/' + id)
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
    };

      service.upview = function(id,callback){
        $http.get('https://mathafapp.herokuapp.com/api/upview/' + id)
        .success(function(data,status){
          callback(null, data);
        })
        .error(function(error, status){
          callback(error,null);
        });
      };
  });
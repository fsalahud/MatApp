angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaBarcodeScanner, artService, $http, $ionicLoading, $cordovaMedia) {

    var controller = this;
    controller.english=true;
    controller.arabic=false;

})

.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner,artService, $cordovaMedia, $ionicLoading) {

    var scanner = this;
    scanner.scannerID;
    scanner.art;
    scanner.artist;
    scanner.image;
    scanner.audio;
    scanner.playing=false;
    scanner.audio_url;
    scanner.views;
    scanner.empty=true;
    scanner.load=false;
    scanner.showText=false;
    scanner.audioLoad=false;

    scanner.getArt=function(id){
      artService.getArt(id,function(err,data){
      if (err) scanner.art = err;
      else scanner.art=data;
          console.log("Art retrieved");
    });
    };

    scanner.getArtist=function(id){
      artService.getArtist(id,function(err,data){
      console.log(data);
      if (err) scanner.artist = err;
      else scanner.artist=data;
          console.log("Artist retrieved");
    });
    };

    scanner.getImage=function(id){
      artService.getImage(id,function(err,data){
      if (err) scanner.image = err;
      else scanner.image=data;
           scanner.load=false;
          console.log("Image retrieved");
    });
    };

    scanner.getAudio=function(id){
      artService.getAudio(id,function(err,data){
      if (err) scanner.audio = err;
      else scanner.audio=data;
           scanner.audio_url="https://mathafapp.herokuapp.com/uploads/"+scanner.audio[0].fields.audio;
          console.log("audio retrieved");
    });
    };

      scanner.upview = function(id){
      artService.upview(id,function(err,data){
          if (err) {console.log("Error in updating views");}
          else {scanner.views=data;}
      });
      };

      scanner.toggleText=function(){
        if (scanner.showText==false){
          scanner.showText=true;
        }
        else{scanner.showText=false;}
      }

  
    scanner.scanBarcode=function(){
    scanner.empty=true;
    scanner.showText=false;
    $cordovaBarcodeScanner.scan().then(function(barcodeData){
      if (barcodeData.cancelled===0){
        scanner.load=true;
        scanner.empty=false;
        scanner.scannerID=barcodeData.text;
        scanner.getArt(scanner.scannerID);
        scanner.getArtist(scanner.scannerID);
        scanner.getImage(scanner.scannerID);
        scanner.getAudio(scanner.scannerID);
        scanner.upview(scanner.scannerID);
      }
    }, function(error){
      console.log("Error in scanning barcode");
    });
  }

  // ----------------------------------//

  scanner.media;

  scanner.play=function(){
    console.log("audio_url", scanner.audio_url);
    scanner.media= $cordovaMedia.newMedia(scanner.audio_url)
    
    scanner.audioLoad=true;
    scanner.media.play();
    
    scanner.audioLoad=false;
    scanner.playing=true;
  }

  scanner.stop=function(){
      scanner.media.stop();
      scanner.playing=false;
}



});
